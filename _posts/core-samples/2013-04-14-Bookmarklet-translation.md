---
layout: post
title: translat to zh-tw by Bookmarklet
category : note
tagline: ""
tags : [browser, js]
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

2. 用書籤切換style

        javascript: (function() {
            var s = document.getElementById("allBold"),
                // 主要加入的樣式(粗體、字體渲染、雅黑)
                styles = "*{text-shadow: 0.02em 0.02em 0.2em #999 !important; font-family: 'Microsoft YaHei' !important; font-weight: 600!important; }";
            if (s != null) {
                document.body.removeChild(s);
                return;
            }
            var s = document.createElement("div"),
                ss = document.createElement("style");
            ss.appendChild(document.createTextNode(styles));
            s.appendChild(ss);
            s.id = "allBold";
            document.body.appendChild(s);
        })();

