/* eslint-disable react/prop-types */
import Link from 'next/link';
import styles from './index.module.css';
export default function HeaderText({ title, path }) {
  return (
    <Link href={path ?? '/'}>
      <div className={styles.container}>
        <p className={styles.text}>{title}</p>
      </div>
    </Link>
  );
}
