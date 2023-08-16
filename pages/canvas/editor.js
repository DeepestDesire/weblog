import { useEffect } from 'react';
import Head from 'next/head';
import Container from './components/container';
export default function Page() {
  useEffect(() => {}, []);
  return (
    <>
      <Head></Head>
      <Container></Container>
    </>
  );
}
