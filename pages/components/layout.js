import Head from 'next/head';
import styles from './layout.module.css';
import Header from './header';

export default function Layout({ children }) {
  return (
    <div className="grid">
      <div className={styles.stickyHeader}>
        <div className={styles.topNav}>
          <Header></Header>
        </div>
      </div>
      {children}
      <footer className="flex justify-center mb-2 pt-2 border-solid border-y border-b-0">
        <a href="/" rel="noreferrer">
          Powered by
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
