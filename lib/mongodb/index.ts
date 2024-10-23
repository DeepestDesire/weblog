'use server';

import { MongoClient } from 'mongodb';

class MongoClientManager {
  client;
  constructor() {
    this.client = new MongoClient(process.env.MONGODB_URI);

    this.client
      .connect()
      .then(() => {
        console.log('MongoDB connected');
      })
      .catch((err) => {
        console.error('MongoDB connection error:', err);
      });
  }

  async connect() {
    return this.client.connect();
  }

  async findMovies() {
    const startTime = Date.now();

    const movies = await this.client.db('sample_mflix').collection('movies').find({ year: 1999 }).limit(11).toArray();

    const endTime = Date.now();
    const duration = endTime - startTime;

    console.log('1查找时间:', duration, '毫秒');

    return movies;
  }

  // 创建博客数据库，添加 posts，users ， comments 集合
  async createBlogDatabase() {
    try {
      const db = this.client.db('blog');
      const collections = ['posts', 'users', 'comments'];
      const initStatus = {};

      for (const collectionName of collections) {
        const collectionExists = await db.listCollections({ name: collectionName }).hasNext();
        if (!collectionExists) {
          await db.createCollection(collectionName);
          console.log(`集合 ${collectionName} 创建成功`);
          initStatus[collectionName] = 'created';
        } else {
          console.log(`集合 ${collectionName} 已存在`);
          initStatus[collectionName] = 'exists';
        }
      }

      console.log('博客数据库和集合设置完成');
      return { success: true, status: initStatus };
    } catch (error) {
      console.error('创建博客数据库时出错:', error);
      return { success: false, error: error.message };
    }
  }
}

const mongoClientManager = new MongoClientManager();

export async function createBlogDatabase() {
  try {
    const db = mongoClientManager.client.db('blog');
    const collections = ['posts', 'users', 'comments'];
    const initStatus = {};

    for (const collectionName of collections) {
      const collectionExists = await db.listCollections({ name: collectionName }).hasNext();
      if (!collectionExists) {
        await db.createCollection(collectionName);
        console.log(`集合 ${collectionName} 创建成功`);
        initStatus[collectionName] = 'created';
      } else {
        console.log(`集合 ${collectionName} 已存在`);
        initStatus[collectionName] = 'exists';
      }
    }

    console.log('博客数据库和集合设置完成');
    return { success: true, status: initStatus };
  } catch (error) {
    console.error('创建博客数据库时出错:', error);
    return { success: false, error: error.message };
  }
}

/**
 * 博客状态枚举
 * @enum {string}
 */
const BlogStatus = {
  DRAFT: 'draft',
  PUBLISHED: 'published',
  ARCHIVED: 'archived',
};

/**
 * @typedef {Object} Author
 * @property {string} author_id - 作者的唯一标识，指向 users 集合
 * @property {string} username - 作者的名字
 */

/**
 * @typedef {Object} BlogData
 * @property {string} title - 博客标题
 * @property {string} subtitle - 博客副标题
 * @property {string} content - 博客内容，支持 HTML 或 Markdown
 * @property {string} cover_image_url - 封面图片 URL
 * @property {Author} author - 作者信息
 * @property {BlogStatus} [status=BlogStatus.DRAFT] - 状态: 'draft', 'published', 'archived'
 * @property {string[]} [tags=[]] - 博客的标签，用于分类或筛选
 */

/**
 * 创建博客
 * @param {BlogData} blogData - 博客数据
 * @returns {Promise<{success: boolean, blogId?: string, error?: string}>} - 创建结果
 */
export async function createBlog(blogData) {
  try {
    const db = mongoClientManager.client.db('blog');
    const blogsCollection = db.collection('posts');

    // 插入博客文档
    const result = await blogsCollection.insertOne({
      title: blogData.title,
      subtitle: blogData.subtitle,
      content: blogData.content,
      cover_image_url: blogData.cover_image_url,
      author: {
        author_id: blogData.author.author_id,
        username: blogData.author.username,
      },
      status: blogData.status || 'draft', // 默认状态为 'draft'
      tags: blogData.tags || [],
      created_at: new Date(),
      updated_at: new Date(),
      comments: [],
    });

    console.log('博客创建成功，ID:', result.insertedId);
    return { success: true, blogId: result.insertedId };
  } catch (error) {
    console.error('创建博客时出错:', error);
    return { success: false, error: error.message };
  }
}
