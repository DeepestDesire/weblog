import propTypes from 'prop-types';
import { useEffect } from 'react';
export default function ArticleItem({ id, title, content }) {
  useEffect(() => {
    console.log('title', title);
  }, []);

  return (
    <div className="flex flex-col border rounded-lg  p-2" style={{ borderColor: 'rgb(205 205 205)' }}>
      <h3
        className="mb-4  leading-7"
        style={{ fontSize: '1.2rem', lineHeight: '1.7rem', color: '#1b1b1b', maxHeight: '3.4rem', fontWeight: 500 }}
      >
        <a href={`/posts/${id}`}>{title}</a>
      </h3>
      <p
        className="overflow-hidden text-sm font-normal"
        style={{ fontSize: '1rem', lineHeight: '1.2rem', color: '#1b1b1b', maxHeight: '3.6rem' }}
      >
        {content}
      </p>
    </div>
  );
}
ArticleItem.propTypes = {
  id: propTypes.string,
  title: propTypes.string,
  content: propTypes.string,
};
