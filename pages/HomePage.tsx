'use client';


import BitcoinHolding from '../components/BitcoinHolding/BitcoinHoldings';
import EthereumHolding from '../components/EthereumHolding/Ethereum';
import GlobalMarketCap from '../components/GlobalMarketCap/GlobalMarketcap';
import styles from './HomePage.module.css'; // Import the CSS Module

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className="max-w-7xl mx-auto py-20 px-6 sm:px-8">
        <h1 className={styles.heading}>
          Largest <br /> Crypto Tracker
        </h1>
        <p className={styles.subheading}>
          Decentralized dreams, contracts smart,
          Cryptonite gleam, a revolution start.
        </p>

        {/* Uncomment and style the form if needed */}
        {/* <form className={styles.formContainer}>
          <input 
            type="text" 
            placeholder="Search Crypto" 
            className={styles.input}
          />
          <button 
            type="submit" 
            className={styles.button}
          >
            Search
          </button>
        </form> */}
      </div>
      <div className={styles.section}>
          <GlobalMarketCap/>
      </div>
      <div className={styles.section}>
        <BitcoinHolding/>
      </div>
      <div className={styles.section}>
        <EthereumHolding/>
      </div>
    </div>
  );
};

export default HomePage;
