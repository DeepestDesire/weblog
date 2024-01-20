'use client';

import styles from './Post.module.css';
import { useCallback } from 'react';

export function Post({ id, title, content = '' }) {
  const click = useCallback(() => {
    console.log('id :>> ', id);
  }, [id]);

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
