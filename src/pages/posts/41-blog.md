---
date: '2024-9-19'
pic: '../../images/Snipaste_2024-09-19_00-34-45.jpg'
desc: 西安之旅结束了，很赶的行程，但是第一次跨省旅游，还是很不错的，西安是一个历史文化丰富的城市，到处的建筑都保留了古代的风格。
---
# 西安之旅-第四十一期
![Snipaste_2024-09-19_00-34-45.jpg](../../images/Snipaste_2024-09-19_00-34-45.jpg)


西安之旅结束了，很赶的行程，但是第一次跨省旅游，还是很不错的，西安是一个历史文化丰富的城市，到处的建筑都保留了古代的风格。


## 技术类
### 垃圾收集与关闭

[https://jakearchibald.com/2024/garbage-collection-and-closures/](https://jakearchibald.com/2024/garbage-collection-and-closures/)



Jake、Surma、Jason正在对一个东西进行黑客攻击，发现函数中的垃圾回收并不完全按照我们的预期工作。即使函数执行完毕，某些情况下分配的大内存对象（如 `ArrayBuffer`）也不会被垃圾回收。作者建议将 `setTimeout` 的回调函数中的引用显式地移除，例如通过将全局函数设置为 `null` 或 `undefined`。即使是立即执行函数表达式（IIFE）也足以触发内存泄漏。通过实际代码示例和深入分析，揭示了 JavaScript 垃圾回收机制中一个可能被开发者忽视的问题。它提醒开发者在使用闭包和异步回调时要注意内存管理，以避免意外的内存泄漏。



### forwardRef-始乱终弃的API

[https://mp.weixin.qq.com/s/3Ija4vczpvQrEk0Hl7SQDg](https://mp.weixin.qq.com/s/3Ija4vczpvQrEk0Hl7SQDg)


文章介绍了为什么会出现forwardRef，类组件现在已经不多见了，函数组件明显更受欢迎，但是forwardRef在使用上带来的不便之处，更加甚于它的优点，所以才会被React官方团队在React19中移除。

### LeetCode

[https://github.com/LeetCode-OpenSource/hire](https://github.com/LeetCode-OpenSource/hire)

中国LeetCode的面试题，不忙的时候可以做做，练练手感，是逻辑偏多，原理偏少的题目。



## 非技术
### 谷歌前 CEO 放飞自我的这个演讲很值得一看

[https://mp.weixin.qq.com/s/jSOu93QvX2_Xx7Av4COoHw](https://mp.weixin.qq.com/s/jSOu93QvX2_Xx7Av4COoHw)





### 李沐讲座：大语言模型的实践经验和未来预测

[https://www.youtube.com/watch?v=ziHUcDh0DwM](https://www.youtube.com/watch?v=ziHUcDh0DwM)  
假如你对 AI 发展感兴趣 ，想了解大语言模型的实践经验和对于 AI 的未来预测，可以看看李沐在上海交大的讲座，讲得挺好的，相比国外的事情，这个视频会更有技术亲切感。



国内竟然是AI音乐做的最好 ，也讲了一下现在文本AI做的好的原因是，数据容易采集，网上就有很多数据可以让AI去学习，但是一连贯的事情，不同的事情，AI就反而比较难学会了，比如现在的视频，视频还没有出现一个比较好的模型，是因为视频有连贯性，而AI需要去理解并创造出连贯性比较困难。 


### 李沐工作五年反思

[https://zhuanlan.zhihu.com/p/374777591](https://zhuanlan.zhihu.com/p/374777591)

李沐老师这篇文章写得很好，属于他那个阶段的一个感想，同样非常适合现在的打工人一看，专注最有价值的事情。


