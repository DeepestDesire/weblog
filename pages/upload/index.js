/* eslint-disable react/prop-types */
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import { useCallback } from 'react';


export default function Upload() {


  let onClick = useCallback((e) => {
    console.log('12 :>> ', 12);
    fetch('/api/post/create',{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({data:12}), // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((data) => {
        // setData(data);
        // setLoading(false);
      });

    console.log('2 :>> ', e);

  },[]);



  return (
    <Layout>
      <Head>
        <title>{'文档上传'}</title>
      </Head>
      <section className="mx-4 max-w-full overflow-hidden">
        <article>
          <h1 className="text-2xl font-semibold mt-4 mb-8">{'文档上传'}</h1>
          <textarea name="Text1" cols="40" rows="5"></textarea>
          <button onClick={onClick}></button>
        </article>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </section>
    </Layout>
  );
}

