# Google Meet-第二十六期

![Snipaste_2024-05-27_22-36-54.jpg](../public/images/Snipaste_2024-05-27_22-36-54.jpg)

由于最近一直下雨，所以没有怎么出去，所以也没有新的素材图片，分享一段话吧，万般桎梏尽去，属于神圣觉醒。很喜欢的动漫，最近更新了重要情节，很喜欢这更新的情节。


## 技术类分享

#### 低代码平台
[https://github.com/nocobase/nocobase](tab:https://github.com/nocobase/nocobase)

这个低代码平台，可以将页面、后端、数据库进行统一调度，但是现实就是目前的低代码平台都还不能完全不由技术人员来使用，不能实现真正的脱离技术，不懂技术的人就是还不会使用，甚至实现不了自己想要的效果，我觉得这是当下低代码平台的桎梏。


#### 前端监控
[https://github.com/M-cheng-web/web-tracing](tab:https://github.com/M-cheng-web/web-tracing)
这个监控除了普通的日志上报，还有录屏监控的功能，要知道录屏对于页面来说是一个消耗性能的操作，之前就看到哲玄大大分享的监控路线，由于第三方使用的信息比较隐私，所以不方便给监控端提供有效的信息，但是系统发现问题需要解决，只通过文字，很难描述清楚问题，而且复现比较麻烦，所以他们后面的监控有录屏的功能，但是录屏又导致页面性能收到影响，后面他们就使用了worker，单独开线程来处理复杂逻辑，不占用主进程。

#### how web works

[https://github.com/vasanthk/how-web-works](tab:https://github.com/vasanthk/how-web-works)


URL “http://facebook.com/”中的尾部斜杠很重要。在这种情况下，浏览器可以安全地添加斜杠。对于 http://example.com/folderOrFile 形式的 URL，浏览器无法自动添加斜杠，因为不清楚 folderOrFile 是文件夹还是文件。在这种情况下，浏览器将访问不带斜杠的 URL，服务器将以重定向进行响应，从而导致不必要的往返。

服务器可能会以 301 Moved Permanent 响应进行响应，以告诉浏览器转到“http://www.google.com/”而不是“http://google.com/”。服务器坚持重定向而不是立即响应用户想要查看的网页，这是有有趣原因的。其中一个原因与搜索引擎排名有关。看，如果同一个页面有两个 URL，比如 http://www.vasanth.com/ 和 http://vasanth.com/，搜索引擎可能会将它们视为两个不同的网站，每个网站的传入链接较少，因此排名较低。搜索引擎了解永久重定向（301），并将来自两个来源的传入链接合并为一个排名。此外，同一内容的多个 URL 对缓存不友好。当一段内容具有多个名称时，它可能会在缓存中多次出现。

一个带有一些文本和单个图像的纯 HTML 页面。浏览器需要做什么来处理这个简单的页面？

1. 转换：浏览器从磁盘或网络上读取 HTML 的原始字节，并根据文件的指定编码（例如 UTF-8）将它们转换为单个字符。
2. 标记化：浏览器将字符串转换为 W3C HTML5 标准指定的不同标记 - 例如“”、“”和“尖括号”中的其他字符串。每个令牌都有特殊的含义和一套规则。
3. 词法分析：发出的令牌被转换为定义其属性和规则的“对象”。
4. DOM 构造： 最后，由于 HTML 标记定义了不同标记之间的关系（某些标记包含在标记中），因此创建的对象链接在树数据结构中，该结构还捕获原始标记中定义的父子关系： HTML 对象是 body 对象的父级，body 是段落对象的父级， 等等。





## 非技术类分享

#### 连词构造句子的方法

[https://github.com/cuixueshe/earthworm](tab:https://github.com/cuixueshe/earthworm)

看到一个很有意思的学英语组成句子神器，这对于只知道记单词，不太懂语法的人来说真是太方便了。而且源码对于现在的我来说，也有阅读意义，客户端是用nuxt框架，api是用nest框架，node版本是20.


#### 软件工程师的心理健康

[https://vadimkravcenko.com/shorts/mental-health-in-software-engineering/](tab:https://vadimkravcenko.com/shorts/mental-health-in-software-engineering/)

心理健康原来才是被大家忽略的问题，身居高位，更容易忽略，但是心理健康和身体健康一样，都是非常重要的，不要让自己处于极度的不安之中，我们要学会放松自己内心。



#### 在 Google Meet 中引入自适应音频：使用多台笔记本电脑创建临时会议空间

[https://workspaceupdates.googleblog.com/2024/05/google-meet-adaptive-audio.html](tab:https://workspaceupdates.googleblog.com/2024/05/google-meet-adaptive-audio.html)


在这个混合工作时代，我们从客户那里听说，找到一个视频会议室来加入会议通常很困难。借助“自适应音频”，您和您的团队可以使用多台笔记本电脑近距离加入 Google Meet，而不会出现尴尬的回声和音频反馈。对于没有足够的视频会议室或没有专用会议室设备资源的组织来说，这是一个很大的好处。




