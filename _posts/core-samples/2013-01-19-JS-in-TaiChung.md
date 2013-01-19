---
layout: post
category : lessons
tags : [tech-post, collection]
tagline: i'm late orz
---
{% include JB/setup %}

---
## Google Map api

###傳統map所遇挑戰::
+ 傳統js marker: 點太多，將會使頁面變得緩慢
+ marker 資訊密度過高 > 辨識度下降
 	+ 以zoom的動作篩
	+ 密度過高時，將marker融為一顆，以數字顯示 (maker makerCluster)

+ marker info 若太多，將會使得pre-loading 過大

### GMap api 使用:
+ per-setteng default zoom-in value.
+ google search: google map icons,  CDN service
+ info window:
	- `var xxx = new google.map.Infowindow({...});`
	- 開另一個時，先關掉前一個infowindow
+ google-maps-utility-library:  [markerCluster][makerCluster]
+ `geocode`
+ `idle`: 使用者拖曳結束

		google.maps.event.addListener(map, 'idle', function() {
		});
+ `latlng`: 經緯; 盡量用字串，不要用數字，有時過多小數點會踩到js float bug
+ `event`:

### map data translate
+ `.kml` ~= xml ; style, data 穿插> 在client處理效能會很低, 建議在server端preprocessing

---

## Facebook API
	> today: simple application
	> non-permission

### so sad...
+ 不穩定:
	- 未能登
	- 按鈕不穩
+ font-size: fixed

#### Facebook API
+ 按讚 by URL (可用[奇怪的|空的]的url)
+ opern-graph(OG) friendly web-page
	> by facebook
+ like button:
	+ dom
	+ iframe( simple, but don't too many in one page)
+ 按讚數: sum of (別信春哥)
	+ 按讚數
	+ comment數
	+ 分享數
+ comment:
+ Admin mode
	- 可管理留言進階功能
+ `meta`: [open-graph ][fb-og]

        <meta property="og:title" content="The Rock"/>
        <meta property="og:type" content="movie"/>
        <meta property="og:url" content="http://www.imdb.com/title/tt0117500/"/>
        <meta property="og:image" content="http://ia.media-imdb.com/rock.jpg"/>
        <meta property="og:site_name" content="IMDb"/>

+ [activity feed][fbfeed]: for domain
	> 最新動態

+ [permission part][fb-permission]
	> stream.publish

+ facebook API 基本目標:
	+ 以user身份操作Facebook
	+ server side SDK v.s client side SDK
		- client permission較高
		- server side 驗證較高
	+ client API:
		- auth: `fb.login`
		- XSS: PWD 記得加密
	+ 上傳圖片: 先傳第三方service 再取得url餵FB
	+ [graph API][fb-graph-api]
	+ FQL :
		- multi-url : `url: in(http://www.google.com, http://google.com)`

---

[makerCluster]: https://developers.google.com/maps/articles/toomanymarkers?hl=zh-tw "google map api"
[fbfeed]: http://developers.facebook.com/docs/reference/plugins/activity/ "facebook Activity Feed"
[fb-og]: http://developers.facebook.com/docs/opengraphprotocol/
[fb-permission]: http://developers.facebook.com/docs/reference/login/#permissions
[fb-graph-api]: http://developers.facebook.com/tools/explorer