---
layout: post
title: Sublime Text 2 note
category : note
tagline: ""
tags : [sublime, notw]
---
{% include JB/setup %}

### 一些關於Sublime text 2 的筆記及設定

#### 設定 profile

    "wide_caret": true

#### 快速鍵 keybind

+ 快速切換雙層分頁群(tab group)，
  這對於有大量工作需要區分小case時非常有用，  
  在必要的工作環境裡，甚至會開到四層垂直 group  
  `set_layout` 這東西是從左上到右下的分頁區塊，熟了可以切出神奇的版塊XD  
  可以參見[set_layout reference@Sublime Forum](http://www.sublimetext.com/forum/viewtopic.php?f=6&t=7284)

        {
            "keys": ["alt+home"],
            "command": "set_layout",
            "args":
            {
                "cols": [0.0, 1.0],
                "rows": [0.0, 0.05, 1.0],
                "cells": [[0, 0, 1, 1], [0, 1, 1, 2]]
            }
        }

+ 開關側欄

        { "keys": ["alt+a"], "command": "toggle_side_bar" }


#### 套件 Package

+ Goto

#### 巨集 macro


#### 使用流程 work flow

    + 專案管理