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
    google plus 的留言框、各個線上 code tester 平台也大多使用這個好咪呀  
    表單送出前再處理一下字符就完事了  
    不然可以學一下 Stack Overflow 這篇 <http://stackoverflow.com/a/6247785>  
    在 submit 時把字塞進 hidden textarea

2. 使用萬惡 textarea
    

