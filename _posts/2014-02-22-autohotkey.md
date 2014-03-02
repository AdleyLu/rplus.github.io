---
layout: post
title: autohotkey 小集
tagline: windows 的少有眷戀
category : tech
tags : [script, auto, autohotkey]
---
{% include JB/setup %}

## goal: 利用自定義行為，提高電腦使用效率

1. [Easy Window Dragging (requires XP/2k/NT)](http://www.autohotkey.com/docs/scripts/EasyWindowDrag.htm)  
    這個主要是我在 Linux 的使用習慣  
    按住特定鍵後 直接拖拉視窗位置  
    雖然 windows 7 有 win + 左右 的快速切半對齊的 X 快速鍵  
    但是有時只是想單純把礙眼的視窗拉走 或是簡單調一下位置  
    標題那麼小一條  真的不好瞄準 XDD

2. [Keep a Window on top with a handy AutoHotkey script](http://www.howtogeek.com/howto/13784/keep-a-window-on-top-with-a-handy-autohotkey-script/)  
    這個就很有趣了  
    可以快速把視窗置頂  
    也是 Linux Mint 內建就有的小功能
    當然也可以用灌些小軟體 不過 ahk 能作到就一塊處理掉吧~

3. [Sublime Text 2 注册提醒窗口自动关闭小工具](http://www.cnblogs.com/ttoy/archive/2013/04/11/3015793.html)  
    這個就是沒將 Sublime Text 破解的另一種退化方式吧 XDDD
    我主要覺得煩的不是 Sublimt Text 的主程式的 popup dialog  
    而是 SFTP 每存 10 次就跳出來一次的提示框 = =

    真心會讓人神經衰弱...  
    (其實正確作法應該是讓公司買一套 XDD)

    對了 這一頁簡中的方法  我試了後會有點問題，就是它只會跑第一次  
    很詭異呀 = =  
    後來我稍微改寫了一下


        #Persistent
        SetTimer, KillST3popup, 100
        return

        ; auto close sublime SFTP regist window
        KillST3popup:
        ifWinExist, Sublime Text
        {
          WinClose
        }


    讓它每 0.1 秒確認一次 = =  
    我也不想呀~~ 先將就吧~

4. 之前在用 XP 時也有改過一支 script 來處理增減視窗寬度  
    不過搬到 win 7 後，大多都用 chrome devtool 的視窗來調整寬度  
    (這邊順便幹譙一下 devtool 的拖拉點真是有夠小 要點到很累 = =，  
    v34 有改大一點的範圍了  上下拖很好拖   但左右的還是一樣小不拉機...  
    而且還不能簡單改 devtool 樣式是安怎啦！！)


> PS： ahk 我通常不拿來做快速輸入  
  因為要是忘了快速鍵還挺麻煩的  
  快速輸入我大多都是用貫用 編輯器(sublime) 的 snippet 來處理  
  對於編輯器領域，Sublime 它雖然不是超強 但我覺得它易上手，也比較好改設定  
  論功能性 vim 當然是強捍不少，但 vim 光是一直切換狀態就讓人有點打結的感覺呀呀呀呀 XDDD  
  這都題外話啦~ 改天有心情再來紀錄一下 Sublime 的常用功能~

