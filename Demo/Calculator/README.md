# 功能
+ 簡易計算機
+ change skin
+ draggable
+ 外引部份參數

---
## Usage
1.	load *.js / *.css / *.ttf / *.eot.
2.	Set a 'id' or 'class' in a HTML input element.
3.	in js area:

		$('#id').myCalac();
		--- OR ---
		$('#id').myCalac({
			parameter: 'value', ....
		});

---
## 選用參數:
+ defaultOpen: false,
		// 預設顯現與否,	[boolean]

+ animeSpeed: 'normal',
		// 開關動畫速度,	['fast, 'normal', 'slow', \d{ms}']

+ showAllways: false,
		// 總是浮現,		[boolean]

+ movable: false,
		// 是否可動 需jQuery UI	[boolena]

+ calcInstant: true,
		// 即時運算

+ style: 6,
		// 6:hexagonStyle | 0:pureStyle]

+ wrongFormatMSG: '否定',
		// 錯誤警告標題

+ wrongFormatMSGsub: '公式錯誤<span>formaula is wrong</span>',
		// 公式錯誤警示訊息標語, span為小標[選用]


---
## JS 流程:
+ plug-in::
		$.extend() 將外變數引入區域

+ 左移/右移:

		get/set caret position

+ 模擬backspace / 字串增加

		以 get caret position 為切點, 將字串切割兩段 by .slice()

+ 運算符防呆:

		若前一位元為運算符, 則強制跳出 click, 不進行輸入動作

+ regexp test/match:
	+	Operator validate:
			RegExp(/^[^\d\+\-\.\(]|[\+\-\*\/]{2,}|\d\(|\)\d|[^\d\)]$/)

	+	Charater validate:
			RegExp(/^[\d|\+|\-|\*|\/|\(|\)|\.]+$/)

	+	illegal charater validate:
			replace( (/[^0-9|\d|\+|\-|\*|\/|\(|\)|\.]/g), '')

	+	bracket validate:

			自動補正括號錯誤
			(目前可判定左右括號數量, 但無法判定左右括號在前面或後面,
			ex: ))*6*(( 會默認允許 )

	+	皆通過則進入運算 eval()

+ 即時運算:

		僅在按下數字鍵時可觸發, 錯誤情況一律僅跳出公式錯誤

+ BUG 有點多...

---
## Ref
+ [jQuery UI](http://jqueryui.com/):: draggable + dialog
+ [get caret position](http://stackoverflow.com/questions/499126/jquery-set-cursor-position-in-text-area)
+ [set caret position](http://stackoverflow.com/questions/2897155/get-caret-position-within-an-text-input-field)
+ [hexagon CSS](http://jtauber.github.com/articles/css-hexagon.html)


---
## Calculate Rules
<pre>
start
\d
(
+
-
.


middle
{// illegal
^(\d)\(		>>>		$1*(	// 數字接左括
^\)(\d)		>>>		)*$1	// 右括接數字
^[\+\-\*\/]\) >>>	)		// 運算符接右括
^[\*\/]\(	>>>		(		// 乘除接左括
							// 左右括無閉合
}

end
\d
)
</pre>