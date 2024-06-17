---
date: '2024-1-20'
pic: '../../images/65ab88b51bae6.jpg'
desc: 到惠州玩,围湖骑行十八公里,很过瘾,在广州没有找到这么适合骑行的路线,骑行感受风,感受自由,感受途中的风景.
---
# 红花湖骑行-第九期

![Snipaste_2024-01-20_16-45-13.jpg](../../images/65ab88b51bae6.jpg)

到惠州玩,围湖骑行十八公里,很过瘾,在广州没有找到这么适合骑行的路线,骑行感受风,感受自由,感受途中的风景.


## 技术类分享

#### JavaScript文件优化指南

英文版：
[https://www.sitepoint.com/optimizing-javascript-files/](tab:https://www.sitepoint.com/optimizing-javascript-files/)
中文版：
[https://mp.weixin.qq.com/s/baIcIbryO8BArwNJfmJC4A](tab:https://mp.weixin.qq.com/s/baIcIbryO8BArwNJfmJC4A)

其实项目工程要实现可维护性，除了开发者本身以外，设计本身很重要，开发过程中，总会遇到奇怪的问题，比如这个接口数据明明就过于冗余了，我只需要取其中的一些数据，但是后端通常不配合。假设我需要一个分页的接口，但是后端之前已经存在一个查全部数据的接口，这个时候，通常后端就会想让我们复用一下，如果接口数据本身比较小，那也就算了，请求一次，前端来做分页功能，但是当页数比较多的时候，比如有1000条，那客户端存这么多数据，长期得不到清除，那就占内存了。这样不合理的设计一多，那项目的性能，可维护性肯定就差了。

#### MySQL正式引入JavaScript支持

[https://mp.weixin.qq.com/s/5XGhgs5PI9RPwHD0RjbroA](tab:https://mp.weixin.qq.com/s/5XGhgs5PI9RPwHD0RjbroA)

开发者现在可以在 MySQL 数据库服务器中编写 JavaScript 存储程序（函数和过程）。这些存储程序将使用 GraalVM 运行时进行运行。

这意味着，JavaScript可以从写服务端，到操作数据库，而且目前MySQL的市场很大，国内大部分都是使用MySQL保存数据的。浅浅期待一下功能~


#### WebAssembly和JavaScript比较

[https://mp.weixin.qq.com/s/1VZxzb-SbnPyvruJUBzhQA](tab:https://mp.weixin.qq.com/s/1VZxzb-SbnPyvruJUBzhQA)

WebAssembly是一种新型的指令集，它能在浏览器中拥有执行C、C++、Rust语言的能力，这复杂和计算密集的页面来说，简直就是福音，这篇文章介绍了WASM和JavaScript的区别，以及将两者的性能进行对比，可以发现WASM在密集CPU计算中才表现良好，对于普通页面还是不需要使用这个能力的，所以WASM现在普及率不高。

#### 字节的TypeScript面试题

[https://mp.weixin.qq.com/s/2eiZjKg9R1F1TuosJGzHDQ](tab:https://mp.weixin.qq.com/s/2eiZjKg9R1F1TuosJGzHDQ)

原来高阶的Typescript这么困难,平常很少能看到这种复杂的结构.

## 非技术类分享

#### 以前靠信息差赚钱，现在靠什么？

[https://www.zhihu.com/question/268481226](tab:https://www.zhihu.com/question/268481226)

虽然我目前对赚钱没什么很大的欲望，但是比起刚出大学的我，还是欲望多了一些，通过每年的新年愿望就能看出来，想要的东西多了，对钱的掌控能力就需要越多，不知道这样的自己是不是一个俗人了。如何赚钱，身为女孩子的我，还是需要了解和学习的。不看不知道，一看还真是让我惊讶了，原来还可以用这样的方式赚钱，格局打开了。


#### cali的博客

[https://cali.so/](tab:https://cali.so/)

最近又发现一个写的比较好的博客，虽然内容还不多，但是读起来让人很舒服，希望作者大大经常更新呀。



#### 让用户养成使用习惯的产品逻辑

[https://www.zcool.com.cn/work/ZNjczMDA1NzY=.html](tab:https://www.zcool.com.cn/work/ZNjczMDA1NzY=.html)

站在产品的角度，考虑一个需求，是一件很重要的事情，因为产品都是不了解实现逻辑的，他们只关心效果能不能达到他们预期，但其实开发者如果能站在产品角度思考，如何将一款产品做的更好，我觉得，两者之间有能减少很多矛盾，我们希望产品能自己把控这个需求能不能做的同时，自己也考虑这样的需求，做出了能达到什么效果，能为用户带来什么，最好的产品肯定是除了能给用户带来方便的同时，也能给公司带来更多的利益，从而达到共赢的状态。

看完这篇文章，能够做出让用户养成习惯的产品，这款产品其实就是成功的，就是盈利的产品。


#### 有时候技术问题的最优解并不是技术考虑

[https://mp.weixin.qq.com/s/Xu-ERj-9z_zLgLqnadimyA](tab:https://mp.weixin.qq.com/s/Xu-ERj-9z_zLgLqnadimyA)

文章中看出了这个需求的本身不合理性，其实产品确实有时候会提出不合理的需求，这个需求到我们开发手中，就必须要做吗？不一定的，产品的思维是想要实现的效果，但是他们不会站在开发的角度思考，这个问题是否可维护，可迭代，可复用，这个时候开发应该有权力提出质疑和建议的。


#### 杰夫·贝佐斯（Jeff Bezos）的采访视频

[https://www.youtube.com/watch?v=DcWqzZ3I2cY](tab:https://www.youtube.com/watch?v=DcWqzZ3I2cY)

很少看采访的我，还是点开了这个视频，其中贝佐斯提到亚马逊开会不使用PPT，而只准备备忘录的时候，我们会发现其实要提效，有很多方法，只是人通常固守己见，不愿改变和创新。

#### kimi

[https://kimi.moonshot.cn/](tab:https://kimi.moonshot.cn/)

国内比较合适的chatGPT代替品，能够支持长文本，有联网功能，能够上传文件进行分析，做多支持50个文件，挺好用的。



