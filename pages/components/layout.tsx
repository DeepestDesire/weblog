import Link from 'next/link';
import Header from './header';
import propTypes from 'prop-types';
import Image from 'next/image';
export function Layout({ children }) {
  return (
    <div className="grid">
      <div className="top-0 sticky">
        <div className="bg-[#1b1b1b] border-solid border-b border-[#cdcdcd]">
          <Header></Header>
        </div>
      </div>
      {children}
      <footer className="flex justify-center mt-4 pt-4 border-solid border-t  border-[#cdcdcd]">
        <Link href="/" rel="noreferrer">
          Powered by
          <Image src="/vercel.svg" alt="Vercel" className="h-4" />
        </Link>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: propTypes.any,
};

export default Layout;
