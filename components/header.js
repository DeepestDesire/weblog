import styles from './header.module.css';
import HeaderText from './HeaderText';
import Border from './border';
import Image from 'next/image';
import Button from '@mui/material/Button';
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
        <div className={styles.column}>
          <div className={styles.buttonLocation}>
            <Button
              disabled={false}
              size="large"
              color="secondary"
              variant="outlined"
              style={{
                color: 'black',
                borderColor: 'black',
                borderRadius: '20px',
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <Border></Border>
      <div className={styles.nav}>
        <HeaderText title={'Home Page'} path={'/'}></HeaderText>
        <HeaderText title={'Blogs'} path={'/posts/Nodejs-Eggjs'}></HeaderText>
        <HeaderText title={'Small Business Tips'}></HeaderText>
        <HeaderText title={'Inspiration'}></HeaderText>
        <HeaderText title={'Resources'}></HeaderText>
      </div>
      <Border></Border>
    </div>
  );
}
