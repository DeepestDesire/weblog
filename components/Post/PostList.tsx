import styles from './PostList.module.css';

import { Post } from './Post';
import { searchPost } from '../../lib/notion/post';

export async function PostList() {
  let allPostsData = await searchPost('');
  allPostsData = allPostsData || [];
  return (
    <div className={styles.sectionContainer}>
      <h2 className="font-base mb-2">Featured Articles</h2>
      <div className={styles.tileContainer}>
        {allPostsData.map((props) => (
          <Post key={props.id} {...props} />
        ))}
      </div>
    </div>
  );
}
