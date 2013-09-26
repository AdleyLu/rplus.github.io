---
layout: post
category : lessons
title: 停用滑鼠選取 by CSS/JS
tagline: so evil
tags : [js,tech-post,css3]
---
{% include JB/setup %}

### 不讓 user 框選文字

先說，個人覺得"這"是項頗邪惡的操控XD  
"停用選取"目前我還沒找到適用的時機耶 囧

CSS:

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none; /* IE 10 */
    user-select: none;

JavaScript:

    document.onselectstart = function() { return false; }
    document.onmousedown = function() { return false; }

    // For IE < 10 and Opera
    function makeUnselectable(node) {
        if (node.nodeType == 1) {
            node.setAttribute("unselectable", "on");
        }
        var child = node.firstChild;
        while (child) {
            makeUnselectable(child);
            child = child.nextSibling;
        }
    }

    makeUnselectable(document.getElementById("foo"));

*************
ref:

+ [Kuro Hsu][KuroHsu] @ [JavaScript.tw][jsgroup] @ Facebook 的 [回應][answer]
+ [Is there a way to make text unselectable on an html page? @ stackoverflow](http://stackoverflow.com/a/4448972)



[KuroHsu]: https://www.facebook.com/kurotanshi "Kuro Hsu@Facebook"
[jsgroup]: https://www.facebook.com/groups/javascript.tw "Javascript in Taiwan @ Facebook"
[answer]: https://www.facebook.com/groups/javascript.tw/permalink/324164747684870/?comment_id=324167091017969&offset=0&total_comments=3