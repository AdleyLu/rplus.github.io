---
layout: post
title: 表單退化
tagline: 現在的表單都功能強大，退化還挺難搞的
category : tech
tags : [form, js, html5, fallback]
---
{% include JB/setup %}

表單的功能常出現在搜尋、註冊  
在現代人愈來愈懶的狀態下，  
表單的功能其實也慢慢變多了起來

對我而言，  
最常用到的大概就是

+ 驗證
+ 自動完成

而剛好這兩個在 HTML5 都有不錯的 fallback 可以使用

驗證在 HTML5 的一系列 form 新的 attribute 上  
主要就是以 pattern 去搭建驗證防線

+ `input[type]`:  
    這個很有趣，有些預設的 pattern 會加進去， ex: url, email, search, tel, date ...etc
    type 很多種，自己去 [input:type | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type)
+ `[required]`: 加了這個就會是必填欄位，在 search 功能可簡單地避免空值直接 submit~
+ `[pattern]`: 支援 RegExp 的字串驗證，  
  可到 [HTML5Pattern](http://html5pattern.com/) 去參考別人整理的常用 RexExp pattern  
  驗證不過時，會彈出 title 上的文字來提醒 user.

    > the value of the type attribute is text, search, tel, url or email
+ `[placeholder]`: 預設提示字
+ `[list]`: map to the `id` of `<datalist>`

在 CSS3 上可以用 :valid / :invalid pseudo-class 去調整驗證 過 & 不過 的樣式~  
可以參看 [:invalid | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid), [:valid | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid)


實例上自動完成比較煩，  
non-morden no-js 的 fallback 我基本上很想放生 XD  
原始碼可寫成

{% highlight html %}
<input list="data-list" id="search-kwd" name="search-kwd" required>
<datalist id="data-list">
  <!--[if IE]><select id="search-kwd"><![endif]-->
    <option label="XXX1" value="yyy1">
    <option label="XXX2" value="yyy2">
  <!--[if IE]></select><![endif]-->
</datalist>
{% endhighlight %}

> sample:  
    <input list="data-list" id="search-kwd" name="search-kwd" required>
    <datalist id="data-list">
      <!--[if IE]><select id="search-kwd"><![endif]-->
        <option label="XXX1" value="yyy1">
        <option label="XXX2" value="yyy2">
      <!--[if IE]></select><![endif]-->
    </datalist>

在有 js 情況下，再去調整你要的東西  
(試過把 `<datalist>` 裡的 `option` 抽出來當 `ul > li > a` XD)

而天殺 IE 的 fallback 就很煩，  
如果要做到 no-js 下還會動的話，  
勢必要去查哪版的 IE 開始吃 `datalist` ([IE 10+ supported](http://caniuse.com/#search=datalist) with some buggy XD)  
不支援的要用 `IE:CC` 來包裹, `datalist` 內層要用 `select#id` 把 `option` 包起來

若你不想讓 `input` 在 select 出現時還在，  
那就看你要用 CSS hack 一下，  
還是更暴力地直接在 `input` 前後 用 `<!--[if !IE]><!-->` 包起來  
或要更麻煩地去判斷版本 `<!--[if !(lt IE 10)]><!-->`  
(其實也不用啦，IE 10 不理 `IE:CC` 了)

`datalist` 有一點比較麻煩的就是:  
它跟 `select` 一樣: `option` 沒有 `onclick` 事件...
只有 `input event`, 或是 `propertychange`   
為了這個我才把 `option` 改成 `a` 的邪惡 link 模式... XD

大概這樣，  
有想到啥再繼續補吧



---

ref:
+ [Forms in HTML | MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms_in_HTML)
+ [Data form validation | MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation)

