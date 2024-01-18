import styles from './index.module.css';

import { getAllPostsData } from '../lib/posts';

import { PostList } from '../components/Post/PostList';

export async function getServerSideProps() {
  console.log('index getServerSideProps');
  let allPostsData = await getAllPostsData();
  allPostsData = allPostsData || [];
  return {
    props: {
      allPostsData: allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
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
          <PostList allPostsData={allPostsData} />
        </div>
      </section>
    </main>
  );
}
