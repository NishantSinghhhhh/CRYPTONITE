'use client';
import { useState, useEffect } from 'react';
import styles from './GlobalMarketCap.module.css';

interface GlobalData {
  active_cryptocurrencies: number;
  total_market_cap: Record<string, number>;
}

interface ApiResponse {
  data: GlobalData;
}

export default function GlobalMarketCap() {
  const [data, setData] = useState<GlobalData | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/global')
      .then((res) => res.json())
      .then((data: ApiResponse) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((error: Error) => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p className={`${styles.info} ${styles.loading}`}>Loading...</p>;
  if (error) return <p className={`${styles.info} ${styles.infoError}`}>Error loading data: {error.message}</p>;
  if (!data) return <p className={`${styles.info} ${styles.infoNoData}`}>No data available</p>;

  // Sum all market caps
  const totalMarketCap = Object.values(data.total_market_cap).reduce((acc, value) => acc + value, 0);
  const totalMarketCapInTrillions = (totalMarketCap / 1e12).toFixed(2); // Convert to trillions and format to 2 decimal places

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Global Cryptocurrency Data</h1>
      {data && (
        <div className="space-y-4">
          <p className={styles.info}>
            Active Cryptocurrencies: <span className={styles.highlight}>{data.active_cryptocurrencies}</span>
          </p>
          <p className={styles.info}>
            Total Market Cap: <span className={styles.highlight}>${totalMarketCapInTrillions} trillion</span>
          </p>
          {/* Add more data display as needed */}
        </div>
      )}
    </div>
  );
}
