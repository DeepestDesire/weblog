import styles from "./index.module.css";

export default function HeaderText({ title }) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{title}</p>
    </div>
  );
}
