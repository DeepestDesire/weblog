/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/layout';
import styles from './index.module.css';
import FeaturedArticles from './featuredArticles/featuredArticles';
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <div id="Home">
        <Head>
          <title>George Charles WebLog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.container}>
          <div className={styles.heroContainer}>
            <div className={styles.hero}>
              <section className={styles.section}>
                <h1>
                  Resources for <u>Developers</u>, by Developers{' '}
                </h1>
                <p>Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.</p>
              </section>
            </div>
          </div>
          <section className="mt-4">
            <div className={styles.content}>
              <FeaturedArticles allPostsData={allPostsData}></FeaturedArticles>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData: allPostsData,
    },
  };
}

