import { redirect } from 'next/navigation';
import { PostList } from '../components/Post/PostList';
import DatabaseDashboard from '../components/DatabaseDashboard';

export default async function Page() {
  redirect('/dashboard');

  // 下面的代码不会执行，因为 redirect 会中断执行
  return (
    <main>
      <div className="bg-primary overflow-hidden px-4">
        <div className="h-[284px] max-w-[52rem] mx-auto text-white">
          <section>
            <h1 className="text-5xl">
              Resources for <u>Developers</u>, by Developers
            </h1>
            <p>Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.</p>
          </section>
        </div>
      </div>
      <section className="mt-4 flex flex-clo">
        <DatabaseDashboard />
        {/* <PostList /> */}
      </section>
    </main>
  );
}
