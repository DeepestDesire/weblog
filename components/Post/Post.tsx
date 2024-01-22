'use client';

import Image from 'next/image';
import styles from './Post.module.css';
import { useCallback } from 'react';

export function Post({ id, title, coverURL }) {
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
      {coverURL && (
        <Image
          src={coverURL}
          alt="cover"
          width={0}
          height={0}
          sizes="100vw"
          style={{ objectFit: 'cover', width: '100%', height: '100px' }}
        ></Image>
      )}
      {/* <p className={styles.content}>{content && content.length > 100 ? content.slice(0, 200) : content}</p> */}
    </div>
  );
}
