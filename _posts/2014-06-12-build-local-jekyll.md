---
layout: post
title: 建立 jekyll 本機環境
tagline: github jekyll 測試環境
category : blog
tags : [jekyll, github, ruby, gem, host]
---
{% include JB/setup %}

有時會調整一下 theme,  
或是測試一下比較奇怪的 markdown 語法，  
為了能確認 github jekyll 不會壞掉  
所以會在本機建好跟 github 一樣的環境  
這樣就可以先確認好再 commit  
而不用一直 deploy 到線上再去確認  
( 而且以前的 github page 有很嚴重的 cache 問題~  惡夢呀~

其實也不是太難搞  
就只是筆計一下，免得下次重灌忘記 XDD

Github page 說明頁介紹得很清楚  
<https://help.github.com/articles/using-jekyll-with-pages>

1. 先搞定好你的 Ruby (v1.9.3+, 目前)
2. 幫 Ruby package 找個方便管理的工具: bundler (是說也不一定要裝啦~)  
    `gem install bundler`
3. 直接裝 github 的 jekyll 所需要的所有東西:  
    `gem 'github-pages'`  

    PS:  
    你要分開裝也不反對啦，只是真的要 `gem` 來來回回很多次 XDD  
    分開裝請見 [dependencies | github/pages-gem](https://github.com/github/pages-gem#2-dependencies)  
    list 詳見: <https://pages.github.com/versions/>

4. 到 jekyll 資料夾下  
    `jekyll server -w`  
    就可以開心預覽了 ( 理論上啦...

### ref:

+ github: <https://github.com/github/pages-gem>
+ github help: [GitHub Pages Basics](https://help.github.com/categories/20/articles)
+ github help: [GitHub Pages Troubleshooting](https://help.github.com/categories/96/articles)
