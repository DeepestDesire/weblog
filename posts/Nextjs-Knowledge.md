---
title: "Next 知识汇总"
date: "2023-05-24"
---

# Next 知识汇总

学习 Next 时，将重要的部分总结在下面的文档中，方便后面在使用相关技术后，能第一时间检索到。

代码运行环境 development production

1. 开发环境，运行在本地机器上
2. 生产环境， 代码运行在远程云服务器上

什么时候代码运行 build time , runtime

渲染 client server

development environment 关注要解决的问题

- ESLint： 关注代码风格，静态逻辑检查，基础代码 bug 检查
- Typescript ：关注编写高质量代码
- Fast Refresh： without losing component state

热更新，编译速度，调试

production environment 需要关注的问题

compiled , bundled, minified, code splited ,

Minifying

Code Splitting

babel code translate

### 1. File System Routing

下面是 next 的 Routing System 介绍

[Building Your Application: Routing](https://nextjs.org/docs/pages/building-your-application/routing)

1.  Next 优化性能做了哪些事
    - in production mode prefetch all the link source
    - code splitting automatically
    - client side navigation
      1. Link 标签
2.  You can learn more about the `Link` component [in the API reference for `next/link`](https://nextjs.org/docs/api-reference/next/link) and routing in general [in the routing documentation](https://nextjs.org/docs/routing/introduction).

### 2. Static File Serving

[Optimizing: Static Assets](https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets)

### 3. \***\*Image Optimization\*\***

[Optimizing: Images](https://nextjs.org/docs/pages/building-your-application/optimizing/images)

### 4. Data Fetching

### 5. Static Generation
