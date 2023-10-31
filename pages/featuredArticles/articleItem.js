import propTypes from 'prop-types';
import { useCallback, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation'
 
import styles from './articleItem.module.css';
export default function ArticleItem({ id, title, content }) {
  const router = useRouter()

  useEffect(() => {
    console.log('title', title);
  }, []);


  const click = useCallback(() => {
    router.push(`/posts/${id}`)
  }, [id])

  return (
    <div className={styles.card} onClick={click}>
      <h3
        className="mb-4  leading-7"
        style={{ fontSize: '1.2rem', lineHeight: '1.7rem', color: '#1b1b1b', maxHeight: '3.4rem', fontWeight: 500 }}
      >
        <a href={`/posts/${id}`}>{title}</a>
      </h3>
      <p className={styles.content}>{content.length > 100 ? content.slice(0, 200) : content}</p>
    </div>
  );
}


ArticleItem.propTypes = {
  id: propTypes.string,
  title: propTypes.string,
  content: propTypes.string,
};
