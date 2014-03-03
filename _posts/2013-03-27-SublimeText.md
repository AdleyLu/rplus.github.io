---
layout: post
title: Sublime Text note
category : tools
tagline: "一些關於 Sublime text 的筆記及設定"
tags : [sublime, note]
---
{% include JB/setup %}


### 設定 profile

    "show_tab_close_buttons": false,
    "translate_tabs_to_spaces": true,
    "always_show_minimap_viewport": true,
    "wide_caret": true,                 // 讓輸入線變寬
    "bold_folder_labels": true,         // 資料夾粗體顯示
    "highlight_modified_tabs": true,    // 異動檔標示
    "draw_white_space": "selection",    // 選取時顯示空白
    "word_wrap": "true",
    "folder_exclude_patterns": [".svn", ".git", ".hg", "CVS", "node_modules"], // 加入忽略 grunt node_module


### 快速鍵 keybind

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


### 套件 Package

+ Goto-CSS-Declaration

### 巨集 macro

### Build system

參考[這篇](http://sublimetext.userecho.com/topic/61233-build-system-should-allow-run-test-verify-preview-etc/#comment_161062)
建立一個新的 build, 

大概就像下面這樣，`cmd` 是要在 terminal 上能跑的指令，後面接的都是該指令的參數  
一些常用的檔案全路徑之類的可以看 [sublime doc 的列表](http://docs.sublimetext.info/en/latest/reference/build_systems.html#id3) 來取用  

    {% highlight json %}
    {
        "cmd": ["gedit", "--new-document", "$file"],
        "variants": {
           "name": "open_gedit",
           "cmd": ["gedit", "--new-window", "$file"]
        }
    }
    {% endhighlight %}

而 `variants` 是拿來 綁快速鍵的, `name` 配對起來後
用法就像下面的 via[2]:

    { "keys": ["ctrl+shift+b"], "command": "build", "args": {"variant": "open_gedit"} }

可以達成多種不同的 build 結果~

via:

+ [Build Systems @ unofficial Doc](http://docs.sublimetext.info/en/latest/reference/build_systems.html)
+ [Build System should allow Run, Test, Verify, Preview, etc. @ Sublime Text → General](http://sublimetext.userecho.com/topic/61233-build-system-should-allow-run-test-verify-preview-etc/#comment_161062)
+ [Build System @ Sublime Text 手冊](http://docs.sublimetext.tw/others/)

### 使用流程 work flow

    + 專案管理


---

## ref::
+ [5 great visual tweaks for Sublime Text](http://wesbos.com/sublime-text-5-visual-tweaks/)
+ [5 more Sublime Text tweaks & tips](http://wesbos.com/5-sublime-text-tweaks-tips/)
