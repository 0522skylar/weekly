---
date: '2023-12-24'
pic: '../../images/65b5edb9e3e43.jpg'
desc: 这是几个月前的照片了，跟几位同事一起去骑行的时候，拍下来的，傍晚河畔，宁静静谧。
---
# 珠江河畔（第六期）

![Snipaste_2023-12-24_13-54-52.jpg](../../images/65b5edb9e3e43.jpg)

这是几个月前的照片了，跟几位同事一起去骑行的时候，拍下来的，傍晚河畔，宁静静谧。

## 技术类

#### 音视频通信加餐 —— WebRTC一肝到底  

[https://mp.weixin.qq.com/s/yMFjpxMfK5xdLwZi_Elqpw](tab:https://mp.weixin.qq.com/s/yMFjpxMfK5xdLwZi_Elqpw)

看完这篇文章，我自己亲自动手用node构建socket服务端，来实现双向通讯，这就是打视频功能的基础了，还是很好玩的，打算写一篇技术文章出来。


#### 最完整的Web视频加密播放技术实现(含技术调研和Demo源码)  

[https://mp.weixin.qq.com/s/I1mcCYTou-qJRkw-Kdr3bg](tab:https://mp.weixin.qq.com/s/I1mcCYTou-qJRkw-Kdr3bg)

由于看了上篇文章，所以对视频流产生了兴趣，而且公司的业务也涉及到直播，所以看看其他大厂的实现方式也很不错，遇到不常见的功能时，需求都是需要进行技术调研的，如果文章的最后再说明各个方法的优缺点就更好啦。


#### 当前端遇见了强制横屏签字的需求...  

[https://mp.weixin.qq.com/s/DwU-JcmBEuQjxeUWNAgzYQ](tab:https://mp.weixin.qq.com/s/DwU-JcmBEuQjxeUWNAgzYQ)

签字，写字，最好底层的实现都是canvas，目前公司内部就有专门负责canvas的部门laya游戏端，课件区域的绘制和白板，就是他们负责，有时候大需求，就需要跟他们进行联调。

#### 继懒加载之后，浏览器又帮你把响应式给实现了  

[https://mp.weixin.qq.com/s/CL9Dzu-K41rIK5PtGfqorw](tab:https://mp.weixin.qq.com/s/CL9Dzu-K41rIK5PtGfqorw)

这篇文章说明了，图片标签会新增size=auto的属性，这个属性加上，在没有宽高属性和CSS样式的情况下，图片的尺寸将以300*150显示。
对于为什么选择 **300×150**，是因为这就是 **<video>** 和 **<canvas>** 标签所采取的方式；所有这些元素都会使用这种相对小一些但又不为零的默认尺寸，目的在于鼓励你优化你的布局。

这个属性解决的问题是：
响应式图像自然尺寸的设定可能会让人意想不到的复杂，但实际上：

- 有许多方式可以让已加载资源的自然尺寸影响其对应的 **<img>** 的布局尺寸。
- 每当 **<img>** 标签的布局尺寸发生变化，**sizes=auto** 的值就会进行更新，这可能会触发新的资源加载。
- 一旦加载新的资源，这个资源就会有新的自然尺寸，这可能会影响 **<img>** 的布局尺寸，导致 **sizes=auto** 的值更新，然后可能会触发又一次的资源加载；新加载的资源会有新的自然尺寸，这样以此类推...等等。


## 非技术类

#### proper-documentation

[https://vadimkravcenko.com/shorts/proper-documentation/](tab:https://vadimkravcenko.com/shorts/proper-documentation/)

适当的文档记录，比会议更加实用，文章中介绍了文档第一，开会第二，确实公司中的开会，有些时候就是无意义的，这种无意义且没有记录的会议，会导致占用会议上所有人的时间。
其次就是记录，我就很喜欢记录，记录生活，记录成长，不过我的记录不是发朋友圈，发微博，发推特，并不哗众取宠，也不会虚张声势，而是悄无声息，只要我自己知道就好。记录的目的是知道我自己的经历，能让以后的我回忆当初的自己是什么样的。

#### 大多数AI创业公司注定失败

[https://weightythoughts.com/p/most-ai-startups-are-doomed](tab:https://weightythoughts.com/p/most-ai-startups-are-doomed)

今年chatGPT大火，让很多人对人工智能更加积极，而且中国人普遍觉得人工智能发展很有前景，但是前阵子听的AIGC会议上，也有专家指出，其实只有中国境内的人觉得人工智能有很大前景，美国人大多数对AI持有消极态度。这是为什么呢？原因很简单，因为中国还没有产生一款能够跟chatGPT相比的大语言模型，而现在很多人出来创业搞人工智能，都是有点盲目跟风，而中国境内对AI的研究论文中，在国际上产生影响的很少，所以现在的环境下初创公司搞AI，都是不太理智的。


#### 27岁的前端，从二本run到澳洲🦘的故事分享  

[https://mp.weixin.qq.com/s/sRVrMcBB93oiuNAhXs775Q](tab:https://mp.weixin.qq.com/s/sRVrMcBB93oiuNAhXs775Q)

这位文章的作者很幸运，原来外国的氛围这么好，只有在国内才这么卷，不过出国除了运气以外，还不够，家庭工作稳定和睦也很重要，远在他乡，父母都难以见到。不过也让我知道了国外公司的管理制度，真的很友好，在国内要求凌晨发版，好像不能拒绝....


