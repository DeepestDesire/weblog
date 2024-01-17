/* eslint-disable react/prop-types */
import Head from 'next/head';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { getSinglePost, getAllPostIdsFromServer } from '../../lib/posts';
import Date from '../component/date';
import Layout from '../component/layout';
export default function Post({ postData }) {
  const { title, date, content } = postData;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <section className="max-w-[1440px] place-self-center">
        <article>
          <h1 className="text-2xl font-semibold mt-4 mb-8">{title}</h1>
          <div>
            <Date dateString={date}></Date>
          </div>
          <Markdown>{content}</Markdown>
        </article>
      </section>
      <h2 className="place-self-center  max-w-[1440px]">
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
