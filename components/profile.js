/* eslint-disable react/prop-types */
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

let name = 'george charles';
export default function Profile({ height }) {
  return (
    <Link href="/" className={utilStyles.profile}>
      <Image
        className={utilStyles.borderCircle}
        src="/profile.jfif"
        height={height ? height : 144} // Desired size with correct aspect ratio
        width={height ? height : 144} // Desired size with correct aspect ratio
        alt="George"
        fill={false}
      />
      <h1 className={utilStyles.heading2X1}>{name}</h1>
    </Link>
  );
}
