---
layout: post
title: 調整 Blog theme
category : blog
tagline: ""
tags : [blog, jekyll, theme]
---
{% include JB/setup %}

+ [date format](http://liquid.rubyforge.org/classes/Liquid/StandardFilters.html#M000012)  
    via: [jekyll date format?](http://stackoverflow.com/q/7395520)  
    部份 jekyll 內建日期格式: [jekyll Templates](http://jekyllrb.com/docs/templates/)

+ change theme:  
    變更 `_layouts` 裡 html theme 設定

+ code highlight
    [Code snippet highlighting](http://jekyllrb.com/docs/templates/#code_snippet_highlighting)  
    github jekyll 內建的 Pygments,  
    直接在 html generate 階段便把 code 語法標完, 應該會比用 js 的方式快些
    + 縮寫表: <http://pygments.org/docs/lexers/>
    + 行列編號: 在語法後加註 `linenos` (但我覺得 html 生成的編號不利於 copy 呀)
    + syntax.css: 有佛心的人提供各式顏色搭配 <http://igniteflow.com/pygments/themes/>