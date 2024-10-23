'use client';

import { createBlogDatabase } from '../lib/mongodb';
import { useState, useEffect } from 'react';
import { createBlog, getAllBlogs, deleteBlog } from '../lib/mongodb'; // 假设你已经在 mongodb 文件中实现了 getAllBlogs 和 deleteBlog 函数

export default function DatabaseDashboard() {
  const [message, setMessage] = useState('');
  const [blogs, setBlogs] = useState([]); // 新增状态来存储博客列表
  const [loading, setLoading] = useState(false); // 新增状态来跟踪加载状态

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

    handleCreateBlog(exampleBlog);
  };

  const fetchAllBlogs = async () => {
    setLoading(true); // 开始加载
    try {
      // 模拟网络延迟
      const result = await getAllBlogs();
      if (result.success) {
        setBlogs(result.blogs);
      } else {
        console.error('获取博客列表失败:', result.error);
      }
    } catch (error) {
      console.error('获取博客时出错:', error);
    } finally {
      setLoading(false); // 加载结束
    }
  };

  const handleDelete = async (blogId) => {
    setLoading(true); // 开始加载
    try {
      // 模拟网络延迟
      await new Promise((resolve) => setTimeout(resolve, 500));

      const result = await deleteBlog(blogId);
      if (result.success) {
        // 删除成功后重新获取博客列表
        fetchAllBlogs();
      } else {
        console.error('删除博客失败:', result.error);
      }
    } catch (error) {
      console.error('删除博客时出错:', error);
    } finally {
      // setLoading(false); // 加载结束
    }
  };

  const handleCreateBlog = async (blogData) => {
    setLoading(true);
    try {
      const result = await createBlog(blogData);
      if (result.success) {
        fetchAllBlogs(); // 创建成功后刷新博客列表
      } else {
        console.error('创建博客失败:', result.error);
      }
    } catch (error) {
      console.error('创建博客时出错:', error);
    } finally {
      // setLoading(false);
    }
  };

  // 使用 useEffect 在组件挂载自动获取博客
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

      <button onClick={fetchAllBlogs} className="mb-4 px-4 py-2 bg-yellow-500 text-white rounded">
        获取所有博客
      </button>

      {loading ? (
        <div className="text-center text-gray-500">加载中...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogs.map((blog) => (
            <div key={blog._id} className="relative p-4 border rounded shadow">
              <button onClick={() => handleDelete(blog._id)} className="absolute top-2 right-2 text-red-500">
                删除
              </button>
              <h2 className="text-xl font-bold">{blog.title}</h2>
              <p className="text-sm text-gray-600">{blog.subtitle}</p>
              <p className="mt-2">{blog.content}</p>
              <p className="text-sm text-gray-500">作者: {blog.author.username}</p>
              <p className="mt-4 text-xs text-gray-400">ID: {blog._id}</p> {/* 显示博客 ID */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
