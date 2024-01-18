import '../styles/global.css';
import { SessionProvider } from 'next-auth/react';
import { Layout } from '../components/layout';
export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <div className="flex flex-1 flex-col">
          <Component {...pageProps}></Component>
        </div>
      </Layout>
    </SessionProvider>
  );
}
