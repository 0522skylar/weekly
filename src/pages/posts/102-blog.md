---
date: '2026-07-20'
pic: '../../images/e7d20bd7fc0a16daa5ba7510fdac03b9_720.jpg'
desc: 国家博物馆门票免费，人超多，不过就刚开始一直堵在门口了，越往后走，人就少些，但是人还是很多，感觉一堆人要排队看镇馆之宝-九龙九凤冠。
---

# 国家博物馆-第一百零二期

![../../images/e7d20bd7fc0a16daa5ba7510fdac03b9_720.jpg](../../images/e7d20bd7fc0a16daa5ba7510fdac03b9_720.jpg)

国家博物馆门票免费，人超多，不过就刚开始一直堵在门口了，越往后走，人就少些，但是人还是很多，感觉一堆人要排队看镇馆之宝-九龙九凤冠。

## 技术类分享

### 我喜欢的一道面试题：找出中位数

[https://krisshamloo.com/blog/007](https://krisshamloo.com/blog/007)

作者当面试官时，喜欢让面试者现场编程，找出列表的中位数。

本文解释，为什么他认为这道题很合适面试，理由很充分。

### 设计优秀的API👍

[https://www.seangoedecke.com/good-api-design/](https://www.seangoedecke.com/good-api-design/)

好 API = 无聊到熟悉 + 绝不破坏用户 + API Key 低门槛 + 幂等安全重试 + 限流防滥用 + 游标分页 + 昂贵字段按需加载。产品本身比 API 设计更重要，但糟糕的产品架构会让 API 不可能优雅。

幂等性就是：同一个操作，不管你执行一次还是重复执行很多次，最终结果都一样。  
举个生活中的例子：电梯里按"3楼"按钮，按一次去3楼，按十次还是去3楼，不会去到30楼。这就是幂等的。  
在 API 场景下最典型的问题是：你发起一笔付款请求，网络超时了，你不知道服务器到底收没收到。如果直接重试，没有幂等保护的话，可能会扣两次钱。有了幂等性，服务器能识别"这是同一笔请求的重试"，只会执行一次，多余的重试直接返回之前的结果。  
实现方式通常是客户端在请求里带一个唯一 ID（幂等键），服务器记住这个 ID 对应的结果，再次收到相同 ID 时直接返回缓存结果，不再重复执行。

### 伊利亚的30篇必备机器学习论文，以初学者友好的方式呈现

[https://30papers.com/](https://30papers.com/)

该网站整理了据传 Ilya Sutskever 推荐给 John Carmack 的30篇机器学习经典论文阅读清单（目前收录27篇），以初学者友好的方式呈现。涵盖从 CS231n 卷积网络课程笔记、RNN 的惊人效果、LSTM 网络解析，到 AlexNet、ResNet 等里程碑论文，系统覆盖了深度学习从基础到前沿的核心知识体系。 这篇文章两天连续上hacker news榜位，我还以为是内容值得大家讨论两天，结果看了一下评论，大家讨论的是这个网站的排版以及视觉效果，哈哈哈哈。

### AsciiDoc语法介绍

[https://www.git-tower.com/blog/asciidoc-quick-guide/](https://www.git-tower.com/blog/asciidoc-quick-guide/)

AsciiDoc 类似于 Markdown 语法，但是功能更强，适合用来撰写多篇文档组成的书籍。本文是对它的语法的简单介绍。

### 平滑（ease）函数的写法

[https://www.davepagurek.com/blog/easing-functions/](https://www.davepagurek.com/blog/easing-functions/)

动画代码有一个平滑函数，用来模拟运动的加速/减速，本文介绍这个函数的实现。

## 非技术类分享

### AI之间的投资

[https://www.bilibili.com/video/BV1V4Te6MEAu?spm_id_from=333.788.videopod.sections&vd_source=c911472d8a2e121a97f38e0efe3f375e](https://www.bilibili.com/video/BV1V4Te6MEAu?spm_id_from=333.788.videopod.sections&vd_source=c911472d8a2e121a97f38e0efe3f375e)

小林说最近的更新视频中，讲解了AI之间的投资，还真是鹬蚌相争的画面，不过这种一荣俱荣，一损俱损的画面，还真是难得一见。

### Vint Cerf, "father of the Internet", is retiring

[https://techcrunch.com/2026/06/30/the-father-of-the-internet-is-finally-retiring/](https://techcrunch.com/2026/06/30/the-father-of-the-internet-is-finally-retiring/)

被誉为"互联网之父"的Vinton Cerf宣布将从Google首席互联网布道师一职退休。Cerf是TCP/IP协议的共同创建者之一，该协议构成了现代互联网的底层基础架构。他在Google任职超过20年，致力于推动互联网标准化和发展。Cerf还积极参与延迟容忍网络等前沿研究，为太空数据通信等领域做出贡献。他的退休标志着互联网先驱时代的一个里程碑。

### 人工智能2040的五种计划

[https://ai-2040.com/](https://ai-2040.com/)

AI 安全社区迄今最具体、最诚实的政策建议之一。它的价值在于：(1) 不回避"谁来控制"这个权力问题；(2) 愿意把自己的方案放在场景框架下接受推敲；(3) 同时给出了"理想方案"和"退而求其次的增量方案"。主要的可争议点在于：美中协议的政治可行性、透明度要求是否会被国家安全理由否决、以及 2030 年"本应实现自动化 AI 研发"这个时间判断是否过于激进。
