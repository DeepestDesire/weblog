import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';

import './globals.css';
import { WebVitals } from './_components/web-vitals';
import HeaderNav from '../components/HeaderNav';
import SessionProvider from './_components/SessionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '深度学习',
  description: '创造属于自己的产品！',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // const session = await getServerSession();

  return (
    <html lang="en">
      <body className={'flex flex-1 flex-col text-base ' + inter.className}>
        <WebVitals />
        {/* <SessionProvider session={session}> */}
        <div className="flex flex-col h-full">
          <div className="top-0 sticky">
            <div className="bg-[#1b1b1b] border-solid border-b border-[#cdcdcd]">
              <HeaderNav></HeaderNav>
            </div>
          </div>
          {children}
          <footer className="flex justify-center my-4 py-4 border-solid border-t border-[#cdcdcd]">
            <Link href="https://beian.miit.gov.cn" rel="noreferrer">
              沪ICP备2024048045号-111
            </Link>
          </footer>
        </div>
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
