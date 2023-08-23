import Image from 'next/image';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './header.module.css';

export default function Header() {
  return (
    <>
      <div className="flex justify-between px-4 h-16 items-center bg-black" style={{ backgroundColor: '#1b1b1b' }}>
        <div className="flex items-center gap-2">
          {/* <Image
            className="rounded-full"
            src="/profile.png"
            height={50} // Desired size with correct aspect ratio
            width={50} // Desired size with correct aspect ratio
            alt="George"
          /> */}
          <p className="text-white">George Weblog</p>
        </div>

        <Button disabled={false} size="medium" color="success" variant="delete">
          <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="white" fill="white">
              <title>menu</title>
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
          </SvgIcon>
        </Button>
      </div>

      <div className={styles.hero}>
        <section className={styles.section}>
          <h1>
            Resources for <u>Developers</u>, by Developers{' '}
          </h1>
          <p>Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.</p>
          <div className="homepage-hero-search"></div>
        </section>
        <div>1123</div>
      </div>
      {/* <div className="flex border-y" style={{ backgroundColor: 'rgb(249, 249, 251)' }}>
        <HeaderText title={'个人'} path={'/'}></HeaderText>
        <HeaderText title={'Canvas Editor'} path={'/canvas/editor'}></HeaderText>
        <HeaderText title={'时光'}></HeaderText>
        <HeaderText title={'感受'}></HeaderText>
      </div> */}
    </>
  );
}
