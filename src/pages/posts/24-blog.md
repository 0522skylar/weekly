---
date: '2024-5-13'
pic: '../../images/1_zteMCsKOxBYGgkEdw_6jww.gif'
desc: 哈，不知不觉写周刊已经持续了小半年了，希望自己将来更忙的时候也能坚持这样习惯，像93和阮一峰一样
---
# 是什么让软件变得好？-第二十四期


![1_zteMCsKOxBYGgkEdw_6jww.gif](../../images/1_zteMCsKOxBYGgkEdw_6jww.gif)


哈，不知不觉写周刊已经持续了小半年了，希望自己将来更忙的时候也能坚持这样习惯，像93和阮一峰一样


## 技术分享
#### 数组随机排序算法

[https://bowencodes.com/post/random-sort](tab:https://bowencodes.com/post/random-sort)

如何将一个数组随机排序？
这个题目很有意思，我在直播的时候看的，大家讨论如何将一个数组进行随机排序。然后我想到的是sort+Math.random()

也就是下面这样
```javascript
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5)
}
```

后面博主是这样写的

```javascript
function shuffle(arr) {
  for (let i = arr.length; i>= 0; i--) {
    let curIndex = Math.floor(i * Math.ramdon())

    [arr[i], arr[curIndex]] = [arr[curIndex], arr[i]]

  }
  return arr
}
```

原来这就是Fisher–Yates算法，而这时目前时间、空间复杂度最低的方式，大开眼界。


#### 网易云音乐桌面端性能优化

[https://segmentfault.com/a/1190000044864056](tab:https://segmentfault.com/a/1190000044864056)

网易云音乐的桌面端升级导致了一系列的性能问题，看看大厂是如何解决这些性能问题的吧~



## 非技术分享

#### 公关负责人带来的公关问题

[https://www.youtube.com/watch?v=DZDha3sEuJY](tab:https://www.youtube.com/watch?v=DZDha3sEuJY)
[https://www.youtube.com/watch?v=QeqdVonCyz8](tab:https://www.youtube.com/watch?v=QeqdVonCyz8)

最近很火，连续霸占几天热搜，应该就是冷酷无情的女副总，来看看大家的分析。其实我觉得管理者如果不懂人性，那就是失败的管理，除非你管理机器。公关人为公司带来如此大的公关危机，这还真是第一次见到。



#### kill your darling

[https://cbh.bearblog.dev/kill-your-darlings/](tab:https://cbh.bearblog.dev/kill-your-darlings/)

杀死你的宝贝,不知道翻译是否正确?哈哈. 文章中,我很认可作者的观点, 项目中往往需要重构和改进, 这个时候如果你犹豫不决, 那就不要犹豫, 大胆改造, 这是维护项目最好的方式. 但是现在对项目进行改造, 往往改一个旧问题导致新问题的产生了, 那就是你的责任, 你不会得到表扬, 反而受到批评, 所以导致现在我们都畏手畏脚，但是因为困难所以就不进步吗？


#### 是什么让软件变得更好

[https://medium.com/@mbostock/what-makes-software-good-943557f8a488](tab:https://medium.com/@mbostock/what-makes-software-good-943557f8a488)


这篇文章的作者是D3.js的作者，他用维护D3.js具体的案例，说明了如何提高软件的可用性，避免方法的多重含义，避免过度复杂的解决方案，软件的设计应该独立且容易理解，软件不仅仅是快速正确地计算结果，还包括了易用性、一致性、自我解释能力和教育意义。


#### 初级开发人员对于成为高级开发人员所相信的谎言

[https://vadimkravcenko.com/shorts/falsehoods-junior-developers-believe-about-becoming-senior/](tab:https://vadimkravcenko.com/shorts/falsehoods-junior-developers-believe-about-becoming-senior/)

作者对作为初级开发人员的期望以及如何看待高级开发人员的想法，高级开发者并不是拥有所以答案，所以不要对高级开发有过多的期盼，要开始使用最新的技术，这是所有不想被淘汰开发都要注意的事项，不再有无聊的任务，越高级的职位，所承担的责任就越大，最后作者指出，要变得不可替代，资历并不等于工作保障。


