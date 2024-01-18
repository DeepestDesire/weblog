import styles from './Post.module.css';
import propTypes from 'prop-types';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

export function Post({ id, title, content }) {
  const router = useRouter();

  const click = useCallback(() => {
    router.push(`/posts/${id}`);
  }, [id, router]);

  return (
    <div className={styles.card} onClick={click}>
      <h3
        className="mb-4  leading-7"
        style={{ fontSize: '1.2rem', lineHeight: '1.7rem', color: '#1b1b1b', maxHeight: '3.4rem', fontWeight: 500 }}
      >
        <a href={`/posts/${id}`}>{title}</a>
      </h3>
      <p className={styles.content}>{content && content.length > 100 ? content.slice(0, 200) : content}</p>
    </div>
  );
}

Post.propTypes = {
  id: propTypes.string,
  title: propTypes.string,
  content: propTypes.string,
};
