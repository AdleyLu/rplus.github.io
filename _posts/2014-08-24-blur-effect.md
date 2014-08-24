---
layout: post
title: 模糊效果
tagline: 簡記網路上常見的模糊特效使用方式
category : tech
tags : [css, ui]
---
{% include JB/setup %}

### 第一種 `text-shadow`

ex: <http://codepen.io/HugoGiraudel/details/vIEKh/>

利用透明色的文字，  
並為文字加上較大的 `text-shadow`  
即可使 文字區塊 多一層朦朧美~

{% highlight scss %}
.blur-text {
  color: transparent;
  text-shadow: 0 0 1em #666;
}
{% endhighlight %}

> ref:  
>  利用這一特性 CSS-Tricks 也用 jQuery 弄了個華麗的 demo
>
>  + <http://css-tricks.com/examples/BlurredText/>
>  + <http://css-tricks.com/fun-with-blurred-text/>


### 第二種 CSS3 new feature `filter: blur(5px)`

prefixer 部份自己加

{% highlight scss %}
.blur-text {
  filter: blur(5px);
}
{% endhighlight %}

> ref:
> support list: <http://caniuse.com/#feat=css-filters>


### 第三種 svg `filter`

IE 8 GG

{% highlight xml %}
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <filter id="blur">
    <feGaussianBlur stdDeviation="3" />
  </filter>
</svg>
{% endhighlight %}

### 變形： 雙 image `opacity`

兩圖，一張原圖，另一張模糊化
切換兩張的 `opacity` 可達到背景圖 `blur` 的過渡動畫

ex: <http://codepen.io/andreasstorm/details/pyjEh>


---

### 小結

blur effect fallback to old-IE  
<http://demosthenes.info/blog/534/Cross-browser-Image-Blur-with-CSS>

{% highlight css %}
img.blur {
  width:367; height:459px;
  -webkit-filter: blur(3px);
  -moz-filter: blur(3px);
  -ms-filter: blur(3px);
  -o-filter: blur(3px);
  filter: blur(3px);
  filter: url(blur.svg#blur);
  filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='3');
}
{% endhighlight %}
