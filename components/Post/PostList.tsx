/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Post } from './Post';
import styles from './PostList.module.css';

export function PostList({ allPostsData }) {
  return (
    <div className={styles.sectionContainer}>
      <h2 className="font-base mb-2">Featured Articles</h2>
      <div className={styles.tileContainer}>
        {allPostsData ? allPostsData.map((props) => <Post key={props.id} {...props} />) : null}
      </div>
    </div>
  );
}
