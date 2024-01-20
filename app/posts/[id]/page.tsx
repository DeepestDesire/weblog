import Markdown from 'react-markdown';
import { getMarkDownWithPost, getPost } from '../../../lib/notion/post';

export default async function Page({ params }: { params: { id: string } }) {
  const { content } = await getMarkDownWithPost(params.id);
  const { title } = await getPost(params.id);
  return (
    <section className="max-w-[1440px] place-self-center mx-16 text-black">
      <article>
        <h1 className="text-2xl font-semibold mt-4 mb-8">{title}</h1>
        <Markdown>{content}</Markdown>
      </article>
    </section>
  );
}
