---
layout: post
title: JSTW @ taipei
category : action
tagline: ""
tags : [action, js, regexp]
---
{% include JB/setup %}

## Regexp intro

0. regex

1. 字串處理:: 特徵識別

2. regex rule:  
    check by each word
    + `/^`: line start
    + `$/`: line end
    + `[]`: character class: include each char
        + `[^]`: nagetive character class: except each char
        + `-`: code dash
            + charCode range: `[1-:]`
            + unicode range: `[\u0020-\u00D7FF]`

    + `{}`: times range
        + `{1,}` ≡ `+`
        + `{0,}` ≡ `*`
        + `{0,1}` ≡ `?`

    + `()`: group

        > lots of group`()` for poor performance

    + `.+?`, `.*?`: non-greedy mode (`?`)

    + 補充:
        + `.`: anychar, except `\n`

            > `(.|\n)`: for anychar include line-break

        + `(?:)`: non-group
        + `(?=)`: lookahead (正向預查)
        + `(?!)`: negated lookahead (正向否定預查)

            > `/Windows(?!95|98|NT|2000)/`  
                WindowsXP: _match_  
                Windows2000: _non-match_

        + 縮寫:
            + `\w` ≡ `[A-Za-z0-9_]`
            + `\W` ≡ `[^A-Za-z0-9_]`
            + `\d` ≡ `[0-9]`
            + `\D` ≡ `[^0-9]`
            + `\s` ≡ `[ \f\n\r\t\v]`: 空白字元 (include: 空白、換頁、換行、enter、tab、v_tab)
            + `\S` ≡ `[^ \f\n\r\t\v]`: 非空白字元
            + `\n` ≡ `[\x0a|\cJ]`: 換行
            + `\b` : 單詞邊界
            + `\B` : 非單詞邊界

                > `/er\b/`  
                    never: _match_  
                    verb: _non-match_

            + `\2` : 2nd group rule matched char(s)
            + 少用:
                + `\f` ≡ `[\x0c|\cL]`: 換頁
                + `\r` ≡ `[\x0d|\cM]`: Enter
                + `\t` ≡ `[\x09|\cI]`: Tab
                + `\t` ≡ `[\x09|\cI]`: v_Tab


3. regexp application:  
    + in JS:

    `text.replce(/[a]+/, function(match){ console.log(match) })`


---

### ref link:

+ [正規表示式 \| wikipedia](http://zh.wikipedia.org/zh-tw/正则表达式)
+ [Regular Expressions \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)