---
title: "eggjs 相关知识汇总"
date: "2023-05-24"
---

# Nodejs egg

1. 如何在 eggjs 中正确设置跨域

```tsx
// 在配置文件导出的 config 对象上添加key **cors  ,cors的值如下**

cors:{
    enable: true,
    package: 'egg-cors',

			//允许跨域的网址，*表示所有网址都可以跨域请求文件资源，也可以指定域名
      origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
}

//默认origin只支持一个域名或者*表示全部，如果想支持具体的多个指定域名可以如下设置：
    config.cors = {
        // origin: ['http://localhost'],
        origin:function(ctx) { //设置允许来自指定域名请求
            console.log(ctx);
            const whiteList = ['http://www.baidu.com','http://www.hqyj.com'];
            let url = ctx.request.header.origin;
            if(whiteList.includes(url)){
                return url;
            }
            return 'http://localhost' //默认允许本地请求可跨域
        },
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };

```

1. 如何在新项目中启动 eslint
   1. 官网会有一个命令
   2. npm init @eslint/config
2. 如何判断 eslint 是否生效
   1. 修改配置
3. vscode 中如何正确设置 eslint 为默认格式化工具

   ```tsx
   "editor.defaultFormatter": "dbaeumer.vscode-eslint",
     "editor.formatOnSave": true,
     "eslint.format.enable": true,
     "[typescript]": {
       "editor.defaultFormatter": "dbaeumer.vscode-eslint"
     },
     "[vue]": {
       "editor.defaultFormatter": "dbaeumer.vscode-eslint"
     }

   ```

   1. 创建 next 应用后 ，npm run dev 出现错误
      1. **SyntaxError: Unexpected token '??=' #120**(https://github.com/vercel/next-learn/issues/120)
      2. 翻译一下 就是需要更新本地的 node 版本
      3. 使用 nvm 来安装最新的 node 版本
      4. 在 windows 上安装 nvm 需要使用 nvm-windows 工具
