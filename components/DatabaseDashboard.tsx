'use client';

import { createBlogDatabase } from '../lib/mongodb';
import { useState, useEffect } from 'react';
import { createBlog, getAllBlogs } from '../lib/mongodb'; // 假设你已经在 mongodb 文件中实现了 getAllBlogs 函数

export default function DatabaseDashboard() {
  const [message, setMessage] = useState('');
  const [blogs, setBlogs] = useState([]); // 新增状态来存储博客列表

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

  const fetchAllBlogs = async () => {
    try {
      const result = await getAllBlogs();
      if (result.success) {
        setBlogs(result.blogs);
      } else {
        console.error('获取博客列表失败:', result.error);
      }
    } catch (error) {
      console.error('获取博客时出错:', error);
    }
  };

  // 使用 useEffect 在组件挂载时自动获取博客
  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <button onClick={initializeDatabase} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        初始化数据库
      </button>

      <div>{message}</div>

      <button onClick={createBlogAction} className="mb-4 ml-2 px-4 py-2 bg-green-500 text-white rounded">
        创建博客
      </button>

      <button onClick={fetchAllBlogs} className="mb-4 ml-2 px-4 py-2 bg-yellow-500 text-white rounded">
        获取所有博客
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p className="text-sm text-gray-600">{blog.subtitle}</p>
            <p className="mt-2">{blog.content}</p>
            <p className="text-sm text-gray-500">作者: {blog.author.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
