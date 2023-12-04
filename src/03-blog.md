# 圣心教堂（第三期）

03 Dec, 2023

![Snipaste_2023-12-03_21-44-52.jpg](https://i.ibb.co/KrjCttG/Snipaste-2023-12-03-21-44-52.jpg)

周末陪姐姐一起去看了广州的圣心大教堂，里面正在祷告，游客不能进入，这还是我第一次看到现实中的教堂。

## 技术类分享

#### 字节面试：如何实现准时的setTimeout  
[https://mp.weixin.qq.com/s/T86ymimCuJ5BhOD8Yioe6w](tab:https://mp.weixin.qq.com/s/T86ymimCuJ5BhOD8Yioe6w)

这篇文章介绍了，直接调用window.setTimeout函数的缺陷，并提出了三种改进措施，期中setTimout系统时间补偿是最推荐的，值得一看。
源码如下：

```javascript
function timer() { 
   var speed = 500, 
   counter = 1,  
   start = new Date().getTime(); 
    
   function instance() 
   { 
    var real = (counter * speed), 
    ideal = (new Date().getTime() - start); 
     
    counter++; 
 
    var diff = (ideal - real); 
    form.diff.value = diff; 
 
    window.setTimeout(function() { instance(); }, (speed - diff)); // 通过系统时间进行修复 
 
   }; 
    
   window.setTimeout(function() { instance(); }, speed); 
} 
```


#### 详解 Module Federation 的实现原理  
[https://mp.weixin.qq.com/s/7Vy2JIwqbS94w_Pp4E8hqw](tab:https://mp.weixin.qq.com/s/7Vy2JIwqbS94w_Pp4E8hqw)
这篇文章介绍了跟微前端一样，实现应用之间的依赖共享的方法MF，感兴趣可以了解一下~


 面试官：跨页面通信的方式有哪些？  
[https://mp.weixin.qq.com/s/2jFFn3aGXoynzzfsheh7qQ](tab:https://mp.weixin.qq.com/s/2jFFn3aGXoynzzfsheh7qQ)
这是实现量子纠纷的各种方法，跨页面通信，这应该是一个面试好题。


#### git 面试字节时，老师问：合并分支中rebase和merge的区别  
[https://mp.weixin.qq.com/s/C3f0DpcvXqah_Cerwtfw5w](tab:https://mp.weixin.qq.com/s/C3f0DpcvXqah_Cerwtfw5w)

git的命令，这两个总是让人难以分清，不过线性提交和非线性提交的分支树，目前带我的同事，就比较洁癖，喜欢看线性的分支树，他说这样，他能直接看清楚我改了什么东西，有没有乱动其他的代码，所以现在这两者的区别，我比较清楚了。虽然刚开始很迷惑，但是做的多了，就清楚了，不过将自己的开发代码合并到其他环境，我们还是统一用merge命令，但是多人开发一个大需求的时候，就需要有一个公共开发分支来处理冲突，就会用到rebase命令了。



#### 精读《维护好一个复杂项目》  
[https://mp.weixin.qq.com/s/vVtUgFdH3jGVb3xrGfph5w](tab:https://mp.weixin.qq.com/s/vVtUgFdH3jGVb3xrGfph5w)

很多人觉得，维护好一个项目是架构师需要考量的问题，而自己则不用想这么多，但其实维护好一个项目应该是所有开发者都应该注意的问题，你如果将项目中遗留不需要的代码，那项目就会变得臃肿，而且别人也不敢轻易删除这些无用的代码，而且别人来改，也需要投入时间和精力，所以开发时就应该注重这些问题，这样不管项目功能多复杂，也能维护好。

## 非技术分享


#### 英国青少年动画比赛最佳动画
16岁少年，《机器人做串串》
[https://younganimator.uk/winner/1699875910225x437970782709919500](tab:https://younganimator.uk/winner/1699875910225x437970782709919500)

从中可以发现，外国人更加注重创造性，但是在中国，16岁的少年都在读高中，正在艰苦奋斗中，今年我的弟弟正读高一，但是感觉现在的高中，比8年前更加内卷了，大家都卷成绩，卷时间，他们现在就有人熬夜学习了，而弟弟却还是每天睡眠8小时，他说他睡不够8小时，他会很困，我也不赞成晚上熬夜学习，如果可以，还是尽量白天学习，晚上还是要保证足够的睡眠，很羡慕他8小时的睡眠习惯。



#### 2021总结」前端女程序媛入职一年的年度总结 - 掘金  

[https://juejin.cn/post/7037326007191207943](tab:https://juejin.cn/post/7037326007191207943)
难得看到一位女程序员的年终总结，我觉得写的还不错，看着像大厂有能力的女程序员。

#### 从降本增笑到真的降本增效  
[https://mp.weixin.qq.com/s/FIOB_Oqefx1oez1iu7AGGg](tab:https://mp.weixin.qq.com/s/FIOB_Oqefx1oez1iu7AGGg)

最近似乎大厂频繁翻车，大家觉得是因为快到年底了，裁员导致的，也可能是，毕竟业务稳定了，经济下行，上面的决策者就会觉得裁员是最降本的事情，但是大量的裁员导致稳定的业务没有人维护，那可就翻车了呀，阿里、滴滴，都是影响到大家平常生活的工具，一出现问题大家就会恐慌，用户就会不再信任，似乎比裁员更加影响口碑。希望这些事情，能给社会带来反思。


#### 前端组长应该如何管理前端团队  
[https://mp.weixin.qq.com/s/phYopHvCwBqyRK379yLpsQ](tab:https://mp.weixin.qq.com/s/phYopHvCwBqyRK379yLpsQ)


新组长刚接手没有一个月，组内就遇到了人心动荡的事情，这还真是考验人性的时候，组长如何让团队高效工作同时还能快乐工作，这应该是每个组长都必须经历的难题吧。


