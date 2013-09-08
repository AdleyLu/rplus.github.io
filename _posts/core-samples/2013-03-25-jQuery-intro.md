---
layout: post
title: jQuery info
category : note
tagline: ""
tags : [js, tech]
---
{% include JB/setup %}

### 2013-03-25

1. webpage:
    + html: content
    + css: style
    + javascript: behavior

2. jQuery: easy to control behavior
    + find element in DOM
    + change HTML content
    + listen to what user does & react accordingly
    + animate content
    + talk over the network to fetch new content

3. why jQuery?  
    DOM (document object model) 在各瀏覽器的不同 >> jQuery fix!

4. jQuery DOM 操作優化::
    1. selector:
        + [Sizzle](http://sizzlejs.com/)::  
            left < right(key selector)  
            ID > tag > .class > :hover  

                [!] 原生JS 取物法最好:
                    document.getElementById
                    document.getElementsByTagName
                    document.getElementsByName
                    document.getElementsByClassName (gte IE9)

        + HTML5 query:  
            `document.getElementsByQuery` is better

        + 多階取物法:
            + find: `$#anID.find('a')`
            + content: `$('a', $anID)` [4]
            + selector: `$('#anID a')`
        + cache jQuery object
        + chaining:
            > jQuery.fn return a jQ object!
        + jQuery selector method:

                .add
                    .find
                .filter
                    .has
                    .not
                    .slice
                    .children
                .eq === .get
                return true|false:
                    .is
                    .hasClass

                special:
                    .closest
                    .index


    2. [limit DOM Manipulation](http://api.jquery.com/category/Manipulation/)
        + collect:
            + `array.push()`
            + `string += val`
        + `html()` is quick, 少用 `prepend(), append(), after()`
        + `document.createDocumentFragment`

    3. HTML/CSS/JS 分離: 利於移植
        > 需要考慮移植?

    4. status:
        + old: lots of custom attribute
        + jquery: $.data()

    10. odd::
        + [Append style tags when styling 15 or more elements](http://jonraasch.com/blog/10-advanced-jquery-performance-tuning-tips-from-paul-irish)
          > be careful at style numbers limit (32) at old IE

5. jQuery odd
    1. use jquery core function:  
        `$.ajax` > `$.get`

    1. 保護 jQuery code:
        1. `noConflict()`:

                var j = jQuery.noConflict();
                // Now, instead of $, we use j.
                j('#someDiv').hide();

        2. Passing jQuery

                (function($) {
                    // Within this function, $ will always refer to jQuery
                })(jQuery);

        3. Passing $ via the Ready Method

                jQuery(document).ready(function($) {
                    // $ refers to jQuery
                });

        4. Conditionally Loading jQuery

                <!-- Grab Google CDN jQuery. fall back to local if necessary -->
                <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
                <script>!window.jQuery && document.write('<script src="js/jquery-1.4.2.min.js"><\/script>')</script>

    4. others:
        `$(window).load` `$(document).ready`

    3. 少用jQuery::  
       More JavaScript-based in general, rather than jQuery specific.
        + for ? $.each  
            適用，不濫用。  
            > 時間、效能、品質 是三項無法同時最佳化的
        + `$.css` ? `$.addClass`:
                + css: dynamic number
                + class: most state
        + `$('#anID')` ? `document.getElementById('someAnchor')`

#### ref::
+ selector:
    1. [初探 jQuery 的 Sizzle 選擇器](http://www.baiduux.com/blog/2010/07/15/the_sizzle_in_jquery/)
    2. [How jQuery Beginners can Test and Improve their Code](http://net.tutsplus.com/tutorials/javascript-ajax/how-jquery-beginners-can-test-and-improve-their-code/)
    3. [Sizzle (jQuery) Selector Pitfalls](http://www.sitecrafting.com/blog/sizzle-jquery-selector-pitfalls/ "sizzle selector 需要避開的坑")
    4. [Understanding the Context in jQuery](http://brandonaaron.net/blog/2009/06/24/understanding-the-context-in-jquery)
    5. [10 Advanced jQuery Performance Tuning Tips from Paul Irish](http://jonraasch.com/blog/10-advanced-jquery-performance-tuning-tips-from-paul-irish)