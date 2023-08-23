/* eslint-disable react/prop-types */
import Head from 'next/head';
import Link from 'next/link';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { getPostDataFromServer, getAllPostIdsFromServer } from '../../lib/posts';

export default function Post({ postData }) {
  const { title, date, contentHTML } = postData;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <section className="mx-4 max-w-full overflow-hidden">
        <article>
          <h1 className="text-2xl font-semibold mt-4 mb-8">{title}</h1>
          <div>
            <Date dateString={date}></Date>
          </div>
          <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
        </article>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </section>
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
  const postData = await getPostDataFromServer(params.id);
  return {
    props: {
      postData,
    },
  };
}
