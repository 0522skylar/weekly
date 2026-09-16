---
date: '2026-09-16'
pic: '../../images/511331dcd62d8ddde24c98e359d010d5_720.jpg'
desc: 聚餐的时候点到的很满意的饮料，富含丰富的膳食纤维，喝起来味道也很独特，入口沁香，包含着绿色植物的新鲜，不会很甜，应该没有放入果糖。
---

# 羽衣甘蓝汁-第一百一十一期

![../../images/511331dcd62d8ddde24c98e359d010d5_720.jpg](../../images/511331dcd62d8ddde24c98e359d010d5_720.jpg)

聚餐的时候点到的很满意的饮料，富含丰富的膳食纤维，喝起来味道也很独特，入口沁香，包含着绿色植物的新鲜，不会很甜，应该没有放入果糖。

## 技术类分享

### Coldcard硬件钱包如何被破解

[https://decrypt.co/374916/coldcard-bitcoin-exploit-explained-entropy-keys-bits](https://decrypt.co/374916/coldcard-bitcoin-exploit-explained-entropy-keys-bits)

加密货币的关键就是钱包，如果钱包的私钥被破解，就全完了。因此出现了不联网的硬件钱包，号称最安全。

上周，硬件钱包 Coldcard 被破解，有人根据钱包的公钥，算出了私钥，将里面的钱转走，损失超过1亿美元。本文告诉你这是怎么做到的。

### 2026年如何自己托管邮件服务器

[https://blog.haschek.at/2026/you-should-selfhost-your-mail.html](https://blog.haschek.at/2026/you-should-selfhost-your-mail.html)

一般来说，你不应该自己托管邮件服务器。但是万一你真的想托管，可以参考这篇文章里作者的做法。

### 浏览器主线程开销巨大-优

[https://kciter.so/posts/the-expensive-main-thread/en/](https://kciter.so/posts/the-expensive-main-thread/en/)

浏览器主线程是前端最昂贵的资源。大多数性能优化讨论集中在网络请求和打包体积上，但在高交互、实时数据流、动画密集的场景下，主线程阻塞才是真正的瓶颈 。

主线程干两件事：执行 JavaScript 和 绘制屏幕（rAF 回调 → 样式计算 → 布局 → 绘制）。60Hz 屏幕每帧预算约 16.6ms，扣除浏览器自身开销后实际可用约 10ms。两类工作排在同一个队列里，一个 JS 函数跑 200ms，这 200ms 内浏览器既不能重绘也不能响应点击。超过 50ms 的任务就算 long task。

1.精打细算地用主线程  
文章提出四个核心手法，前两个控制任务大小，后两个控制时机：  
Splitting（拆分）：把一个大任务切成小块，每块之间让出主线程。经典做法是 setTimeout(resolve, 0) 或 requestAnimationFrame 。按计数拆（每处理 20 条消息让一次）适合非动画场景；按时间拆（每帧只用 5ms）适合需要和动画共存的场景。文章用直播聊天室和 4000 粒子物理模拟做了演示。注意点：拆太细反而有 overhead； setTimeout 有最小延迟； scheduler.yield() 是新标准但兼容性还不够；React 的调度器用 MessageChannel 实现同样的目的。  
Batching（合并）：拆分解决"单个任务太长"，合并解决"任务太频繁"。scroll/resize/input 事件每秒可以触发几百次，每次都跑重处理就炸了。debounce（停下来才执行）和 throttle（固定间隔执行）是经典手段。对视觉更新，用 rAF 保证每帧最多画一次。React 的 Virtual DOM 本质上也是写操作的批处理。文章用 Markdown 编辑器（2000 行 CHANGELOG 实时预览）和 60 个 ticker 实时行情面板做了演示。  
Prioritizing（排优先级）：用自建队列 + MessageChannel 实现任务优先级。紧急任务插队到队首。文章举了照片附件预览的例子：后台按顺序生成缩略图，用户点击某张未生成的图时，该图的任务立刻提前。React 的 startTransition / useDeferredValue 内部就是这套机制加上饥饿保护。  
Deferring（延迟）：不需要现在做的工作就不做。代码分割（只加载当前页面需要的 JS）、 IntersectionObserver 实现虚拟列表（不在视口内的 feed 只保留占位高度、进入视口才渲染）、离屏动画停止运行。文章用 1500 条 feed 做了演示：切换到通知页再切回来，全量渲染模式会卡几百毫秒，而按需渲染瞬间恢复。CSS 的 content-visibility: auto 目标类似但 Safari 有 bug，目前 IntersectionObserver 更可靠。

2.搬到主线程之外  
Compositor 线程： transform 和 opacity 动画不触发布局重算，由合成器线程独立处理，主线程再忙也不影响。用 left / width 做动画则每帧都要跑布局，是主线程工作。对于"布局确实要变"的场景（比如列表删除后下方元素上移），用 FLIP 技术：只触发一次布局变更，然后用 transform 从旧位置过渡到新位置，动画部分全在合成器线程。Vue 的 TransitionGroup 和 Framer Motion 的 layout 动画底层都是 FLIP。文章还提醒了 layout thrashing 的问题：读写交替会强制同步布局，解法是把读操作集中、写操作集中。  
Web Worker：纯计算（解析大 JSON、图像处理、复杂算法）可以整个搬到 Worker 线程。Worker 没有 DOM 访问权限，通过 postMessage 通信，数据默认是序列化拷贝的。对大数据（如像素 buffer），用 Transferable Objects 零拷贝转移所有权。文章用 Seam Carving（接缝裁剪）算法做了演示：在主线程跑会冻结整个页面 1~2 秒，搬到 Worker 后可以实时看到图像逐步变窄，页面完全流畅。  
第三族：根本不做  
当入站速率超过最大吞吐量时（背压），再怎么优化也追不上。三种消除工作的方式：Drop（丢弃过时的数据，如实时日志）、Merge（只应用最新值，如排行榜）、Skip（相同输入不重复计算，即 memoization）。文章指出，debounce 本质是 skip，虚拟列表本质是 skip，"文章一半的内容其实都在讲消除工作"。

## 非技术类分享

### 你可以专注多久？

[https://moai.studio/blog/posts/they-stole-your-attention.html](https://moai.studio/blog/posts/they-stole-your-attention.html)

有一种说法，人的注意力是一种宝贵资源。

你只要拥有别人的注意力，就拥有了受众，拥有了流量，从而拥有了市场。

每个人的注意力（也就是时间）是有限的，属于不可再生资源，所有公司都在争夺。

另一方面，注意力跟你的生产力有关。当你保持专注的时候，就是你生产力最高的时候。保持专注越久，越容易做出成果。

那么，一个人有多少注意力呢？ 换句话说，你专注于一件事件，可以保持多久不分心？

美国加州大学尔湾分校做过[一项调查](https://moai.studio/blog/posts/they-stole-your-attention.html)，让人们长时间盯着电脑屏幕，记录他们每次切换屏幕的时间间隔。

这个调查持续做了20年，结果发现人们保持专注的时间越来越短

- 2004年：150秒
- 2012年：75秒
- 2016年：47秒
- 2025年：47秒

这个结果是可以想象的，争夺注意力的渠道正变得越来越多，短视频、游戏、体育比赛、演唱会......

你保持专注的时间必然越来越短。这意味着，你能够专心致志学习或工作越来越困难。

人的思维平均47秒就要断一次，这么短的时间能取得多少进展？

一旦断了，重新恢复就难了。这项调查还有一项数据，回到专注的状态，平均需要25分26秒。

这件事的启示就是，当你专心致志投入一件事的时候（英语叫做心流状态 flow），一定要珍惜，尽量不要分心，保持越久越好。毕竟你每次专注的时间平均只有47秒，而且一天中你能够进入专注状态、保持高效的次数，可能最多只有五六次。

### 深入剖析AI Token中继市场

[https://vectoral.com/blog/token-relay-market](https://vectoral.com/blog/token-relay-market)

国内现在有很多国外大模型的路由服务，它们的 API 价格比原始服务商还便宜。本文剖析这种服务的内幕。

### <font style="color:rgba(0, 0, 0, 0.9);">为什么坦克几乎不用 Windows？</font>

[https://mp.weixin.qq.com/s/Y9nx1HJL5KWXdOHc0ucyLA](https://mp.weixin.qq.com/s/Y9nx1HJL5KWXdOHc0ucyLA)

<font style="color:rgba(0, 0, 0, 0.9);">Windows 统治了桌面，不是因为它足够简单，而是因为它足够包容。而坦克不需要包容，它只需要确定。</font>

<font style="color:rgba(0, 0, 0, 0.9);"></font>

### 人工智能处理事件，工程师与系统失去联系

[https://www.sylvainkalache.com/blog/ai-handles-incidents-engineers-lose-touch-with-their-systems](https://www.sylvainkalache.com/blog/ai-handles-incidents-engineers-lose-touch-with-their-systems)

你必须调查到底出了什么问题，同时还要保持响应的条理性和组织性，还要与首席执行官和客户支持部门沟通。你将有机会练习在突发事件中至关重要的技能：理解不完整的信息、清晰地沟通、协调人员以及实际执行响应。这就像出现线上问题的时候，AI并不能很快掌握所以信息，而你对系统的了解程度，直接影响了这个事故的解决时间。
