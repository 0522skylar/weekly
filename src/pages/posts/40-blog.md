---
date: '2024-9-12'
pic: '../../images/Snipaste_2024-09-08_22-36-26.jpg'
desc: 我开始感受到深圳和广州人的不同之处了，确实可以发现深圳公园跑步中，大多数都是跟我一样的同龄人，很明显在这里上班的人更加自律和自控，而周末在广州的公园，很少看的同龄人在跑步运动的。
---
# live house-第三十八期
![Snipaste_2024-09-08_22-36-26.jpg](../../images/Snipaste_2024-09-08_22-36-26.jpg)






我开始感受到深圳和广州人的不同之处了，确实可以发现深圳公园跑步中，大多数都是跟我一样的同龄人，很明显在这里上班的人更加自律和自控，而周末在广州的公园，很少看的同龄人在跑步运动的。

## 技术类
### 为什么小写字母会节约空间


[https://endtimes.dev/why-lowercase-letters-save-data/](https://endtimes.dev/why-lowercase-letters-save-data/)



原来文本压缩算法就是霍夫曼编码，所以使用更少位数来表示更常用的字符，这样就会使整体的空间更小，比如一个长字符和一个短字符的区别。



### .git文件夹


[https://jvns.ca/blog/2024/01/26/inside-git/](https://jvns.ca/blog/2024/01/26/inside-git/)



.git文件夹里面包含好多子文件，其实每个子文件里就管理了我们如何存储代码，每次更改的记录都在里面，提交代码时会自动忽略这个文件夹，所以我们平时也不怎么关注这个文件夹。文章中介绍了.git文件中的各个子目录以及存放的内容。





### cursor使用指南
[https://jstoppa.com/posts/artificial-intelligence/fundamentals/code-smarter-not-harder-developing-with-cursor-and-claude-sonnet/post/](https://jstoppa.com/posts/artificial-intelligence/fundamentals/code-smarter-not-harder-developing-with-cursor-and-claude-sonnet/post/)



之前推荐过的cursor，功能都对比VS code，只是在VS code基础上新增了AI的能力，这篇文章介绍了详细如何使用cursor，感兴趣的可以看看。



### JavaScript的Set的并集、交集、差集语法
[https://www.sonarsource.com/blog/union-intersection-difference-javascript-sets/](https://www.sonarsource.com/blog/union-intersection-difference-javascript-sets/)



文章中介绍了一些Set的新方法`union`、`intersection`、`difference`、`symmetricDifference`、`isSubsetOf`、`isSupersetOf` 和 `isDisjointFrom`，目前在 Chrome 122+ 或 Safari 17+ 中尝试代码示例，该提案将进入流程的第 4 阶段，甚至可能在最终确定之前及时加入 ES2024 规范。

## 非技术类


### 云开发环境的好处
[https://codesandbox.io/blog/why-i-code-in-the-cloud](https://codesandbox.io/blog/why-i-code-in-the-cloud)



之前我一直不了解什么是云开发，看完这篇文章豁然开朗，确实本地开发容易遇到依赖问题，导致项目跑不起来，然后每个人的开发环境不一样，又出现种种情况，而且每次效果给到ui设计师看，都需要部署到测试环境才可以，这些速度问题，是现在本地开发不如云开发的原因。





### 错误的二叉搜索面试问题
[https://blog.jgc.org/2024/09/steve-ballmers-binary-search-interview.html](https://blog.jgc.org/2024/09/steve-ballmers-binary-search-interview.html)



在这个简短的视频中[，Steve Ballmer](https://en.wikipedia.org/wiki/Steve_Ballmer) 谈到了他将向 Microsoft 面试的候选人提出的一个难题。求解它基于[二叉搜索](https://en.wikipedia.org/wiki/Binary_search)和[预期值](https://en.wikipedia.org/wiki/Expected_value)。



> <font style="color:rgb(17, 17, 17);">我要跟你玩一个游戏。</font>
>
> <font style="color:rgb(17, 17, 17);">我在心里选择一个1到100之间的整数，你来猜这个数字。每次猜完，我会告诉你，答案比你猜的大还是小。如果猜错，你可以接着猜，直到猜中为止。</font>
>
> <font style="color:rgb(17, 17, 17);">如果你只用一次就猜中，我给你5美元，用两次猜中我给你4美元，三次3美元，四次2美元，五次1美元，六次0美元。</font>
>
> <font style="color:rgb(17, 17, 17);">你还是没猜中的话，就要倒贴钱了。七次猜中，你给我1美元，八次2美元，九次3美元。</font>
>
> <font style="color:rgb(17, 17, 17);">请问你应该玩这个游戏吗？</font>
>



评论中有人说，这个面试题需要先就定下正确答案，不然这个数字可以随着Steve Ballmer的想法进行变化，那么面试者永远处于弱势中。其实面试有时候真像博弈交流，比的是当时脑子是否有清晰逻辑思路。即使没有思路，如何在自己处于弱势时，处理好这种情况。











