import Markdown from 'react-markdown';
import { getSinglePost, getAllPostIdsFromServer } from '../../lib/posts';
import Date from '../../components/date';
import propTypes from 'prop-types';

export default function Post({ postData }) {
  const { title, date, content } = postData;
  return (
    <section className="max-w-[1440px] place-self-center">
      <article>
        <h1 className="text-2xl font-semibold mt-4 mb-8">{title}</h1>
        <div>
          <Date dateString={date}></Date>
        </div>
        <Markdown>{content}</Markdown>
      </article>
    </section>
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

Post.propTypes = {
  postData: {
    title: propTypes.string,
    date: propTypes.string,
    content: propTypes.string,
  },
};
