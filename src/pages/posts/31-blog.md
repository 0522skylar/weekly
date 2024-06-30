---
date: '2024-6-30'
pic: '../../images/Snipaste_2024-06-30_21-12-51.png'
desc: 这周生日，收到了来自爸妈的红包，很开心，大家都还记得我的生日，我还以为今年妈咪又要忘记了，但是妈咪还是记起来了就很开心，下面这幅画是我为自己准备的生日礼物，所谓生活需要有仪式感，所以我认真为自己准备了礼物。
---
# 生活中的仪式感-第三十一期


![Snipaste_2024-06-30_21-12-51.png](../../images/Snipaste_2024-06-30_21-12-51.png)


## 技术类分享

#### 静态根：具有编译时常量地址的对象

[https://v8.dev/blog/static-roots](https://v8.dev/blog/static-roots)

静态根是一种优化技术，它允许 V8 引擎在执行 JavaScript 代码时，减少对堆（heap）内存中对象的搜索次数。在 JavaScript 中，对象属性的访问通常需要通过原型链进行搜索，这可能会导致性能问题。通过使用静态根，V8 引擎可以预先确定某些属性的存储位置，从而加快属性访问速度。


#### JWT-JSON Web  Token

[https://www.sitepoint.com/using-json-web-tokens-node-js/](https://www.sitepoint.com/using-json-web-tokens-node-js/)

文章介绍了JWT是什么，如何在Node中使用，为什么要用JWT，适合于全栈学习。JWT已经非常流行了，至少目前这家公司的所有接口都是根据JWT来实现接口令牌的。


#### 使用 Next.js with Suspense 创建加载组件

[https://blog.logrocket.com/using-next-js-react-suspense-create-loading-component/](https://blog.logrocket.com/using-next-js-react-suspense-create-loading-component/)


#### 从头开始的promise

[https://www.joshwcomeau.com/javascript/promises/](https://www.joshwcomeau.com/javascript/promises/)

难的有文章把promise讲的很通透，原来response.json() 生成一个全新的 Promise，当响应以 JSON 形式完全可用时，该 Promise 就会实现。response.json()是异步的，Web 基础架构的核心部分是服务器能够流式传输响应，并批量发送响应。这通常用于媒体（例如 YouTube 上的视频），但也可以用于较大的 JSON 有效负载。当浏览器从服务器接收到第一个字节的数据时， fetch() 将解析 Promise。当浏览器收到最后一个字节的数据时， response.json() 将解析 Promise。

```javascript
fetch('/api/get-data')
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
    // { data: { ... } }
  });
```


#### 常见的React陷阱

[https://www.joshwcomeau.com/react/common-beginner-mistakes/#introduction](https://www.joshwcomeau.com/react/common-beginner-mistakes/#introduction)

提到了开发React时，会常遇到的一些陷阱，如果稍微不注意，就会导致页面出错哦，赶紧恶补一下吧，看看有哪些陷阱，你已经踩过了。


## 非技术类分享

#### 远程行动手册

[https://learn.gitlab.com/allremote/remote-playbook](https://learn.gitlab.com/allremote/remote-playbook)

gitlab团队提出的远程办公将在未来形成趋势，讲述了远程办公的优点，以及远程办公的缺点，如何处理倦怠，孤立和焦虑。


#### 做博客引擎十年，我学到了什么

[https://medium.com/@ideatocode/what-i-learned-as-an-artist-writing-my-own-blog-engine-for-10-years-straight-0cb8297e7712](https://medium.com/@ideatocode/what-i-learned-as-an-artist-writing-my-own-blog-engine-for-10-years-straight-0cb8297e7712)


十年坚持一件事情，这种精神多么难得可贵，可想而知，作者多么喜欢这件事情，才能一致做十年。刚进这个行业什么都不知道，对所有事物充满好奇，似乎就是大学时候的自己，



#### Obsiidian-黑曜石
[https://obsidian.md/](https://obsidian.md/)

简约的笔记风格，全英文，适合于喜欢nation的人。


#### 硬地骇客 - 两个月 $12000 ARR 实践之路

[https://book.hardhacker.com/](https://book.hardhacker.com/)

看一下大佬是如何宣传自己开发的产品的，如何开发出一款AI产品，了解步骤，掌握经验，如何获取流量和金钱。



#### 颜文字

[https://cn.getkaomoji.com/tags/%E6%89%8B/](https://cn.getkaomoji.com/tags/%E6%89%8B/)

感觉这种表情狠特别，比起一般的动图或者图片，这样的表情更适合文字，但是一般比较难打出来，所以找了一个网站，有各种各样可爱的表情٩(◕‿◕｡)۶、


### 作为软件工程师，你如何开展副业

[https://medium.com/@brianjenney/how-you-can-start-a-5-figure-side-business-as-software-engineer-15b5634f3821](https://medium.com/@brianjenney/how-you-can-start-a-5-figure-side-business-as-software-engineer-15b5634f3821)

我真的很喜欢这篇文章的态度，这是非常务实的，我也有过类似的心态，即“不要强迫它”。生活中没有什么是容易的，所以如果你要去做某事，你真的必须去做。如果你试图强迫某事，它很可能注定要失败。任何决定都要非常有意识地分配你的时间和注意力，这是你最宝贵的资源。





