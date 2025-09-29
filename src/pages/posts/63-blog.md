---
date: '2025-09-28'
pic: '../../images/Snipaste_2025-09-29_14-22-34.jpg'
desc: 这还是我第一次这么近距离接触到台风，可能是从小一直生活在内陆的原因，我对台风并没有很恐惧，而且我认为台风来的快，走的也快，但是深圳对台风的做法很多，比如说砍树，把路边的高树都砍了，然后就是停工，超市疯狂抢购，我还是第一次见到这么空的超市，大家的购物力度也太强了，就只是一两天而已。
---

# 台风-第六十三期

![../../images/Snipaste_2025-09-29_14-22-34.jpg](../../images/Snipaste_2025-09-29_14-22-34.jpg)

这还是我第一次这么近距离接触到台风，可能是从小一直生活在内陆的原因，我对台风并没有很恐惧，而且我认为台风来的快，走的也快，但是深圳对台风的做法很多，比如说砍树，把路边的高树都砍了，然后就是停工，超市疯狂抢购，我还是第一次见到这么空的超市，大家的购物力度也太强了，就只是一两天而已。

## 技术类分享

### 你可能不需要高端的CPU

[https://www.xda-developers.com/high-end-cpu-is-overkill-now/](https://www.xda-developers.com/high-end-cpu-is-overkill-now/)

现在大家买电脑或者笔记比，最重要的就是攀比CPU，总觉得CPU越多，性能就越好，但真的是这样吗？不一定的，每个人使用电脑的用途，决定了买什么样的电脑更合适，并不是价格越昂贵，就越适合你。

### 如何使用make编译C程序

[https://jvns.ca/blog/2025/06/10/how-to-compile-a-c-program/](https://jvns.ca/blog/2025/06/10/how-to-compile-a-c-program/)

虽然现在编译器很多，但是有时候你就是不想下载太多的软件，就想在电脑上快速运行C程序，这个时候，这篇文章就很实用。

### ESlint去除多余的真值判断

[https://eslint.org/blog/2024/10/code-review-nit-to-ecosystem-improvements/](https://eslint.org/blog/2024/10/code-review-nit-to-ecosystem-improvements/)

ESlint 有一条规则，如果某条判断语句始终是`true`或者`false`，那么就报错，因为这个判断是多余的。

现在，TypeScript 5.6 也引入了这个规则，默认报错。

### CSS三角函数

[https://css-tricks.com/the-most-hated-css-feature-cos-and-sin/](https://css-tricks.com/the-most-hated-css-feature-cos-and-sin/)

本文讲解使用 CSS 的三角函数，做出圆形布局。

### HTTP的option用法

[https://evertpot.com/discovering-features-with-http-options/](https://evertpot.com/discovering-features-with-http-options/)

HTTP 方法，除了常用的 GET 和 POST 等，还有一个不常用的 OPTIONS，本文介绍它的用法。这应该是面试的时候，面试官喜欢问的问题，看看你对http了解多少。

<font style="color:rgb(0, 0, 0);background-color:rgb(250, 250, 250);">你可能从 CORS 中知道这个 HTTP 方法，但它的通用目的是让客户端被动地发现“这里我能做什么？”</font>

<font style="color:rgb(0, 0, 0);background-color:rgb(250, 250, 250);">根据 </font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0.09);">Allow</font>`<font style="color:rgb(0, 0, 0);background-color:rgb(250, 250, 250);"> 标头，你可以快速判断某个端点支持哪些 HTTP 方法。许多 Web 框架会自动发出这个响应，并根据路由动态生成方法列表，所以很可能你无需额外操作就能获得这个响应。</font>

`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0.09);">Allow</font>`<font style="color:rgb(0, 0, 0);background-color:rgb(250, 250, 250);"> 标头的一个好处是，你还可以在非常基础的层面上传达访问控制信息。例如，如果用户对某个资源有写权限，你可以只包含 </font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0.09);">DELETE</font>`<font style="color:rgb(0, 0, 0);background-color:rgb(250, 250, 250);"> 和 </font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0.09);">PUT</font>`<font style="color:rgb(0, 0, 0);background-color:rgb(250, 250, 250);"> 。</font>

<font style="color:rgb(0, 0, 0);background-color:rgb(250, 250, 250);">响应中的 </font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0.09);">Accept</font>`<font style="color:rgb(0, 0, 0);background-color:rgb(250, 250, 250);"> 可以让你告诉客户端某个端点有哪些 MIME 类型可用。我喜欢在每一个 JSON API 端点添加 </font>`<font style="color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0.09);">text/html</font>`<font style="color:rgb(0, 0, 0);background-color:rgb(250, 250, 250);"> ，并确保 API URL 可以在浏览器中打开，并且开发人员之间可以轻松共享以方便调试。</font>

<font style="color:rgb(0, 0, 0);background-color:rgb(250, 250, 250);"></font>

## 非技术类分享

### <font style="color:rgba(0, 0, 0, 0.9);">真实、残酷的AI就业冲击——从一篇极其精彩的哈佛论文聊起</font>

[https://mp.weixin.qq.com/s/BQpUGTKldfoC1Hy9bWjNSA](https://mp.weixin.qq.com/s/BQpUGTKldfoC1Hy9bWjNSA)

<font style="color:rgba(0, 0, 0, 0.9);">论文给出的解释是，这背后是一个关于性价比的问题——</font>

<font style="color:rgba(0, 0, 0, 0.9);">对于公司来说，顶尖名校的毕业生（Tier 1），虽然成本最高，但他们解决复杂问题的能力也最强，AI很难替代，所以公司愿意继续花大价钱雇佣他们。</font>

<font style="color:rgba(0, 0, 0, 0.9);">最普通大学的毕业生（Tier 5），虽然能力上可能没那么突出，但他们的薪资要求也最低，人力成本优势明显。</font>

<font style="color:rgba(0, 0, 0, 0.9);">最尴尬的就是中间层（Tier 2和Tier 3），他们薪资要求不低，脱不下长衫，但从事的很多工作又恰好落在了AI能替代的区间，高不成、低不就，是最容易被优化掉的一群人。</font>

<font style="color:rgba(0, 0, 0, 0.9);"></font>

### 旧金山疯狂的AI广告

[https://www.sfgate.com/tech/article/bay-area-tech-scene-dorky-now-terrifying-21042943.php](https://www.sfgate.com/tech/article/bay-area-tech-scene-dorky-now-terrifying-21042943.php)

这么多广告，一方面因为确实有商机，但是更大的原因是 AI 公司钱太多，他们吸引到了源源不断的风险投资，还能去股市圈钱。资本急需看到效果。

于是，这些公司拼命做广告，曝光越多，市场占有率和公司估值也会随之提高，从而吸引更多的资本。

这就叫泡沫经济，只要没破，你就用力吹，能吹多大就多大，这样会有奖赏。

但是，作为一个普通人，每天被这些广告包围，狂轰滥炸，是不是有点太荒诞了。AI 作为一种新技术，目的是提高工作效率，解放人类，可现在变得像一种宗教，向你灌输，让你膜拜。人好像成了它的附庸，活在一个 AI 构建出来的世界里。

### 飞机运送风力发电机的飞叶

[https://spectrum.ieee.org/wind-turbine-blade-transport-plane](https://spectrum.ieee.org/wind-turbine-blade-transport-plane)

这个想法很好，现在风叶的运输，只能通过公路，那就意味着每座山的山顶都要有公路相通，如果飞机能够运输，那风叶就不需要这么费力就可以到达任意山上。而且风力发电站是新能源发电，符合可持续发展。
