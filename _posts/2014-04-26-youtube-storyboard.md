---
layout: post
title: Youtube 縮圖語法
tagline: youtube 其實也有時間軸縮圖唷~ ( 不好拆就是
category : tech
tags : [youtube, js, pic]
---
{% include JB/setup %}

測試頁： <https://www.youtube.com/watch?v=daYDWJRPYkc>

FB 貼文紀錄： <https://www.facebook.com/100001733786295/posts/697262800341506>

<div id="fb-root"></div> <script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/zh_TW/all.js#xfbml=1"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'));</script>
<div class="fb-post" data-href="https://www.facebook.com/rplus.tw/posts/697262800341506" data-width="466"><div class="fb-xfbml-parse-ignore">由 <a href="https://www.facebook.com/rplus.tw">Raven Chen</a> <a href="https://www.facebook.com/rplus.tw/posts/697262800341506">貼文</a>。</div></div>


Youtube 該頁執行
{% highlight js %}
ytplayer.config.args.storyboard_spec.split("|");
{% endhighlight %}

會得到一個陣列:
{% highlight js %}
[
  "https://i1.ytimg.com/sb/daYDWJRPYkc/storyboard3_L$L/$N.jpg",
  "48#27#100#10#10#0#default#HnCjYupg_vsYNLozWI47CdsNtSk",
  "60#45#135#10#10#2000#M$M#PcmvvujBQT-KT5Dkr3653VGAic0",
  "120#90#135#5#5#2000#M$M#Hrj8qPfaU6azbAIAddrlI5trgCw",
  "240#180#135#3#3#2000#M$M#Ked-bkwfjdDoaCX7GeAdA1atDQI"
]
{% endhighlight %}

解析度序號看 `L$L`，$L置換為 序號 `0` ~ `3` (低解析 > 高解析)  
頁數看 `$N` ，會置換為 `default` 或 `M0` ~ `M5`...

試著解釋:  
`120#90#135#5#5#2000#M$M#Hrj8qPfaU6azbAIAddrlI5trgCw`

    120: thumb width
    90: thumb height
    135: sum of thumbs
    5#5: 寬高各有幾張 thumbs
    2000: 未知...
    M$M: 拿來取代 $N，若 尚餘 $M 則以 loop 至總頁數 的數字替換
    最後的一長串： 後綴於 ?sigh= ( 驗證碼？

----

#### 第零張

    "48#27#100#10#10#0#default#HnCjYupg_vsYNLozWI47CdsNtSk"

`https://i1.ytimg.com/sb/daYDWJRPYkc/storyboard3_L0/default.jpg?sigh=HnCjYupg_vsYNLozWI47CdsNtSk`
![](https://i1.ytimg.com/sb/daYDWJRPYkc/storyboard3_L0/default.jpg?sigh=HnCjYupg_vsYNLozWI47CdsNtSk)

----

#### 第一張，低解析

    "60#45#135#10#10#2000#M$M#PcmvvujBQT-KT5Dkr3653VGAic0"

一頁一百張 (10 * 10)，共有 135 張 (1頁餘 35)  
`https://i1.ytimg.com/sb/daYDWJRPYkc/storyboard3_L1/M0.jpg?sigh=PcmvvujBQT-KT5Dkr3653VGAic0`  
![](https://i1.ytimg.com/sb/daYDWJRPYkc/storyboard3_L1/M0.jpg?sigh=PcmvvujBQT-KT5Dkr3653VGAic0)

----

#### 第二張，中解析
    "120#90#135#5#5#2000#M$M#Hrj8qPfaU6azbAIAddrlI5trgCw"

一頁 25 張 (5 * 5)，共 135 張 (5頁餘 10)  
`https://i1.ytimg.com/sb/daYDWJRPYkc/storyboard3_L2/M0.jpg?sigh=Hrj8qPfaU6azbAIAddrlI5trgCw`  
![](https://i1.ytimg.com/sb/daYDWJRPYkc/storyboard3_L2/M0.jpg?sigh=Hrj8qPfaU6azbAIAddrlI5trgCw)

----

#### 第三張，高解析
    "240#180#135#3#3#2000#M$M#Ked-bkwfjdDoaCX7GeAdA1atDQI"

一頁 9 張 (3 * 3)，共 135 張 (剛好15頁)  
`https://i1.ytimg.com/sb/daYDWJRPYkc/storyboard3_L3/M0.jpg?sigh=Ked-bkwfjdDoaCX7GeAdA1atDQI`  
![](https://i1.ytimg.com/sb/daYDWJRPYkc/storyboard3_L3/M0.jpg?sigh=Ked-bkwfjdDoaCX7GeAdA1atDQI)

----

ref:

+ [Do you want to Print a YouTube Video?](http://www.labnol.org/internet/print-youtube-video/28217/)  
  is a bookmarklet to generate a youtube storyboard.  
  限制是: 要在 Youtube 當前頁
+ [bulutcy/youtube-storyboard | Github](https://github.com/bulutcy/youtube-storyboard/blob/master/youtube-storyboard/storyboard.js)  
  用 ajax 去撈回 youtube 頁面原始碼  
  再用 RegExp 撈 HTML 裡的特殊字串
