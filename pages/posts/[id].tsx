import Markdown from 'react-markdown';
import { getMarkDownWithPost, getPost } from '../../lib/notion/post';

export default function Post({ data }) {
  if (!data) return null;
  const { title, content } = data;
  return (
    <section className="max-w-[1440px] place-self-center">
      <article>
        <h1 className="text-2xl font-semibold mt-4 mb-8">{title}</h1>
        <Markdown>{content}</Markdown>
      </article>
    </section>
  );
}

export async function getServerSideProps({ params }) {
  const { content } = await getMarkDownWithPost(params.id);
  const { title } = await getPost(params.id);
  return {
    props: {
      data: { title, content },
    },
  };
}
