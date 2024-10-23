'use client';

import { createBlogDatabase } from '../lib/mongodb';
import { useState } from 'react';
import { createBlog } from '../lib/mongodb';
export default function InitializeDatabaseButton() {
  const [message, setMessage] = useState('');

  const initializeDatabase = async () => {
    const result = await createBlogDatabase();
    console.log('result', result);
    setMessage(JSON.stringify(result)); // 假设 result 有一个 message 属性
  };

  const createBlogAction = async () => {
    // 创建博客
    const exampleBlog = {
      title: '示例博客',
      subtitle: '这是一个示例博客的副标题',
      content: '这是示例博客的内容，支持 HTML 或 Markdown',
      cover_image_url: 'https://example.com/cover.jpg',
      author: {
        author_id: '123456',
        username: '示例作者',
      },
      status: 'draft', // 使用枚举类型
      tags: ['示例', '博客'],
    };

    createBlog(exampleBlog).then((result) => {
      if (result.success) {
        console.log('示例博客创建成功，ID:', result.blogId);
      } else {
        console.error('示例博客创建失败:', result.error);
      }
    });
  };

  return (
    <>
      <button onClick={initializeDatabase} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        初始化数据库
      </button>

      <div>{message}</div>

      <button onClick={createBlogAction} className="mt-4 ml-2 px-4 py-2 bg-green-500 text-white rounded">
        创建博客
      </button>
    </>
  );
}
