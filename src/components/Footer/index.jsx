import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        © 2025 My Portfolio. All rights reserved.
      </div>
    </footer>
  );
}