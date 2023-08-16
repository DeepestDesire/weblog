import HeaderText from './HeaderText';
import Image from 'next/image';
import Button from '@mui/material/Button';

export default function Header() {

  
  return (
    <div>
      <div className="flex justify-between px-4 h-16 items-center">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full"
            src="/profile.png"
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
      <div className="flex border-y" style={{ backgroundColor: 'rgb(249, 249, 251)' }}>
        <HeaderText title={'个人'} path={'/'}></HeaderText>
        <HeaderText title={'Canvas Editor'} path={'/canvas/editor'}></HeaderText>
        <HeaderText title={'时光'}></HeaderText>
        <HeaderText title={'感受'}></HeaderText>
      </div>
    </div>
  );
}
