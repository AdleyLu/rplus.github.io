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

    "show_tab_close_buttons": false,
    "translate_tabs_to_spaces": true,
    "always_show_minimap_viewport": true,
    "wide_caret": true,                 // 讓輸入線變寬
    "bold_folder_labels": true,         // 資料夾粗體顯示
    "highlight_modified_tabs": true,    // 異動檔標示
    "draw_white_space": "selection",    // 選取時顯示空白
    "word_wrap": "true"


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

+ 貼上並縮排

        { "keys": ["ctrl+v"], "command": "paste_and_indent" },
        { "keys": ["ctrl+shift+v"], "command": "paste" }


#### 套件 Package

+ Goto-CSS-Declaration

#### 巨集 macro


#### 使用流程 work flow

    + 專案管理


---

## ref::
+ [5 great visual tweaks for Sublime Text](http://wesbos.com/sublime-text-5-visual-tweaks/)
+ [5 more Sublime Text tweaks & tips](http://wesbos.com/5-sublime-text-tweaks-tips/)