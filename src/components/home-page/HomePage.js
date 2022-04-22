import React from 'react';
import styles from '../../utils/UniversalStyles.module.css';

export default function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageCard}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>Home Page</h3>
        </div>
        <p>
          Welcome! This is a temporary placeholder for the amazing content that will soon be coming.
        </p>
      </div>
    </div>
  );
}
