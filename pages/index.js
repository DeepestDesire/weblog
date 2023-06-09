/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import Layout from '../components/layout';

import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';

// eslint-disable-next-line react/prop-types
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <div className={styles.container} id="Home">
        <Head>
          <title>Next App Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <section
            className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
          >
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <div className={styles.blogContainer}>
              <ul>
                {allPostsData.map(({ id, date, title }) => (
                  <li className={utilStyles.listItem} key={id}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br />
                    <small className={utilStyles.lightText}>
                      <Date dateString={date} />
                    </small>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  };
}
