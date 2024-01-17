/* eslint-disable react/prop-types */
import Head from 'next/head';
import Link from 'next/link';
import Markdown from 'react-markdown';
import Date from '../../components/date';
import Layout from '../../components/layout';

import { getSinglePost, getAllPostIdsFromServer } from '../../lib/posts';

export default function Post({ postData }) {
  const { title, date, content } = postData;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <section className="grid">
        <article className=" place-self-center">
          <h1 className="text-2xl font-semibold mt-4 mb-8">{title}</h1>
          <div>
            <Date dateString={date}></Date>
          </div>
          <Markdown>{content}</Markdown>
        </article>
      </section>
      <h2 className=" place-self-center">
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIdsFromServer();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getSinglePost(params.id);
  return {
    props: {
      postData,
    },
  };
}
