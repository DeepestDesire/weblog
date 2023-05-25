/* eslint-disable react/prop-types */
import HeaderText from './HeaderText';
import Border from './border';
import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Border></Border>
      <div className={styles.nav}>
        <HeaderText title={'Web Design'}></HeaderText>
        <HeaderText title={'Promote Your Site'}></HeaderText>
        <HeaderText title={'Small Business Tips'}></HeaderText>
        <HeaderText title={'Inspiration'}></HeaderText>
        <HeaderText title={'Resources'}></HeaderText>
      </div>
      <Border></Border>
      {children}
    </div>
  );
}
