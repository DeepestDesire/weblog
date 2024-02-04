import './globals.css';
import { WebVitals } from './_components/web-vitals';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/header';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '深度学习',
  description: '创造属于自己的产品！',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'flex flex-1 flex-col text-base ' + inter.className}>
        <WebVitals />
        <div className="flex flex-col h-full">
          <div className="top-0 sticky">
            <div className="bg-[#1b1b1b] border-solid border-b border-[#cdcdcd]">
              <Header></Header>
            </div>
          </div>
          {children}
          <footer className="flex justify-center my-4 py-4 border-solid border-t border-[#cdcdcd]">
            <Link href="https://beian.miit.gov.cn" rel="noreferrer">
              沪ICP备2024048045号-111
            </Link>
          </footer>
        </div>
      </body>
    </html>
  );
}
