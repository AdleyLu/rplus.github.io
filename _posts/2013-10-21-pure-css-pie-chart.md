---
layout: post
title: pure css pie chart
category : demo
tagline: css 弧形
tags : [css, sass]
---
{% include JB/setup %}

今天練習了兩個 example  
主題都是用 css 兜出全角度的弧形

起頭是看到 [MUKI space | FB](https://www.facebook.com/mukispace/posts/10151978185250833) 上的履歷討論  
雖然被酸用 動畫GIF 製作 [*會動的*網頁](http://www.mattjamesdesigner.com/)  

> 但其實我覺得作者 gif 用得不錯呀~  
他都寫明了平時很多時間都在處理 IE 相容問題上，在 IE 相容下，  
用 gif 雖然比較 low 一點，但對於技能偏視覺的人來說，這是快又狠的招式呀~  
而且 gif / css3-animation / jQuery-animate / canvas(by jQuery plugin)  
這完完全全是在解釋他能夠 fallback IE 各種討人厭的動畫效果
只是他的 tag命名 跟 圖檔名是可以加強些啦~

看到作者的技能圓圈是用 canvas 作的，  
手癢想試試用 css 畫畫看，  
於是先搜了一下有沒有人做過

## [第一種](http://codepen.io/Rplus/pen/HpBrt)
最一開始是看到 [這個](http://atomicnoggin.ca/test/pie-chart.html)  
它使用`clip` / `rotate`  搭配，來裁切需要的角度  
`border-radius` 只是挶限出圓形邊界來，  
DOM 用到兩層，但若是改寫一下，可以用 `:pseudo` 來達成單層 DOM  
大扇形需要拼接

<p data-height="300" data-theme-id="0" data-slug-hash="HpBrt" data-user="Rplus" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/Rplus/pen/HpBrt'>HpBrt</a> by Rplus (<a href='http://codepen.io/Rplus'>@Rplus</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

## [第二種](http://codepen.io/Rplus/pen/IvHta)
第二種是單層 DOM  
參考到 [codepen 這一篇](http://codepen.io/AtomicNoggin/pen/fEish)  
使用到的是單純的 `rotate`，但這邊的 `rotate` 只是用來做弧角的雙邊，  
精妙的是採用不同的旋轉中心 `transform-origin` 以及 同側`border-radius` 以將扇形刮出!

<p data-height="300" data-theme-id="0" data-slug-hash="IvHta" data-user="Rplus" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/Rplus/pen/IvHta'>pure css pie chart</a> by Rplus (<a href='http://codepen.io/Rplus'>@Rplus</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

這兩個 example 都有再自行處理 分離效果  
第一個隨便寫的，第二個有真的去算三角函數，畫了些角才把公式回想起來，高中的那些什麼和角差角的早忘光了 XD

### 第三種
[Pure CSS Pie Chart](http://codepen.io/thebabydino/pen/vgnDh)  
不好意思，她的 sass 好難啃  
看不太懂....  
`transform-origin` `skewY`  
幅射狀的圓周線是用 `background`  產生的，每 10deg 一格  
中間一圈是用 `:after` + `box-shadow` 內圈還能變色!  
不看那些幅射線背景的話，這一方法的靈活性更大一點!!  
但是 `skewY` 後的平行四邊形有點大，需要限縮一下  
ps: 不能超過 半圓

## 第四種
[background-image by css3](http://codepen.io/ryanmcnz/pen/GlnJa)

以下開放非 css 的 pie chart

## 第五種
canvas

## 第六種
svg

---

也趁這次把 sass 的一些進階 function 學了一點  

+ `nth()`: 依序取值，需搭配以 `,` 分隔的長字串併用
+ `%placeholder`: `%` 裡層無法再次使用 `@include` `%` 這點有點惱人，乾脆弄成 `mixin` ......
