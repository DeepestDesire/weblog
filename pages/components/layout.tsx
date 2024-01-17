import Header from './header';
import propTypes from 'prop-types';
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
        <a href="/" rel="noreferrer">
          Powered by
          <img src="/vercel.svg" alt="Vercel" className="h-4" />
        </a>
      </footer>
    </div>
  );
}

Layout.prototype = {
  children: propTypes.node,
};
