---
date: '2024-7-22'
pic: '../../images/Snipaste_2024-07-22_22-31-12.png'
desc: 这周补上上周欠下的任务量，去了广州最大的商场-正佳广场，第一次去真的迷路，去的时候是下午了，人山人海，我找卫生间都找了好一会，带上眼镜一边观察新事物，一边看地标，发现了一位宝藏的画家-----怂松鼠，他的画作好纯粹。
---
# 林中彩虹-第三十四期

![Snipaste_2024-07-22_22-31-12.png](../../images/Snipaste_2024-07-22_22-31-12.png)


这周补上上周欠下的任务量，去了广州最大的商场-正佳广场，第一次去真的迷路，去的时候是下午了，人山人海，我找卫生间都找了好一会，带上眼镜一边观察新事物，一边看地标，发现了一位宝藏的画家-----怂松鼠，他的画作好纯粹。

## 技术分享


### 一道关于try...cache...的面试题

[https://blog.stackademic.com/because-of-a-question-about-try-catch-i-failed-my-interview-2cea0225820c](https://blog.stackademic.com/because-of-a-question-about-try-catch-i-failed-my-interview-2cea0225820c)

try...cache只能捕获同步错误，promise使用可选链去捕获，async和await结合try...cache可以捕获错误，但是异步操作在try中，无法捕获，因为try是同步的。


### localhost与127.0.0.1有什么区别

[https://blog.stackademic.com/whats-the-difference-between-localhost-and-127-0-0-1-4102ba05d494](https://blog.stackademic.com/whats-the-difference-between-localhost-and-127-0-0-1-4102ba05d494)

localhost是一个本地的域名，127.0.0.1是一个IP地址，即当前机器的本地IP地址，只能在机器本身上使用。域名到IP地址这个过程需DNS域名解析，但是localhost到127.0.0.1不需要DNS解析，每台电脑都可以在没有DNS解析的情况下使用localhost和127.0.0.1，每台计算机上都有一个hosts文件，其中包含一些硬编码的DNS解析规则，包括将localhost解析为127.0.0.1的规则，这是一种约定。



### 什么是Webhooks
[https://javascript.plainenglish.io/what-are-webhooks-d02e88b77359](https://javascript.plainenglish.io/what-are-webhooks-d02e88b77359)

Webhook 是基于 HTTP 的回调函数，其中一个服务使用 API 立即通知另一个服务事件。这是简单的版本。从技术上讲，webhook 是“使用 HTTP 制作的用户定义的回调”。

我记得Sentry的事件通知就是Webhooks，原来在外部的CI服务器上触发CI（持续集管道）；将代码推送到分支时触发Jenkins部署也是Webhooks。

Webhooks的优点，实时数据传输，效率高，不需要轮询，减少服务器负载，用户体验上增强用户界面上的响应和动态。


### Node的替代方案

Node是什么？这样的问题让我想起了刚学C语音的时候，Lence问我的问题，C语音是什么？其实往往我们熟悉的，使用多的工具，反而记不住它们的定义，不知道我这是什么脑子。

回归正题，这是一道面试题，我回答的很不好，所以在这里总结一下。

Node是一个**开源、跨平台的 JavaScript 运行环境**，它允许开发者在服务器端运行 JavaScript 代码。Node.js 基于 Chrome V8 JavaScript 引擎构建。

替代方案：
1.[Deno](https://github.com/denoland/deno/) 是由 Node.js 的创始人 Ryan Dahl 开发的，读音（蒂诺），旨在解决 Node.js 中的一些设计缺陷和遗留问题。Deno 原生支持 TypeScript，具有严格的安全模型，并且使用 ES 模块系统。它还内置了许多开发者需要的功能，如测试、打包和格式化工具（阮一峰link：[https://www.ruanyifeng.com/blog/2020/01/deno-intro.html](https://www.ruanyifeng.com/blog/2020/01/deno-intro.html)）

2.[Bun.js](https://github.com/oven-sh/bun) 是一个全能的 JavaScript 和 TypeScript 应用程序工具包，旨在提供高速性能。它包含一个打包器、测试运行器和与 Node.js 兼容的包管理器。Bun 使用 Zig 编写，并在底层使用 JavaScriptCore 提供支持，从而显著减少启动时间和内存使用量。

目前就这两种方案比较成熟，GitHub上的stars数量较多，至于其他的Rust和Python是不同的语言了，不是运行环境。JavaScript就属于语言

Node和Electron的关系？
因为项目经验中有Electron，所以面试官还问了这个问题

Electron 是建立在 Node.js 之上的一个框架，它扩展了 Node.js 的能力，允许开发者使用 Web 技术栈来构建桌面应用程序。Electron 的存在使得 Web 开发者能够更容易地进入桌面应用开发领域。

JavaScript是什么？
JavaScript是一种高级、解释型编程语言

1. 解释型：JavaScript 代码通常在运行时由浏览器或 JavaScript 引擎解释执行，不需要编译。
2. 原型继承：JavaScript 使用基于原型的继承机制，对象可以直接从其他对象继承属性和方法。
3. 单线程事件驱动：JavaScript 通常在单个线程上运行，但通过事件循环和回调函数机制，可以处理异步操作和并发任务。
4. 跨平台：JavaScript 最初设计用于浏览器，但现在已经扩展到服务器端（如 Node.js）和各种设备上，包括移动设备、桌面应用和物联网设备。
5. Web 标准：JavaScript 是构建 Web 应用程序的标准语言之一，与 HTML 和 CSS 一起使用，用于增强网页的交互性和动态性。
6. ECMAScript 规范：JavaScript 遵循 ECMAScript 规范，这是一个由 ECMA International 维护的国际标准。ECMAScript 定义了 JavaScript 语言的语法、类型、语句、关键字、保留字、全局对象、全局函数和程序的运行时环境。
7. 丰富的 API：JavaScript 提供了丰富的内置对象和 API，支持操作文档对象模型（DOM）、控制浏览器的 BOM（浏览器对象模型），以及处理网络请求、数据存储等。


## 非技术分享

### 你应该获得博士学位吗？

[https://medium.com/@jpolak/should-you-get-a-phd-4806663cf380](https://medium.com/@jpolak/should-you-get-a-phd-4806663cf380)

确实越来越多人因为就业困难，而选择提升自己的学历，提升学历是给自己找的借口，无法面对自己是失业的状态，才是当代大学生目前最大的问题，很多大学生连尝试都没有，就选择了去考硕士，不知道考取硕士不但浪费自己的时间，而且以后还是要面对就业这样的问题。

### 我们是如何连接成穷人（或富人）？

[https://longafterthethrill.medium.com/how-were-wired-to-be-poor-or-rich-8a614fceb243](https://longafterthethrill.medium.com/how-were-wired-to-be-poor-or-rich-8a614fceb243)

穷人与富人的区别就是主动和被动收入，大多数人都是有主业，没有副业，如何获得被动收入，这就是区分穷人和富人最大的分界线，说实话家庭刚组成的时候，就是下层阶级，只有省钱让我们成为了中层阶级，但是省钱并不能让中层阶级变成上层阶级，货币是会随着时代动荡发生改变的，思考并实践如何获取被动收入，获取自由是大多数人一生的追求。


### 闪电是如何形成的
[https://www.youtube.com/watch?v=5tm2FRjcUGI](https://www.youtube.com/watch?v=5tm2FRjcUGI)

这周的天气，真是变化莫测，刚刚大太阳，然后远方飘来一朵云，接着就乌云密布，要下大雨的节奏，还能看到云下有闪电，我脑子突然有的想法，闪电如何形成的？乌云是带电的云朵？一起看看科学的解释吧~


### 博士致谢意想不到的诗境

[https://science.anu.edu.au/news-events/news/unexpected-poetry-phd-acknowledgements](https://science.anu.edu.au/news-events/news/unexpected-poetry-phd-acknowledgements)

作者说最期待写论文的致谢部分，为什么呢？论文的其余部分包含了仔细、合理的发现和数字，但在这一页上，作者兼科学家可以释放他们在其他地方无法表达的所有被压抑的情感。为什么论文上都要有致谢部分，因为人要学会感恩，你正在被这个世界温柔相待，所以你也要对帮助你的人，说句感谢。

虽然不是所有帮助都能让你心情愉悦，但是能让你心情不愉悦，教会你东西的人，往往在指出你的不足之处，这样你能意识到自己的问题，然后欣然的解决它，成为更好的自己。


#### 
