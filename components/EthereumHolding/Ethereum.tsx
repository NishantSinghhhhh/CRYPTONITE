'use client';
import { useState, useEffect } from 'react';
import styles from './EthereumHolding.module.css';

interface Company {
  name: string;
  total_holdings: number;
  total_current_value_usd: number;
  percentage_of_total_supply: number;
}

interface Data {
  companies: Company[];
}

export default function EthereumHolding() {
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/companies/public_treasury/ethereum')
      .then((res) => res.json())
      .then((data: Data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error: Error) => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>Error loading data: {error.message}</p>;
  if (!data || !data.companies.length) return <p className={styles.noData}>No data available</p>;

  // Extract the top 10 companies
  const top10Companies = data.companies.slice(0, 10);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Top 6 Companies Holding Ethereum</h1>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th scope="col" className={styles.tableHeadCell}>
              #
            </th>
            <th scope="col" className={styles.tableHeadCell}>
              Company
            </th>
            <th scope="col" className={styles.tableHeadCell}>
              Total Ethereum Holdings
            </th>
            <th scope="col" className={styles.tableHeadCell}>
              Total Value in USD
            </th>
            <th scope="col" className={styles.tableHeadCell}>
              % of Total Supply
            </th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {top10Companies.map((company, index) => (
            <tr key={company.name} className={styles.tableBodyRow}>
              <td className={styles.tableBodyCell}>
                {index + 1}
              </td>
              <td className={styles.tableBodyCell}>
                {company.name}
              </td>
              <td className={styles.tableBodyCell}>
                {company.total_holdings.toLocaleString()}
              </td>
              <td className={styles.tableBodyCell}>
                ${company.total_current_value_usd.toLocaleString()}
              </td>
              <td className={styles.tableBodyCell}>
                {company.percentage_of_total_supply}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
