'use client';
// import { useSession } from 'next-auth/react';
import styles from './HeaderNav.module.css';
import Link from 'next/link';

export default function HeaderNav() {
  // const { data: session } = useSession();

  return (
    <div className="bg-[#1b1b1b] text-white">
      <div className="w-[52rem] mx-auto top-0 sticky">
        <div className="border-solid border-b border-[#cdcdcd]">
          <div className="flex h-16 text-white ">
            <div className="flex items-center gap-2">
              <Link href="/">George Weblog</Link>
            </div>
            <nav>
              <ul className="flex gap-4 justify-space text-base items-center h-full pl-8 mr-auto">
                <li>
                  <Link href="/upload">Delete Post</Link>
                </li>
                <li>
                  <Link href="/author">About Me</Link>
                </li>
                {/* {session?.user ? (
              <li>
                <Link href="/posts/update/db">Update DB</Link>
              </li>
            ) : (
              <li>
                <Link href="/api/auth/signin">Sign In</Link>
              </li>
            )} */}
              </ul>
            </nav>
            {/* <Button className={styles.menuButton} disabled={false} size="medium" color="success" variant="text"> */}
            {/* <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="white" fill="white">
              <title>menu</title>
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
          </SvgIcon> */}
            {/* </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
