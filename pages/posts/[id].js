/* eslint-disable react/prop-types */
import Head from 'next/head';
import Link from 'next/link';
import Date from '../../components/date';
import Layout from '../../components/layout';
import utilsStyles from '../../styles/utils.module.css';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
  const { title,  date ,contentHTML} = postData;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilsStyles.headingXl}> {title}</h1>
        <div className={utilsStyles.lightText}>
          <Date dateString={date} ></Date>
        </div>
        <div dangerouslySetInnerHTML={{__html: contentHTML}} />
      </article>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  };
}
