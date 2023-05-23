import styles from './app.module.css';

// eslint-disable-next-line react/prop-types
export default function App({Component, pageProps}) {
  return  <div className={styles.app}>
    <Component {...pageProps}></Component>;
  </div>;
  
 
}
