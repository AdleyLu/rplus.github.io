---
layout: post
title: Markdown 巢狀清單的解析問題
category : note
tagline: ""
tags : [blog]
---
{% include JB/setup %}

Question:  
nested list might be a mess in github-page,
but the post is fine in github render.

`_config.yml .yml`  
\+ `markdown: rdiscount`

see at <https://github.com/Rplus/rplus.github.com/commit/dce2ec28b6e5f50adca5f628f2141249202aa648#diff-0>

cite: [jekyll issue: Nested lists don't work](https://github.com/mojombo/jekyll/issues/190)