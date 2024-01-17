/* eslint-disable react/prop-types */
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

let name = '戴遥  { George Charles }';
export default function Profile({ height }) {


  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );


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
