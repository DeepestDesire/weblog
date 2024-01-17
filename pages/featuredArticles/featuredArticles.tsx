/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import ArticleItem from './articleItem';
import styles from './featuredArticles.module.css';

export default function FeaturedArticles({ allPostsData }) {
  return (
    <div className={styles.sectionContainer}>
      <h2 className="font-base mb-2">Featured Articles</h2>
      <div className={styles.tileContainer}>
        {allPostsData.map((props) => (
          <ArticleItem key={props.id} {...props} />
        ))}
      </div>
    </div>
  );
}
