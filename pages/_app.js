import { SessionProvider } from 'next-auth/react';
import '../styles/global.css';
// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <div className="flex flex-1 flex-col">
        <Component {...pageProps}></Component>
      </div>
    </SessionProvider>
  );
}
