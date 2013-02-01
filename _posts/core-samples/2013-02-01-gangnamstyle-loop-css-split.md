---
layout: post
category : lessons
title: 以長圖做動畫效果
tagline: Youtube gangnam style logo @ 2012
tags : [js,tech-post,css,split,setInterval]
---
{% include JB/setup %}

### CSS split animation 實作
以原生js 撰寫css split animation  
基本上就是 `setInterval` 和 `clearInterval` 處理動畫區間  
另外就是計算動畫偏移量，使其每個動畫區間會自動累進背景圖偏移量

原本遇到了 Chrome 會動， Firefox 卻不會動的狀況  
查了一下，原來是 `backgroundPositionX` 是 MSIE，而非標準用法(但其實我覺得很好用呀 = =a)  
遂改用 `backgroundPosition`， Firefox 就能正常跳舞了~~

<iframe id="cp_embed_mJIdw" src="http://codepen.io/Rplus/embed/mJIdw?type=result&amp;height=300&amp;safe=true" data-height="300" height="300" width="100%" allowtransparency="true"> </iframe>

****
ref: Youtube doodles: [gangnam style image](http://s.ytimg.com/yts/img/doodles/youtube_yoodle_psy_110x30-vflOeb25k.png)