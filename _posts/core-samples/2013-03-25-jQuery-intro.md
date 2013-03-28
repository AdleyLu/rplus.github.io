---
layout: post
title: jQuery info
category : note
tagline: ""
tags : [js, tech]
---
{% include JB/setup %}

### 2013-03-25

1. 網頁三本柱
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
    DOM (document object model)  
    DOM 在各瀏覽器的不同 >> jQuery fix!

4. jQuery 操作優化::
    1. selector:
        + [Sizzle](http://sizzlejs.com/)::  
            left < right(key selector)
        + `$#anID.find('a')`, `$('a', $anID)`  
            `$('#anID a')`
        + cache jQuery object
        + chaining

    2. limit [DOM Manipulation](http://api.jquery.com/category/Manipulation/)
        + collect:
            + `array.push()`
            + `string += val`
        + `html()` is quick, 少用 `prepend(), append(), after()`
        + Document Fragments

    3. odd::
        + [Append style tags when styling 15 or more elements](http://jonraasch.com/blog/10-advanced-jquery-performance-tuning-tips-from-paul-irish)

    4. 保護 jQuery code:
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
        `$(window).load(){}`

    3. 少用jQuery::  
       More JavaScript-based in general, rather than jQuery specific.
        + for ? $.each  
            適用，不濫用。  
            時間、效能、品質 是三項無法同時最佳化的
        + `$.css` ? `$.addClass`
        + `$('#anID')` ? `document.getElementById('someAnchor')`

#### ref::
+ selector:
    + [初探 jQuery 的 Sizzle 選擇器](http://www.baiduux.com/blog/2010/07/15/the_sizzle_in_jquery/)
    + [How jQuery Beginners can Test and Improve their Code](http://net.tutsplus.com/tutorials/javascript-ajax/how-jquery-beginners-can-test-and-improve-their-code/)