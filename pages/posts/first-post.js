import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import Layout from '../../components/layout';


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>first Title</title>
      </Head>
      <div id='FirstPost'>
        <h1>First Post</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
        <Image 
          src='/profile.jfif'
          height={600} // Desired size with correct aspect ratio
          width={600} // Desired size with correct aspect ratio
          alt="Your Name"
          fill={false}
        ></Image>
      </div>
    </Layout>
  );
}
