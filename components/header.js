import styles from './header.module.css';
import HeaderText from './HeaderText';
import Border from './border';
import Image from 'next/image';

export default function Header() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.headerUp}>
        <div className={styles.column}>
          <Image
            className={styles.borderCircle}
            src="/profile.jfif"
            height={80} // Desired size with correct aspect ratio
            width={80} // Desired size with correct aspect ratio
            alt="George"
            fill={false}
          />
        </div>
        <div className={styles.column}>daiyao</div>
      </div>
      <Border></Border>
      <div className={styles.nav}>
        <HeaderText title={'Web Design'}></HeaderText>
        <HeaderText title={'Promote Your Site'}></HeaderText>
        <HeaderText title={'Small Business Tips'}></HeaderText>
        <HeaderText title={'Inspiration'}></HeaderText>
        <HeaderText title={'Resources'}></HeaderText>
      </div>
      <Border></Border>
    </div>
  );
}
