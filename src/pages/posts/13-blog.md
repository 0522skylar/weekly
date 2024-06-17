---
date: '2024-2-26'
pic: '../../images/65b5ecc73e40b.jpg'
desc: 第一次尝试吃泰国菜，这家的咖喱就很不错，感觉有点像小时候妈妈做的土豆泥，我能混着饭吃好多晚。第一次没有踩雷的感觉真好！大家元宵快乐呀~
---
# 泰堤坊咖喱-第十三期

![image.png](../../images/65b5ecc73e40b.jpg)

第一次尝试吃泰国菜，这家的咖喱就很不错，感觉有点像小时候妈妈做的土豆泥，我能混着饭吃好多晚。第一次没有踩雷的感觉真好！大家元宵快乐呀~


## 技术类分享
#### 今年将发布的React19
[https://mp.weixin.qq.com/s/dPcxZtaUZZ59FVDpT_Kfgw](tab:https://mp.weixin.qq.com/s/dPcxZtaUZZ59FVDpT_Kfgw)

React更新迭代还是很快，去年就听说React迭代会服务于Next，这很快就要推出新的版本了，快来看看新版本React有哪些新特性吧。


#### 大公司里怎样开发和部署前端代码

[https://www.zhihu.com/question/20790576](tab:https://www.zhihu.com/question/20790576)

张云龙老师讲的很好，通熟易懂，之前只是听说过大厂的AB测试，还要灰度环境，虽然目前我这家公司上线前也有预发布环境，只有预发布验收没有问题，之后再上线，但是能控制流量的百分比，真实给用户使用，这样能在大需求上线后，出现线上问题时，减少用户受到影响；当然面向客户端的项目，通常都会有开关，上线之后，是否要全量打开，让所有人都知道系统更新了，也可以不打开全量开关，只给指定的用户更新。


#### JavaScript如何终止forEach循环

[https://juejin.cn/post/7295010992122118185](tab:https://juejin.cn/post/7295010992122118185)

文章中提到了三种不执行forEach循环体的方法，看看有没有你想到的，然后我们简单模拟一下forEach的实现方式。

```javascript
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(callback, thisArg) {
    if (typeof callback !== 'function') {
      throw new TypeError('Array.prototype.forEach callback must be a function');
    }
    var T, k;
    if (thisArg === undefined) {
      T = this;
    } else {
      T = thisArg;
    }
    var O = Object(this);
    var len = O.length >>> 0; // 转换为32位无符号整数
    if (len === 0) {
      return;
    }
    var k = 0;
    while (k < len) {
      var kValue;
      if (k in O) {
        kValue = O[k];
        try {
          callback.call(T, kValue, k, O);
        } catch (e) {
          // 如果回调函数抛出异常，则停止执行
          throw e;
        }
      }
      k++;
    }
  };
}
```


## 非技术类分享


#### 图片修复工具

开源的图片修复和超分辨率工具, 纯浏览器端实现
[https://github.com/lxfater/inpaint-web](tab:https://github.com/lxfater/inpaint-web)

WASM技术，这样的工具也有一个显著的特点，就是不确定什么时候返回，一直处于等待响应的界面，对于使用者本身来说，就体验感很不友好，我尝试上传一张模糊图片进行修复，等待到了近80%，时间长达5分钟，后面浏览器崩溃了。

#### 中国房地产现状

[https://www.youtube.com/watch?v=99JXJCNDgBA](tab:https://www.youtube.com/watch?v=99JXJCNDgBA)

这是Tinyfool老师分享的最近关于多个地区放开房地产限购,以及中国近年来房地产的状况分析.总的来说,我也觉得中国最近这几年来房地产都是低迷的状态,一是现在大家都有房了,没必要再大量买房,二是人口骤减,买房需求减少了.去年年底还看到有人高价买的房子,低价都卖不出去.所以现在买房做投资,真的已经开始不划算了.房价持续走低.


#### Huberman Lab Podcast 全系列笔记

[https://zhuanlan.zhihu.com/p/676445568](tab:https://zhuanlan.zhihu.com/p/676445568)

Andrew Huberman 是在斯坦福大学任教的知名神经科学家，他的 Huberman Lab Podcast 是一独特且极具价值的播客系列，在英文互联网享有极高的知名度。播客中，他探讨并分享了许多关于睡眠、压力管理、学习、锻炼和营养等方面的知识与实用建议。工作的前提是身心健康，所以平时的我们，也需要注意锻炼身体，保证良好睡眠。


#### 给程序员的一些建议I code it

[https://icodeit.org/2017/07/tips-for-newbies/](tab:https://icodeit.org/2017/07/tips-for-newbies/)

很高兴自己现在仍然坚持每天运动，其实运动本身就能让人心情愉悦，但是很多人却忽视这一点，现在的人似乎都比较懒惰，不爱运动，所以很多人都偏胖，但是坚持运动，除了能让你身体保持健康以外，也能让你体型匀称，最重要的是，运动的人会更加自信，所以一起坚持运动吧。



