---
date: '2026-09-07'
pic: '../../images/c094d534b4d14920bf94dc25dd4564a4_720.jpg'
desc: 难得周末天气好，去逛公园，看到一家三口手牵手走着，这就是所谓幸福吧，如果婚姻都是这样的现象，那现在这么多人就不会反感结婚了吧。
---

# 温馨的一家三口-第一百一十期

![../../images/c094d534b4d14920bf94dc25dd4564a4_720.jpg](../../images/c094d534b4d14920bf94dc25dd4564a4_720.jpg)

难得周末天气好，去逛公园，看到一家三口手牵手走着，这就是所谓幸福吧，如果婚姻都是这样的现象，那现在这么多人就不会反感结婚了吧。

## 技术类分享

### 通过优化DNS缓存，节省100TB的内存

[https://blog.cloudflare.com/dns-cache-memory-optimization-1111/](https://blog.cloudflare.com/dns-cache-memory-optimization-1111/)

在规模前面，每一个字节都是乘数。 2500 亿条目的场景下，单条省 1 字节 = 全集群省 250GB。这是经典的"乘法思维"：优化单位成本在大规模系统中会被放大到惊人的程度。

Rust 的类型系统既是优化工具也是陷阱。 Vec 的 capacity、enum 按最大变体对齐、struct 的 padding，这些在小规模下完全无感的语言特性，在 2500 亿量级变成了 TB 级的浪费。文章展示了 Rust 内存布局优化的完整工具箱： Box<[T]> 替代 Vec<T> 、bitflag 压缩 bool、 Option<Box<T>> 的 niche 优化、手动 box 大 enum 变体。

局部反直觉的 tradeoff 在全局是正确的。 box 大变体让 NAPTR 的存储反而变贵了，但 NAPTR 占比极低；wire format 存储让随机索引变成了顺序遍历，但每条记录数少到几乎无感。在优化中，按流量分布加权比"每种情况都最优"更重要。  
内存优化和性能优化不一定对立。 减少分配次数 → 减少 allocator 压力 → 更快；连续内存布局 → 更好的 cache locality → 更低延迟。这篇文章是"省内存的同时还变快了"的教科书案例。

### 页面滚动的动画效果

[https://scroll-driven-animations.style/](https://scroll-driven-animations.style/)

这个网站收集各种网页滚动的动画效果，使用 Web Animations API (WAAPI) 和 CSS Animations API 实现。

### 一个可步行的ASCII赛博朋克城市，在一个HTML中

[https://www.youtube.com/watch?v=3YtygAx_C6A](https://www.youtube.com/watch?v=3YtygAx_C6A)

效果还是很惊艳的，移动的时候，还能看到车的行驶，周围的物体会随着人的行走进行变化，跟视频一样。 一位开发者用单个HTML文件构建了一个可行走探索的ASCII风格赛博朋克城市。该项目在浏览器中运行，使用固定宽度字符绘制城市场景，包含交通、室内场景、高楼等细节。HN评论推荐在浏览器而非终端中做字符艺术，因为浏览器能精确控制字体、比例和渲染效果，还有用户分享了类似的ASCII/Unicode图形项目。

### 国家为什么需要开源项目？

[https://www.microsoft.com/en-us/corporate-responsibility/topics/open-weight/](https://www.microsoft.com/en-us/corporate-responsibility/topics/open-weight/)

上个月，大模型 Kimi K3 发布。大家可能不知道，它在美国引起的反响，比中国大。

它的性能略逊于美国的顶尖模型，但是它是开源的，任何人都可以自己架设。这对大公司非常有吸引力。

美国目前的经济增长，全靠巨额的 AI 投资，其他行业其实不怎么增长。一旦大量企业选择自己架设开源模型（几乎肯定如此），现有的巨额投资有收不回来的风险。

美国政府就坐不住了，[出来放话](https://xcancel.com/mkratsios47/status/2079933645888880708)，中国模型有"违规"行为，考虑要限制开源模型。

此言一出，就引起了恐慌，历史上还从来没有一个国家封锁开源项目。

两天以后，美国许多互联网公司联合起来，发表了[一封公开信](https://www.microsoft.com/en-us/corporate-responsibility/topics/open-weight/)，标题为《开放权重模型和美国 AI 领导力》。

公开信呼吁不要限制中国的开源模型，微软、英伟达、思科、Cloudflare 等行业著名公司都签字了。

我觉得，此信写得极好，推荐大家去读。

它的核心观点就是，开源项目对美国有利，应该允许它存在。关键句子如下。

:::info
评判我们人工智能领域的领导地位，并非取决于某一种前沿人工智能模型，而是取决于美国能否构建一个强大、开放的生态系统，并将其渗透到各个领域。

这对于在全国范围内创造创新和繁荣的机遇至关重要。这需要扩大人工智能的普及范围，鼓励竞争，构建强大的应用层，并赋予美国民众对其所依赖的技术更大的控制权。

开放权重模型----任何人都可以下载、检查、修改并在自己的基础设施上运行的人工智能模型----是这一基础的重要组成部分，因为它们使先进的人工智能更易于获取、更灵活、更广泛地应用。

:::

这段话的意思是，美国要保持领先，需要有一个开放的生态，而构建开放生态的最佳方法，就是鼓励开源。

归根结底，不是国家需要开源，而是国家需要创新和竞争，开源可以促使这些发生。如果限制开源模型，最终结果就是人工智能由少数几家大公司控制，大众无法参与，创新和竞争就无从谈起。人工智能太重要，不能听任这项技术落入少数人手中。

虽然这封信的目的是维护美国的国家利益，但是它讲的道理是普遍适用的。放在中国也是如此，这就是为什么我们国家应该大力推动开源项目。

中国最大的竞争优势是什么？就是14亿人口。我们要发挥人力资源的优势，让尽可能多的人参与到科教兴国，形成一个巨大的生态。开源软件是最好、最简单可行的发展途径之一。

说实话，如果美国政府真的封锁中国的开源模型，不一定是坏事。它不仅作茧自缚，而且还能推动中国的开源模型。

## 非技术类分享

### 良好的企业文化是提升生产力的最大秘诀，而非AI

[https://newsletter.eng-leadership.com/p/good-culture-is-the-biggest-productivity](https://newsletter.eng-leadership.com/p/good-culture-is-the-biggest-productivity)

文章由工程领导力专家 Gregor Ojstersek 撰写，核心观点是：AI 确实能提升生产力，但前提是团队必须先建立正确的工程文化。如果团队文化本身存在问题（如缺乏信任、沟通不畅、流程混乱），盲目引入 AI 工具反而会放大问题。真正的生产力提升来自于高效协作、心理安全感和持续改进的文化基础，AI 只是锦上添花。

### AI模型开始像小参数、强功能、惠价格上卷

[https://calv.info/small-models-have-arrived](https://calv.info/small-models-have-arrived)

作者使用gpt-5.6-luna，它的功能之强大、速度之快、智能程度之高， 着实令人惊叹 。我经常看到它每秒处理 100 次事务，并且能够轻松应对我的代码库、邮件和知识库。Luna 最大的优势在于成本 。我尝试运行了一些相当复杂的研究线程，但很难产生高额费用。即使搜索数千封电子邮件，API 费用也只有几十美分。

### 星云字体

[https://www.nebulasans.com/](https://www.nebulasans.com/)

Nebula Sans是视频流媒体平台Nebula推出的品牌字体，基于Adobe的Source Sans设计，定位为Whitney SSm的开源替代品。该字体采用人文主义无衬线风格，兼顾数字屏幕和印刷场景的可读性，以SIL Open Font License开源发布，任何人均可免费使用。

### 怎样画画

[https://www.howtodraw.ai/](https://www.howtodraw.ai/)

这个网站有各种小动物的分步绘图指导，适合小朋友使用。我看了一下，有些步骤还是不太对的，但是大差不差。

按最终稿来画就行。

### 学习下围棋

[https://online-go.com/learn-to-play-go](https://online-go.com/learn-to-play-go)

在线互动围棋教程，从零开始分课讲解。

### 世界上最不知名的最强程序员

[https://x.com/bigaiguy/status/2063903532575752211](https://x.com/bigaiguy/status/2063903532575752211)

一个法国程序员隐居在巴黎，过去30年，都在编写软件。整个互联网如今都依赖于他的作品，却很少人知道他的名字。

他编写的代码支撑着 YouTube、Netflix 和 TikTok 的视频业务，也支撑着 AWS、谷歌云和微软 Azure 等云服务的底层虚拟服务器。他还创造过圆周率位数的世界纪录。

他没有推特账号，也不做任何市场推广，只是默默地发布产品。

他的名字叫法布里斯·贝拉尔（Fabrice Bellard）。

程序员果然是一个低调的人群，从来不需要什么哗众取宠的噱头，只会默默为这个世界做贡献
