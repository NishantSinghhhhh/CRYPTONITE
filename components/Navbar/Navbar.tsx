// src/components/Navbar/Navbar.tsx
'use client';

import React from 'react';
import styles from './Navbar.module.css'; // Import the CSS Module
import Logo from '../../public/logo'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          {/* Replace with your logo component or image */}
          <span >CryptoNite</span>
        </div>
        <div className={styles.flexContainer}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>Home</li>
            <li className={styles.navItem}>Explore</li>
            <li className={styles.navItem}>WatchList</li>
          </ul>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
