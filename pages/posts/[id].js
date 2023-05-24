/* eslint-disable react/prop-types */
import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/post';
import Date from '../../components/date';

export default function Post({ postData }) {
  const { title, id, date ,contentHTML} = postData;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      {title}
      <br />
      {id}
      <br />
      <Date dateString={date} ></Date>
      <div dangerouslySetInnerHTML={{__html: contentHTML}} />
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
