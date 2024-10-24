import Markdown from 'react-markdown';
import { getMarkDownWithPost, getPost } from '../../../lib/notion/post';

export async function generateMetadata(props) {
  const params = await props.params;
  const markdownData = getMarkDownWithPost(params.id);
  const postData = getPost(params.id);
  // use promise all to handle multiple promise
  const [{ content }, { title }] = await Promise.all([markdownData, postData]);
  return {
    title: title,
    description: content,
  };
}

// parallel data fetch

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  // initial fetch promise
  const markdownData = getMarkDownWithPost(params.id);
  const postData = getPost(params.id);

  // use promise all to handle multiple promise
  const [{ content }, { title }] = await Promise.all([markdownData, postData]);

  return (
    <section className="max-w-[1440px] place-self-center mx-4 text-black">
      <article>
        <h1 className="text-2xl font-semibold mt-4 mb-8">{title}</h1>
        <Markdown>{content}</Markdown>
      </article>
    </section>
  );
}
