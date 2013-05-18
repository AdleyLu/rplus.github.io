---
layout: post
title: powerful Bookmarklet
category : note
tagline: ""
tags : [browser, js, bookmarklet]
---
{% include JB/setup %}

1. [用書籤將簡中轉換為繁中](http://tongwen.openfoundry.org/bookmarklet.htm "新同文堂: 中文網頁繁簡轉換")

        javascript: (function() {
            var s = document.getElementById("tongwenlet_tw");
            // 若頁面已有(已切換過，則將 js 移除)
            if (s != null) {
                document.body.removeChild(s);
            }
            var s = document.createElement("script");
            s.src = "http://tongwen.openfoundry.org/src/bookmarklet/bookmarklet_tw.js";
            s.id = "tongwenlet_tw";
            // 插入到 body 最末端
            document.body.appendChild(s);
        })();

2. 用書籤切換style(自擬)

        javascript:(function(){
            var bbS = document.getElementById('bbS'),
                head = document.getElementsByTagName('head')[0];

            if (bbS != null) {
                head.removeChild(bbS);
            } else {
                var css = '*{font-weight:900!important;font-family:"微軟正黑體" !important;text-shadow:0.02em 0.02em 0.1em #333 !important;}',
                    style = document.createElement('style');

                style.id = 'bbS';
                style.appendChild(document.createTextNode(css));
                head.appendChild(style);
            }
        })();

3. [readability: 切換高閱讀性版面](http://www.readability.com/bookmarklets)

        javascript: ((function () {
            window.baseUrl = 'http://www.readability.com';
            window.readabilityToken = '';
            var s = document.createElement('script');
            s.setAttribute('src', baseUrl + '/bookmarklet/read.js');
            document.documentElement.appendChild(s);
        })());.

4. [事件綁定偵測](http://www.sprymedia.co.uk/article/Visual+Event+2)

    介紹: [JavaScript Eevent偵錯利器–Visual Event 2 | 黑暗執行緒](http://blog.darkthread.net/post-2013-03-20-visualevent2.aspx)

        javascript: (function () {
            var protocol = window.location.protocol === 'file:' ? 'http:' : '';
            var url = protocol + '//www.sprymedia.co.uk/VisualEvent/VisualEvent_Loader.js';
            if (typeof VisualEvent != 'undefined') {
                if (VisualEvent.instance !== null) {
                    VisualEvent.close();
                } else {
                    new VisualEvent();
                }
            } else {
                var n = document.createElement('script');
                n.setAttribute('language', 'JavaScript');
                n.setAttribute('src', url + '?rand=' + new Date().getTime());
                document.body.appendChild(n);
            }
        })();

5. [Google 翻譯](http://translate.google.com/translate_buttons?hl=zh-tw)

        javascript: var t = ((window.getSelection && window.getSelection()) || (document.getSelection && document.getSelection()) || (document.selection && document.selection.createRange && document.selection.createRange().text));
        var e = (document.charset || document.characterSet);
        if (t != '') {
            window.open('http://translate.google.com/?text=' + t + '&hl=zh-TW&langpair=auto|zh-TW&tbb=1&ie=' + e, 'transWin');
        } else {
            window.open('http://translate.google.com/translate?u=' + encodeURIComponent(location.href) + '&hl=zh-TW&langpair=auto|zh-TW&tbb=1&ie=' + e, 'transWin');
        };

6. [網頁換背景, Subtle­Patterns](http://bradjasper.com/subtle-patterns-bookmarklet/#.UYg0Vjc8_IA)

    可以快速切換不同樣式，套版很好用~

        javascript: (function () {
            var newscript = document.createElement('script');
            newscript.async = true;
            newscript.src = 'https://d2ueh8f0j2xol3.cloudfront.net/subtle-patterns-bookmarklet/static/js/all.js?cb=' + Math.random();
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(newscript);
        })();

7. Youtube 下載(自擬)

        javascript: (function () {
            window.open('http://www.10youtube.com/watch?v=' + document.location.href.replace(/^.+v=(.{11})(.+)?/g, '$1'));
        })();


---
tools:

<http://jsbeautifier.org/>

<http://meyerweb.com/eric/tools/dencoder/>