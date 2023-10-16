// import Image from 'next/image';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className="flex justify-between px-4 h-16 items-center bg-black" style={{ backgroundColor: '#1b1b1b' }}>
        <div className="flex items-center gap-2">
          <p className="text-white">George Weblog</p>
        </div>
        <Button className={styles.menuButton}  disabled={false} size="medium" color="success" variant="delete">
          <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="white" fill="white">
              <title>menu</title>
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
          </SvgIcon>
        </Button>
      </div>
    </div>
  );
}
