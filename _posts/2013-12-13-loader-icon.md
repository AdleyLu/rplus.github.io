---
layout: post
title: loader icon 學習
category : tech
tagline: 神奇 icon 火力大開~
tags : [css, demo]
---
{% include JB/setup %}

看了些 codepen 的 loader 載入圖示  
手癢，便用 box-shadow 寫了個簡易版的: 

[simple css loader @ codepen](http://codepen.io/Rplus/pen/wigKC) :

<p data-height="268" data-theme-id="0" data-slug-hash="wigKC" data-user="Rplus" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/Rplus/pen/wigKC'>simple css loader</a> by Rplus (<a href='http://codepen.io/Rplus'>@Rplus</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>

後來看了一小圈後發現
使用單一 element 去刻圖示的有大部份都使用了 多重box-shadow 去控制  
用 animation + step 步進方式，真的很多亮眼的動畫方式!!  
<http://codepen.io/joshbader/pen/lmefu>

另外也看到了一些有趣的應用，  
像是 loader icon 大多有的較細的尾巴  
學習到利用 border 相交 + border-radius 以構築出細尾的 icon  
<http://codepen.io/Idered/pen/hilFd>

上面那個如果需要前頭圓圓的話，  
可以利用 pseudo element 在 border 前加一顆小球  
<http://codepen.io/klaytonfaria/pen/kLgiH>

css 要華麗的話，大概要混著用 漸層背景 或是 box-shadow 吧

### nice pens:
每個字都在動的 loading 真的超帥的~  
而且顏色好柔呀~ 感覺都要跟著飄起來了~  
<http://codepen.io/diegopardo/pen/dGlfC>

硬派動畫: 一格一格算 XD  
<http://codepen.io/JorenVanHee/pen/ycodJ>

通過 scale 的不同造成位置差，效果很明顯  
這個超可愛~ 我好想畫個 poi 的 XDD  
<http://codepen.io/joni/pen/drFzC>

用四點畫三點的可愛動畫( 頭尾 scale 反向，動畫真的很巧妙! )  
<http://codepen.io/desandro/pen/igHbG>

這四個點的動畫也很可愛  
<http://codepen.io/desandro/pen/HhdrA>

漸層就是炫麗  
<http://codepen.io/mroseboom/pen/EBbFf>

rotate 華麗立體風  
<http://codepen.io/MyXoToD/pen/izdAp>

個人還是比較偏愛簡單風格, 所以能使用單一元素來達成  
如果要酷炫的話, 或許可以考慮 svg 畫一個 XD