import styles from './header.module.css';
import HeaderText from './HeaderText';
import Image from 'next/image';
import Button from '@mui/material/Button';

export default function Header() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.topNavigation}>
        <div className={styles.logo}>
          <Image
            className={styles.borderCircle}
            src="/profile.jfif"
            height={50} // Desired size with correct aspect ratio
            width={50} // Desired size with correct aspect ratio
            alt="George"
          />
          <p>George Weblog</p>
        </div>
        <Button disabled={false} size="medium" color="secondary" variant="outlined">
          Subscribe
        </Button>
      </div>
      <div className={styles.nav}>
        <HeaderText title={'Home Page'} path={'/'}></HeaderText>
        <HeaderText title={'Blogs'} path={'/posts/Nodejs-Eggjs'}></HeaderText>
        <HeaderText title={'Small Business Tips'}></HeaderText>
        <HeaderText title={'Inspiration'}></HeaderText>
        <HeaderText title={'1'}></HeaderText>
      </div>
    </div>
  );
}
