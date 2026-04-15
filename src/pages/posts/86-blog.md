---
date: '2026-04-15'
pic: '../../images/8cb32a1c71beb879b67a35241e6c0198_720.jpg'
desc: 周末去公园里，刚好发现了两个特别大的足球场，一个是中年人玩耍的，一个是高中生玩耍的，看着他们在足球场上肆意奔跑的样子，真的感觉青春真好，有无上活力。
---

# 足球比赛-第八十六期

![../../images/8cb32a1c71beb879b67a35241e6c0198_720.jpg](../../images/8cb32a1c71beb879b67a35241e6c0198_720.jpg)

周末去公园里，刚好发现了两个特别大的足球场，一个是中年人玩耍的，一个是高中生玩耍的，看着他们在足球场上肆意奔跑的样子，真的感觉青春真好，有无上活力。

## 技术类

### 未来如何招聘程序员

前些天，讨论区有一个[帖子](https://github.com/ruanyf/weekly/issues/9238)，提出一个问题。

如果未来的代码都是 AI 写的，那么我们[怎么招聘程序员](https://github.com/vorojar/ai-native-hiring-guide)呢？

程序员负责代码，但代码是 AI 写的，不是程序员写的，那么应该怎么面试他呢？

你仔细想想，这个问题比预想的难多了。

首先，考察他的代码能力不重要（代码不是他写的），更重要的是考察他会不会 AI。只要善于使用 AI，能够产出合格的代码，对公司来说就是合格的人选。

但是，什么样的面试问题，能够考察出一个人是否掌握 AI？下面是我想出的一些问题：

- 请将一个复杂的项目需求，转化成提示词，要求是清晰、逻辑性强、切中要害。
- 描述一个你认为需要使用 Skill 和 MCP 的场景，并阐述它们的工作原理和构建方法。
- 如何将一个大项目分解，设计出一个多 Agent 协同工作的机制。
- ......

这些问题能识别出 AI 编程高手吗？我完全没有把握。

其次，除了 AI，还要考察什么呢？ 这也很不好想。

我应该还会问一些架构问题，你可以不写代码，但要懂怎么组织代码，架构出一个系统。但我也不确定这是必需的，因为 AI 生成的大型系统迟早变成一个黑箱，可能对于架构知识的要求也不是很高。

另外，我还要看看他以前的项目，如果以前他用 AI 做过类似的东西，那么应该问题不大。但这也不可靠，且不说完全类似的项目非常少，就看 AI 进化速度这么快，两年前的经验早不适用了吧。

总之我发现，很难确定什么面试问题是一定有效的，能够可信地筛选出合格的应聘者。AI 颠覆了软件开发，也连带颠覆了程序员面试。大家有好的面试问题吗？

有一点是确定的，面试各种编程细节意义不大了，因为你不需要记住语法细节了，直接问大模型就行。

### 修复Javascript时间的旅程

[https://bloomberg.github.io/js-blog/post/temporal/](https://bloomberg.github.io/js-blog/post/temporal/)

Temporal 是 JS 历史上规模最大的 API 提案，历经 9 年、多家公司（Bloomberg、Microsoft、Google、Igalia）协作推进。文章发布时（2026 年 3 月）已接近 Stage 4  
标准化落地。  
对于日常开发者来说：以后无需再被迫引入 moment.js / date-fns / dayjs 来弥补 Date 的缺陷——原生就能优雅处理复杂时间逻辑。

日常开发中，就是使用大型的依赖工具来进行时间上的转换和显示，不过优化这一项有利于不在需要大量的构建内容在时间转换上，也是利大于弊的。

### 编译器的前端和后端

[https://medium.com/packt-hub/the-world-of-compiler-backends-9b27a3e37866](https://medium.com/packt-hub/the-world-of-compiler-backends-9b27a3e37866)

一篇科普文章，介绍编译器（比如 LLVM）的前端和后端的概念。 编译器通常分为前端（词法/语法/语义分析）、中间层（IR 优化）和后端。后端负责将中间表示（IR）翻译为目标机器的可执行代码，是编译器最贴近硬件的部分

### CSS的lh单位

[https://webkit.org/blog/16831/line-height-units/](https://webkit.org/blog/16831/line-height-units/)

CSS 有一个字体大小属性`lh`，表示行高。 lh 是个小而美的 CSS 新单位，让你的排版间距自动跟随字体行高变化，实现真正的垂直节奏一致性，无需手动计算。

## 非技术类

### AI改写脏话

[https://decrypt.co/360183/roblox-using-ai-rewrite-chat-swears-slurs-real-time](https://decrypt.co/360183/roblox-using-ai-rewrite-chat-swears-slurs-real-time)

游戏平台 Roblox [宣布](https://ir.roblox.com/news/news-details/2026/Roblox-Launches-Real-Time-Chat-Rephrasing-to-Maintain-Civility-and-Gameplay-Flow/default.aspx)，将用 AI 实时修改玩家的对话，让其变得更文明。

以前，如果玩家在游戏里面骂脏话，系统只会将其过滤，显示为 `####`，你还是知道他在骂人。

现在，AI 将重新修改整个句子，让表达变得更礼貌、更文明，你就察觉不到对方在骂人。

虽然这样未免有点虚假，但确实有必要。网络论坛也应该跟进，不要让人身攻击毁掉交流氛围。

这就很适用于现在的网络社会，毕竟现在很多人会因为网上的流言蜚语对自己产生怀疑，但是AI如果能识别出脏话进行转换，那社会网络沟通将会更加和谐。

### Mechanical Pencil

[https://mechanical-pencil.com/](https://mechanical-pencil.com/)

弹簧笔、打火机等生活小物品的机械装置动画。可以观察里面的构造结构，以及各个环节如何运作，小时候的自己也曾经这样好奇过。

### 信息过载时代，我的漏斗式阅读工作流

[https://shawnxie.top/blogs/tools/read-flow-2026.html](https://shawnxie.top/blogs/tools/read-flow-2026.html)

每天有太多东西值得看，作者介绍他的信息处理工作流，通过 AI 过滤出值得读的内容。这个方式似乎不错，让ai去找到最适合自己阅读的东西，然后自己再来阅读，过滤工作交给AI。
