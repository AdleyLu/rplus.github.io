---
layout: post
title: Linux 學習筆計
category : tech
tagline: 我在 linux 碰的石頭 orz
tags : [linux, os]
---
{% include JB/setup %}

+ 中文
    + 中文輸入： gcin
    + Sublime Text 中文輸入問題：  
        以 [input helper](https://github.com/xgenvn/InputHelper) 暫時處理  
        (MD好難打呀~~~  而且又常常按到 Esc...  
        打整串的字就這樣不見了 囧rz)
    + 待解問題
        + 中文 fallback:

+ Git
    + 昔 windows 系統的 CRLF 問題，fixed by [保哥](http://blog.miniasp.com/post/2013/09/15/Git-for-Windows-Line-Ending-Conversion-Notes.aspx)
    + [私鑰: 昔 ppk 轉 openssh](http://pobing.iteye.com/blog/1520151)
    + [公鑰](https://help.github.com/articles/error-permission-denied-publickey)

+ 視窗控制

+ 自動登入 [autologin in XFCE](http://superuser.com/questions/356316/how-do-i-disable-the-login-screen-on-xfce)

        @ /etc/lightdm/lightdm.conf
        ---
        autologin-user=YourDesiredAutoLoginUserName