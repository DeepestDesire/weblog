import './globals.css';
import Header from '../components/header';
import Link from 'next/link';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="flex flex-1 flex-col">
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
