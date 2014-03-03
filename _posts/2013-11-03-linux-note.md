---
layout: post
title: Linux 學習筆記
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
        + [dos2unix](http://linuxcommand.org/man_pages/dos2unix1.html): CRLF <> LF  
            [via](http://superuser.com/a/52046)
        + [Dealing with line endings](https://help.github.com/articles/dealing-with-line-endings)

    + [私鑰: 昔 ppk 轉 openssh](http://pobing.iteye.com/blog/1520151)
    + [公鑰](https://help.github.com/articles/error-permission-denied-publickey)

+ 視窗控制

+ 自動登入 [autologin in XFCE](http://superuser.com/questions/356316/how-do-i-disable-the-login-screen-on-xfce)

        @ /etc/lightdm/lightdm.conf
        ---
        autologin-user=YourDesiredAutoLoginUserName

### xfce

+ hotkey
    + [控制音量](http://ubuntuforums.org/archive/index.php/t-1150976.html)：

            amixer set Master playback 3dB-
            amixer set Master playback 0%

    + [xautomation](http://hoopajoo.net/projects/xautomation.html)  
        模擬部份鍵盤 / 滑鼠行為, [commend list](http://manpages.ubuntu.com/manpages/jaunty/man1/xte.1.html)

            xte 'keydown Control_L' 'key T' 'key V' 'keyup Control_L' 'key Return'

+ system monitor
    + terminal:
        + `top`: 內建的 monitor table
        + `htop`: 在 terminal 內執行，但可點擊，強化的 top
        + `nmon`:

+ terminal:
    + oh-my-zsh:

            # @ /home/r/.zshrc
            ZSH_THEME="simple"

            # @ simple.zsh-theme
            PROMPT='%{$fg[cyan]%}%~%{$fg_bold[green]%} $(git_prompt_info)%{$reset_color%}
            %{$fg[yellow]%}$%{$reset_color%} '

            ZSH_THEME_GIT_PROMPT_PREFIX="("
            ZSH_THEME_GIT_PROMPT_SUFFIX=")"
            ZSH_THEME_GIT_PROMPT_DIRTY=" ✗"
            ZSH_THEME_GIT_PROMPT_CLEAN=" ✔"

            # change folder color
            export LS_COLORS='ow=1;;42'

