/* eslint-disable react/prop-types */
import Head from 'next/head';
import styles from './layout.module.css';
import Header from './header';

// export const metadata = {
//   viewport: {
//     width: 'device-width',
//     initialScale: 1,
//     maximumScale: 1,
//   },
// };

export default function Layout({ children }) {
  return (
    <div className="grid">
      <Head>
        <link rel="icon" href="/favicon" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
