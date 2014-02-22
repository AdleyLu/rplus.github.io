---
layout: post
title: textarea 自動高度
tagline: IE sucks!
category : tech
tags : [css, js, ie, polyfill]
---
{% include JB/setup %}

## goal: #文字輸入框能隨內容變動高度.

1. 不要用 textarea ! 改用 contenteditable

    擔心萬惡 IE ？  
    看看 [caniuse:contenteditable](http://caniuse.com/#feat=contenteditable), **all support** !!!  
    再來看看 HTML5 doctor 怎麼說: [contenteditable, browser support @ HTML5 doctor](http://html5doctor.com/the-contenteditable-attribute/#browser-support)  
    **Internet Explorer 5.5+**!!!  
    對！IE 其實很的滴~ (僅在 IE6 剛出生的時期 XD

    用吧！  
    google plus 的留言框、各個線上 code tester 平台也大多使用這個好咪呀 (咪呀："小東西"的台語)  
    表單送出前再處理一下字符就完事了  
    不然可以學一下 Stack Overflow 這篇 <http://stackoverflow.com/a/6247785>  
    在 submit 時把字塞進 hidden textarea， 快哉矣~

2. 使用可惡的 textarea
    {% highlight  %}
    $.on('input propertychange', function() {...});
    {% endhighlight %}

    上頭的是偵測 鍵盤輸入的事件  
    印象中 IE 8 跟 9 有一個行為特別詭異，需要多綁 onchange 上去 Orz  
    然後另一個 IE 是不吃 delete 事件 = =...
    (Let it go~ Let it go~)

    偵測 textarea 的高度不能用 height, 因為高度預設是不會動的  
    要算內部的捲動高度： scrollHeight  
    只要判斷一下 scrollHeight 大於 height 時去調整 height 即可快樂地結束這一回合 (?

    BUT,  
    IE 是有很多陷阱卡的 Orz  
    某個版本的 IE 對 textarea scrollHeight 的定義非常神奇，  
    假如你一行字只有 20px 高， 你的 textarea 初始高度設為 60px，  
    這天殺的 IE 回傳的 scrollHeight 不是 60px 而是 textNode 高度 20px  
    (所以在 IE 要多判斷一次 scrollHeight 是不是小於 height...)

    大概就這樣~
    中斷頗久才續著寫，好像有些興忘記記下來的感覺  
    PS：如果 textearea 是在 iframe 裡的話  
    要調整 iframe 的高度通常就是用 postMessage 來當跟 parent-window 的傳話筒  
    有支 jQuery postMessage 的 plugin 可以拿來作 polyfill~

---

+ <http://www.w3.org/TR/cssom-view/#dom-element-scrollheight>
+ [IE 9 在模擬 input event 的小問題： Simulating the input event in IE 9](http://benalpert.com/2013/06/18/a-near-perfect-oninput-shim-for-ie-8-and-9.html#simulating_the_input_event_in_ie_9)
