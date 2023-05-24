/* eslint-disable react/prop-types */
import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      this is Layout component
      {children}
    </div>
  );
}
