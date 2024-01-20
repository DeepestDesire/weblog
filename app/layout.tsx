import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/header';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'George Weblog Home Page',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'flex flex-1 flex-col text-white text-base ' + inter.className}>
        <div className="flex flex-col h-full">
          <div className="top-0 sticky">
            <div className="bg-[#1b1b1b] border-solid border-b border-[#cdcdcd]">
              <Header></Header>
            </div>
          </div>
          {children}
          <footer className="flex justify-center mt-4 pt-4 border-solid border-t  border-[#cdcdcd]">
            <Link href="/" rel="noreferrer">
              Powered by George
            </Link>
          </footer>
        </div>
      </body>
    </html>
  );
}