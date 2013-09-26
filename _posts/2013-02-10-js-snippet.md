---
layout: post
category : lessons
title: 有用的 JS 程式片段
tagline:
tags : [js,tech-post]
---
{% include JB/setup %}

### 有用的 JS 程式片段

1.綁定事件(相容)


    {% highlight js %}
    /**
     * addEventListener
     * @param {[string]} evnt [description]
     * @param {[type]} elem [description]
     * @param {[function]} func [description]
     */
    function addEvent(evnt, elem, func) {
        if (elem.addEventListener)  // W3C DOM
            elem.addEventListener(evnt,func,false);
        else if (elem.attachEvent) { // IE DOM
            elem.attachEvent("on"+evnt, func);
        }
        else {  // No much to do
           elem[evnt] = func;
        }
    }
    {% endhighlight %}