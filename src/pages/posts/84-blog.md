---
date: '2026-04-03'
pic: '../../images/6c7f81f22d4c1abdd3d16d459e4c4ad2_720.jpg'
desc: 第一次这么近距离的看无人机表演，虽然现在表演很常见了，但是我每次都没去，因为人实在太多了，人山人海，我不喜欢，所以一直没去亲眼感受，这次观感比较好，因为跑不完，看到的表演，人很少，而且我一直以为这些无人机就是摆放成一面二维平面而已，后面亲眼看到无人机在移动了。
---

# 无人机表演-第八十四期

![../../images/6c7f81f22d4c1abdd3d16d459e4c4ad2_720.jpg](../../images/6c7f81f22d4c1abdd3d16d459e4c4ad2_720.jpg)

第一次这么近距离的看无人机表演，虽然现在表演很常见了，但是我每次都没去，因为人实在太多了，人山人海，我不喜欢，所以一直没去亲眼感受，这次观感比较好，因为跑不完，看到的表演，人很少，而且我一直以为这些无人机就是摆放成一面二维平面而已，后面亲眼看到无人机在移动了。

这周前端领域出现了2件大事，axios这个工具包作者的账号被人侵入了，然后用他的账号发布了最新一版的axios，导致最新下载的npm包，出现了病毒，导致网站乱码。

第二件就是Claude的源码泄露问题，因为一个低级事故，被人放在了GitHub上面，免费开源了。作为AI界代码领域的顶级公司，特别是Claude还是收费的，这对公司来说应该影响很大，接下来应该各大AI大模型都可以学习这个源码了。

## 技术类分享

### TypeScript的Brand类型

[https://egghead.io/using-branded-types-in-typescript](https://egghead.io/using-branded-types-in-typescript)

[https://www.learningtypescript.com/articles/branded-types](https://www.learningtypescript.com/articles/branded-types)

TypeScript 的类型系统是结构化类型（Structural Typing）——只要两个类型的结构相同，就可以互相替换。这在某些场景下会导致 Bug

把运行时 Bug 变成编译时错误：在代码跑起来之前就发现错误传参  
零运行时开销： \_\_brand 字段只存在于类型层面，编译后消失  
强制显式转换：必须通过专门的"构造函数"或 as 来创建 Branded 值，等于强制做了一次校验边界

### 如何在开发者工具定位Javascript对象

[https://heikkila.dev/blog/find-where-a-specific-object-was-allocated-in-javascript/](https://heikkila.dev/blog/find-where-a-specific-object-was-allocated-in-javascript/)

用一个可过滤的唯一标识符"标记"你感兴趣的对象，绕开 DevTools 过滤能力不足的问题。手动制造一个"锚点"，让内存分析器能精准定位。  
非常适合调试那些"栈信息已经丢失"或"对象来源不明"的复杂场景。

### 如何使用Unix信号来传递消息

[https://leandronsp.com/articles/you-dont-need-kafka-building-a-message-queue-with-only-two-unix-signals](https://leandronsp.com/articles/you-dont-need-kafka-building-a-message-queue-with-only-two-unix-signals)

Unix 系统（包括 Linux 和 macOS）有信号机制，用来触发进程的某种行为。信号只是一个数字，本身不能发送文本消息。

字符在内存里是字节，字节是 8 个比特（0 或 1）。  
SIGUSR1 = 比特 0  
SIGUSR2 = 比特 1  
发送字母 h （ASCII 104，二进制 01101000 ），就发 8 个信号：

SIGUSR1 SIGUSR1 SIGUSR1 SIGUSR2 SIGUSR1 SIGUSR2 SIGUSR2 SIGUSR1  
( 0 )( 0 )( 0 )( 1 )( 0 )( 1 )( 1 )( 0 )

接收方累积 8 个比特，用位移运算还原成字节，再用 ASCII 转回字符。

用 NULL 字节（8 个 SIGUSR1）作为消息终止符。

最终构建了一个完整的 Broker 架构

Producer：将字符串编码成信号流，发给 Broker  
Broker：接收信号、解码消息、入队，再轮询分发给各 Consumer  
Consumer：注册自身 PID，接收信号、解码打印  
整个系统用文件（ broker.pid 、 consumers.txt ）做服务发现，无需任何网络或消息中间件

作者明确说了： 这不是用来生产的，而是用来理解底层的。  
真正的收获是：  
深刻理解比特操作（位移、掩码）  
理解 IPC 的底层机制  
理解消息 broker 的基本组成（Producer / Broker / Consumer 三角）  
能把"完全没用的东西"做到极致，才是真正的 hacker 精神。

## 非技术类分享

### 你的工作不是消失了，而是在缩水

[https://newsletter.jantegze.com/p/your-job-isnt-disappearing-its-shrinking](https://newsletter.jantegze.com/p/your-job-isnt-disappearing-its-shrinking)

AI 的普及正在揭露一个行业秘密：很多"高级"知识工作者其实只是执行得很好，并不是真正会战略思考。过去这个区别被掩盖了，因为执行本身就很值钱。现在执行被外包给了 AI，真正的战略判断力才现出原形。

别想着守住老角色，要去发现一个约束消失之后什么变得可能，然后在那里建立你的价值。这个"识别新可能"的元能力，才是接下来几年真正的竞争力。

### 努力变得不可见

[https://newsletter.jantegze.com/p/youre-not-getting-worse-everyone-else-got-ai](https://newsletter.jantegze.com/p/youre-not-getting-worse-everyone-else-got-ai)

停止和机器竞争执行速度，把精力放在定义问题、做判断、建信任这些 AI 仍然做不好的事上。

### 特斯拉公司将停产 Model S 和 Model X 两种车型

[https://www.cnbc.com/2026/01/28/tesla-ending-model-s-x-production.html](https://www.cnbc.com/2026/01/28/tesla-ending-model-s-x-production.html)

这意味着，特斯拉改变了定位，它将是一家交通运输公司，而不是汽车制造商了。剩下的两种车款，未来也有可能放弃，也许只生产不需要司机的自动驾驶车辆。

马斯克是不是害怕中国车企？我说说我的看法。

首先，我不知道，他把生产线转为制造机器人，是不是正确的决定；我也不知道，他还想不想造车。我只知道，那些批评他的人，完全不了解马斯克。

千万不要用普通人的心态，去揣度马斯克，他不是一个常规的人。

如果看过他的传记，就会知道，他迄今所有的创业项目，都不是常规项目。从最早的 Paypal，到后来的电动汽车、太阳能发电、可回收火箭、星链、脑机通信等等，都有一个共同点，那就是他做的时候，那些项目都没有成功先例，因此也不存在竞争对手。

马斯克一生中只喜欢做那些"从0到1"、最前沿的、从没人成功过的事情。 做跟别人一样的产品，争夺市场份额，完全不是他的风格。

电动汽车已经是一种成熟商品了，主要技术问题都解决了，完全没有进入门槛，大家开始比拼成本了。你觉得，马斯克还会有兴趣吗？

我告诉你吧，对于击败中国车企，成为世界最大、最先进的电动车厂商，人家根本没有这个兴趣。他也压根不需要赚更多的钱了，已经是世界首富了。

反倒是，做出无所不能的机器人，组建自动驾驶车队，或者从事其他更酷的、无人见过的业务，更符合马斯克的风格。

我认为，这值得学习。中国企业不仅要追求做大做强，也可以追求做一些前无古人的事情，不仅要做 number one，还要做 only one。

马克斯还是很勇敢，做决策和目标一点都不担心后果，一往无前，佩服他这种心态和手段
