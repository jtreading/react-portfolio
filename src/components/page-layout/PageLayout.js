/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageLayout.module.css';
import books from './books-white.png';

export default function PageLayout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <div className={styles.title}>
            <img src={books} alt="books logo" className={styles.logo} />
            <h1>Jonathon Reading</h1>
          </div>
        </NavLink>
        <NavLink title="Projects" to="/projects" style={{ textDecoration: 'none' }}>
          <p className={styles.navButton}>Projects</p>
        </NavLink>
        <p> - </p>
        <NavLink title="About" to="/about" style={{ textDecoration: 'none' }}>
          <p className={styles.navButton}>About</p>
        </NavLink>
        <p> - </p>
        <NavLink title="Contact" to="/contact" style={{ textDecoration: 'none' }}>
          <p className={styles.navButton}>Contact</p>
        </NavLink>
      </header>
      <main className={styles.main}>{ children }</main>
      <footer className={styles.footer}>Jonathon Reading, 2022</footer>
    </div>
  );
}
