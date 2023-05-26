/* eslint-disable react/prop-types */
import Head from 'next/head';
import styles from './layout.module.css';
import Profile from './profile';
import Header from './header';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        {/* <meta property="og:image" content={} */}
      </Head>
      <Header></Header>
      <header className={styles.header}>
        {home? (<>
          <Profile > </Profile>
        </>): (<>
          <Profile height={108}> </Profile>
        </>)}
      </header>
      {children}
      <footer className={styles.footer}  >
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
            Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
