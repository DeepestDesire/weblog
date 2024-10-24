import styles from './PostList.module.css';

import { Post } from './Post';
import { searchPost } from '../../lib/notion/post';
import { cookies } from 'next/headers';

export async function PostList() {
  return;
  // const cookie = await cookies();
  // const token = cookie.get(' __Host-next-auth.csrf-token')?.value;

  // let allPostsData = await searchPost('');
  // allPostsData = allPostsData || [];

  // return (
  //   <div className={styles.sectionContainer}>
  //     <h2 className="font-base mb-2">Featured Articles</h2>
  //     <div className={styles.tileContainer}>
  //       {allPostsData.map((props) => (
  //         <Post key={props.id} {...props} />
  //       ))}
  //     </div>
  //     <h1>{token || ''}</h1>
  //   </div>
  // );
}
