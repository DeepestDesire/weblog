---
title: 'Pixel Streaming 学习实践文档'
date: '2023-08-21'
---

Author: George

Score: ⭐️⭐️⭐️⭐️

Completed: April 21, 2023

Status: In progress

Type: 功能教程 1

This Plugin runs inside the Unreal Engine. It encodes the final results of every rendered frame using video compression, packs those video frames along with the game audio into a media stream, and sends that stream to one or more connected browsers over direct peer-to-peer connections.

这个插件在 UE 客户端内部运行，它使用视频压缩技术将每个渲染帧的最终成果进行编码，将这些视频帧和音频一起打包成媒体流，并且会通过一对一连接的形式，发送视频流到 1 个或者多个建立连接后的浏览器

Pixel Steaming Plugin 压缩视频内容

Signalling And Web Server 信号和网络服务器

一、像素推流的优点

- 相比较其他方式，像素推流让手机和浏览器能展示出高质量的画面。
- 用户可以不用去下载客户端，不需要安装任何软件。
- 跨平台 不需要分发不同平台的包
- Pixel Stream Plugin 包含最小颗粒度的组件，可以让我们在本地部署推流系统
- Pixel Stream Plugin 使用 WebRTC 来最大程度减少用户与 UE 应用之间的延迟 （latency）

二、Unreal Engine 的视频流推送的软件架构

![Untitled](/Untitled.png)

三、连接过程

- 当你设置完成 Pixel Streaming Plugin 后， Pixel Streaming Plugin 会在 UE 程序内运行，并且首先跟 Singalling Server 建立连接
- 用户通过访问访问 Web 服务，获取一个 HTML 页面，包含用户控制逻辑和 play widget 。，页面会运行连接 SgnallingServer
- 当用户开启流服务，Signal Server 会建立用户浏览器和 UE 程序之间的直接连接
- 当用户浏览器和 UE 程序之间的直接连接建立完成功后，Pixel Streaming Plugin 将会直接同送流数据到用户浏览器，用户浏览器的控制也只直接反馈到 Pixel Streaming Plugin。
- 在浏览器与 UE 程序建立连接之后，Signal Server 会继续保持它与 Pixel Streaming Plugin 和用户浏览器之间的连接。

二、像素推流的核心步骤

- 启用插件
  - **Menu Bar** ⇒ \*\*\*\*Edit ⇒ Plugin-Graphics ⇒ Pixel Streaming
  - 重新启动
- Editor Perferences 添加运行参数 编辑器中调试
  - 首先需要 **Menu Bar** ⇒ **Editor Perferences** ⇒ **Play in Standalone** ⇒ \***\* **Additional Launch Paramaters\*\*
    ```jsx
    -AudioMixer -PixelStreamingIP=localhost -PixelStreamingPort=8888
    ```
  - 我们需要让 Editor 运行在 Standalone 状态下
- 在 Editor 模式下如何进行调试
  - **Main Toolbar** ⇒ **Play Mode** 最右侧 ⇒ \***\* **Standalone Game\*\*

三、启动 WebRTC 等相关服务，连接 Webbrowser 和 UE 的 Pixel Streaming Plugin

- 从 Github 上下载 项目
  - https://github.com/EpicGames/PixelStreamingInfrastructuret
- 通过命令启动 **_Signalling and Web Server_** 服务
  - 服务依赖 node 运行环境 , 运行命令会自动下载 X

1. 包含 (**_Signalling and Web Server_**) 信号服务系统
2. An SFU (Selective Forwarding Unit) 信号转发单元
3. A matchmaker, found in `[Matchmaker/](https://github.com/EpicGames/PixelStreamingInfrastructure/blob/master/Matchmaker)`
4. Several frontend projects for the WebRTC player and input, found in `[Frontend/](https://github.com/EpicGames/PixelStreamingInfrastructure/blob/master/Frontend)`:

5. 启用插件
   - Graphics ⇒ Pixel Streaming
6. Editor Perferences 添加运行参数 编辑器中调试
   - 首先需要 Editor Perferences - Additional Launch Paramaters
     ```jsx
     -AudioMixer -PixelStreamingIP=localhost -PixelStreamingPort=8888
     ```
   - 我们需要让 Editor 运行在 Standalone 状态下
   - 点击运行
7. 下载 Signalling And Web Server 仓库的代码 https://github.com/EpicGames/PixelStreamingInfrastructure
8. 运行 Setup.bat 命令
9. 运行 Run_Local.bat 命令

启动单独的 WebServer，视频流，交互信息传递主要通过 WebRTC 协议

C:\Program Files\Epic Games\UE_5.2\Engine\Plugins\Media\PixelStreaming\Resources\WebServers

1. 前端有两个库
