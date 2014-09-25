---
layout: post
title: 伸縮自在的愛
tagline: using svg automaticly generate fonts by gulp-iconfont
category : action
tags : [css, svg, font, icon, gulp, auto, f2e, action]
---
{% include JB/setup %}

![獵人動畫中的小傑在天空競技場，被西索誤導欺騙，臉頰因而黏上西索招牌念能力「伸縮自在的愛」的 Q 版畫面](https://camo.githubusercontent.com/4fb42f36f533b9425e9fee4569473e0641f2aa50/687474703a2f2f7777772e616e696d61782d74616977616e2e636f6d2f73697465732f74772e616e696d61782f66696c65732f696d61676531305f33302e6a7067 "獵人動畫中的小傑在天空競技場，被西索誤導欺騙，臉頰因而黏上西索招牌念能力「伸縮自在的愛」的 Q 版畫面")


## 伸縮自在的愛 @ F2E 12th party lighting talk

#### using svg automaticly generate fonts by gulp-iconfont

這篇主要是要講如何使用 SVG 圖檔來生成 icon font，  
並且要讓這 icon font 能順利在 CSS preprocessor tool 下接軌  

> 目前 github demo repo 是使用 stylus preprocessor

---

在進入 font 製程前，  
先來稍微理解一下 font 的使用有哪些狀況要衡量

網頁上採用 SVG 做為 RWD icon 的作法中  
目前個人的認知是分為三類較為常見：

### 1. **sprite SVG** background-image

將原本 sprite 對象由 PNG 改為 SVG，這對 coder 來說，最為簡便  
SVG 背景圖可繼承 SVG 大多數的優點： 向量不失真，漸變超滑順...  
但這 sprite 的路徑該如何生出來是個小問題

> 不過也是有 npm 道具可以用啦~  
> <https://www.npmjs.org/package/gulp-svg-sprites>

而 IE9+ 才支援的 SVG，  
其實也只需要上網找一下 SVG support detect solution 就能方便處理 fallback 啦~

> <http://css-tricks.com/test-support-svg-img/>  
> 有空再來研究看看怎麼跟 preprocessor 串在一起...


### 2. SVG with **media-query**

第二種是看真功夫，得直接寫 SVG + 圖內 media-query  
這方式的門檻較高，需要對 SVG 手工製作有些經驗，也需要去瞭解 SVG 內部各種 tag 的適用範圍  
( 基本上就是另外一種的標記語言，而且用法很多種，不太容易以 HTML 的思維去控制  
而且也比較容易踩到跨瀏覽器的雷... Orz

> PS: 這邊用的是**寫**，而不是畫 .......

但基於等價交換  
這種方式產出的 SVG 圖檔通常是非常令人印象深刻  
它將能較靈活地控制 SVG 內部元素的呈現 ( 放大、縮小、變色、隱現...

而 inline 的 SVG 圖檔也能由 SVG 親代層的 CSS 來控制部份屬性  
像是近來 codepen 中常見的 stroke-dashoffset + CSS animation   就能生成非常華麗的帶輪廓動畫的 SVG  

> codepen blog 上有篇簡單的 SVG stroke style + animation 介紹文: <http://codepen.io/jonitrythall/blog/using-svg-stroke-attributes>  
> 印象中個人最早看到的例子是這個 <http://codepen.io/beyondSimple/details/stDzB>  
> 也有人直接拿來畫 ATOM ( Github 出的 text editor ) 的 logo: <http://codepen.io/HipsterBrown/details/hjFIH>  
> 都是利用 stroke style animation 來處理的，  
> 其它也可以參看 [CREATING A BORDER ANIMATION EFFECT WITH SVG AND CSS@Codrops](http://tympanus.net/codrops/2014/02/26/creating-a-border-animation-effect-with-svg-and-css/)


### 3. font (**svg2font**)

> 第二個用**寫**的控制 SVG 實在是太血淚了  
> 終於進到這次的主題: 用 SVG 生成 font 來使用

font 的好處就是蠢蛋如 IE 都看得懂 ( 雖然第一個也可以用 PNG 做很好的 fallback...  
而 font 也可輕鬆地使用 CSS 來控制文字顏色、陰影特效之類的~  
但目前通用的字型格式就只能支援單一色彩，  
所以如果要用的 icon 非單色的話，就不太適用 font 來處理了

另外一點限制就是，  
通常 font 的字碼都會從一些平常不會出現的字開始用，像是 `\e004` 之類的  
所以大多情況下會用 CSS pseudo-element + content 來指定特殊字碼以呈現 iocn。

font 麻煩的點在於，除了 svg font 以外，其它格式 ( `ttf`, `woff`, `eot`)  丟進文字編輯器裡根本就是堆亂碼，  
那麼看來就是要用另外的工具來生成 font...

三種 RWD svg 大概就講到這，  
以下開始聊聊怎麼來自動生成 font ~


---

### font generator tools:

生成的工具可以使用相對較少設定的線上版，  
也可以使用 npm / rpm 上的工具來處理

線上版的較有名的好像是下面兩家

* **IcoMoon**: <https://icomoon.io/app/>
* **Fontello**: <http://fontello.com/>

之前是有用過 IcoMoon，但遇到的問題就是  
若有個 icon 要調整，就要到線上重新處理一次 font 的生成  
雖然它有專案的管理方式，但就是有點麻煩  
不過它可以上傳後再微調位置這點很棒~  
( 雖然跟 font 的什麼 baseline XX-line 的根本不熟 XDDD 但就覺得很專業

另個問題是，生成的 font 還需要重新進 git log + 自己調整 CSS  
這相對於其它使用 auto deploy 的檔案來說，簡直麻煩翻了  
( 那種時後就會非常想改成 PNG sprite ...... XDDD

基於線上版雖然生個一次很方便  
但是來來回回一直生就太麻煩了  
於是找了個工具來幫忙處理這一塊

目地是，自動將 SVG 生成 font，  
並且生好想要用的 preprocessor 檔  
( 不管是 SASS、SCSS、LESS、stylus 都好，就是不要直接生 css 給我呀~~ )

這邊介紹的工具是： [gulp-iconfont](https://www.npmjs.org/package/gulp-iconfont)  
測試的個人 github repo： <https://github.com/Rplus/f2e-svg-lightning-talk>

在開始生成 font 前，得先把 SVG 處理一番  
這邊 demo 的 SVG 是從 http://responsivelogos.co.uk/ 抓下來 sprite SVG  
處理 SVG 個人習慣使用 inkScape，這是款免費且跨平台的 SVG 好用軟體  
將各 size 的圖檔分別存檔後，就能開始處理 font 生成了

以最無腦的方式來說，  
把 SVG 圖檔們擺到 `/app/font/svg/` 的目錄下，  
接著開 terminal 下 gulp 就能看到各種 font 都生好在 `_publish/font/` 的資料夾裡了~

如果要改字型名稱就去 `gulpfile.js` 裡找找 `fontName` 的設定值  
另外還有 icon 要用的 class 也要在 `gulpfile.js` 裡設定好

這邊稍微提一下，字型檔生是生好了，  
但 style 要怎麼參用呢？ 字碼又該怎麼對應呢？

這裡 gulp-iconfont 有提供一個[指引](https://github.com/nfroidure/gulp-iconfont#make-your-css):
在 font 生成後要去觸發將 font charcode 做一個 參照頁來用  
這部份我的處理是給定一支將要被編成 `.styl` 的模版檔 `_font.styl-temp`  
裡頭就是一堆變數字串，到時後會被自動改成對應的文字

所以這邊就看客倌要生成什麼了~ 其實也可以生成 SCSS、LESS 之類的~  
而且還蠻靈活的，要寫啥就自己寫  
個人是參考別人文章後，寫成一個 字碼對應的 map ，  
再加上一個 mixin ，以便要用時再生成指定的字元  
在 demo project 裡的使用方式是以檔名作為 mixin 的參數，  
最後 CSS 生成就會出現指定的字型字碼

IconMoon 有一點很好用的是，它可以指定特定字碼給某個 icon  
目前是還沒在 gulp-iconfont 上找到類似的設定  

> 不過其實也沒啥差啦，因為都用檔名當參數了，  
> 在 SCSS 之類的原始檔都非常易辨識了，是不太需要要為這個特別指定字元了~

基本的 font 生成就是這些了
要使用 RWD icon 的話
只要在 CSS 裡頭，對各 media-query 下好對應的 content 字碼就可以了~

ex:

{% highlight css %}
  appicon('disney-SS');

  @media (min-width: 300px) {
      appicon('disney-S');
  }

  @media (min-width: 400px) {
      appicon('disney-M');
  }
{% endhighlight %}


但也有看過其它種設定方式：  
在 media-query 切換 `font-weight` / `font-style`  
這種方式是有不同的 font-name 或是指定不同的 font-face

> PS： 如果是不同的字型檔，在 media-query 條件切換過程中，
> 因會需要載入相應的字型檔，所以 icon 位置會有閃動的狀況唷~
> 就跟 不是用 sprite 的方式來處理 `:hover` 切換背景圖一樣的意思~


### 目前遇到的問題

svg 不等高的情況下，  
gulp-iconfont 生成的 font 會對齊 baseline  
若要垂直置中的話，還沒試出哪個設定可以調整好  
目前是用比較蠢的作法： 直接把來源 svg 的高度拉成一樣的 XDD


----

### 結語

icon font 很方便，  
使用在 SCSS 之類的流程也沒什麼大問題  
在具向量伸縮下，font 在瀏覽器支援度上是目前比較好的選擇之一  
( 有的 IE 會有鋸齒就先放生吧...........

當然如果只是沒幾個地方要用 RWD icon & 要五顏六色的話  
svg sprite + png fallback 或許會更適合也說不定~

這種東西反正就玩玩嘛~  
放輕鬆~



----

#### ref:
* demo:
  * repo:  
    <https://github.com/Rplus/f2e-svg-lightning-talk>
  * demo page:  
    <http://rplus.github.io/f2e-svg-lightning-talk/>

* tools:
  * gulp-iconfont:  
    <https://www.npmjs.org/package/gulp-iconfont>
  * svg2font online:
    * **IcoMoon**: <https://icomoon.io/app/>
    * **Fontello**: <http://fontello.com/>

* logos
  * (`.svg`) <http://responsivelogos.co.uk/>
  * Codepen logo (`.svg`) <http://blog.codepen.io/documentation/brand-assets/logos/>
  * PIXNET logo (`.ai`) <http://adrule2.events.pixnet.net/rule_logo.html>

* articles:
  * Making SVGs responsive with css:  
    <http://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/>
  * Using Iconic responsively:  
    <https://useiconic.com/guides/using-iconic-responsively/>
  * Rethinking Responsive SVG:  
    <http://www.smashingmagazine.com/2014/03/05/rethinking-responsive-svg/>
