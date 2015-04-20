---
layout: post
title: Time format
tagline: 瞧瞧各大網站對時間戳的寫法
category : tech
tags : [html, sematic, time]
---
{% include JB/setup %}

* 大多數的原始時間都是 unix 輸出的 10 位數 timestamp
* instagram 的 timestamp 少乘一千 XD
* 用 `<time>` 的服務大部份是較新的服務才會使用
* GitHub 的 `datetime` 是這使用 `<time>` 例子裡最嚴謹的，使用了 日期、時間、時區

#### Facebook(mobile)
{% highlight html %}
<abbr data-store="{"time":1429558278,"short":false,"forceseconds":false}" data-sigil="timestamp" data-store-id="140">剛剛</abbr>
{% endhighlight %}

#### Facebook
{% highlight html %}
<abbr title="2015年4月21日 1:51" data-utime="1429552280" data-shorten="1" class="_5ptz timestamp livetimestamp">1 小時</abbr>
{% endhighlight %}

#### Twitter
{% highlight html %}
<a href="/zeldman/status/590230584108060672"
   class="tweet-timestamp js-permalink js-nav js-tooltip"
   data-original-title="上午3:08 - 2015年4月21日">
    <span class="_timestamp js-short-timestamp js-relative-timestamp" data-time="1429556911" data-time-ms="1429556911000" data-long-form="true" aria-hidden="true">43分</span>
    <span class="u-hiddenVisually" data-aria-label-part="last">43 分鐘前</span>
</a>
{% endhighlight %}

#### Gmail
{% highlight html %}
<span title="2015年4月21日 上午3:40" id=":2z" aria-label="2015年4月21日 上午3:40"><b>3:40</b></span>
{% endhighlight %}

#### G+
{% highlight html %}
<a href="+GeaSuanLin/posts/PSWK29mCLnD" target="_blank" rel="noreferrer" class="o-U-s FI Rg" title="2015年4月19日 下午6:31:20">2015年4月19日</a>
{% endhighlight %}

#### Instagram
{% highlight html %}
<time class="timestamp" data-timestamp-short="6 小時" datetime="1970-01-17T13:05:38.799Z" data-reactid=".0.0.1.0.0.0.0.0.0.1.0.0.0:0.1.2:0.0"><span class="tsContent" data-reactid=".0.0.1.0.0.0.0.0.0.1.0.0.0:0.1.2:0.0.0">6 小時前</span></time>
{% endhighlight %}

#### Github
{% highlight html %}
<time title="2015年4月15日 上午4:23 GMT+8" datetime="2015-04-14T20:23:27Z" is="relative-time">6 days ago</time>
{% endhighlight %}

#### YouTube
{% highlight html %}
<strong class="watch-time-text">上傳日期：2011年9月3日</strong>
{% endhighlight %}

#### SitePoint
{% highlight html %}
<time datetime="2015-04-16" pubdate="">April 16, 2015</time>
{% endhighlight %}
