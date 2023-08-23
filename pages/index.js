/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/layout';
import ArticleItem from './articleItem';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <div id="Home">
        <Head>
          <title>George Charles WebLog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <section className="mt-4">
            <h2 className="font-base mb-2">Featured Articles</h2>
            <div className="grid gap-4 grid-rows-3">
              {allPostsData.map((props) => (
                <ArticleItem key={props.id} {...props} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();

  console.log('allPostsData :>> ', allPostsData);
  return {
    props: {
      allPostsData: allPostsData,
    },
  };
}
