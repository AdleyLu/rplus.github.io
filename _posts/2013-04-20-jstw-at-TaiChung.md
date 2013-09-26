---
layout: post
category : lessons
tagline: 其實聽不太懂 = =
tags : [tech-post, collection]
---
{% include JB/setup %}

## JS基本概念

### phototype
> after 熟用一般操作後
> 進行大量組織化程式用

+ closure
+ call
+ apply

+ JS 能幹麻?
	1. back-end
	2. front-end

+ JS 執行時間點  
  時間差非常複雜，無良好 logic 會error
	+ direct: 直接
	+ event: 事件綁定
	+ timer: interval

+ phototype
	+ 使用時機

			<script>
			var MyTable = function(/*輔助用註解 table*/ dom) {
				// ini();
				return {
					_dom: dom,
					color: function() {
						this._dom
					},
					addRow: function(text) {},
					delRow: function(index) {}
				}
			}
			</script>

---

1. .

		what is "this"::
		A.B(this)
		// this === A; "點的左邊", this: readonly

2. .

		function() {}
		//=> new Function() everytime

3. phtotype 實作

		var MyTableClass = function(dom) {
			this._dom = dom;
		}
		// MyTableClass.phototype  // only 實字宣告函數有
		MyTableClass.phototype._dom = null;
		MyTableClass.phototype.color = function() {};
		...

		var talbe = new MyTableClass;
		//=> 有沒有 new 會影響到內部的 this, 不用 new 會使第二次 this 指向 window
		// 內部的 function 會是同等的 ; table2.color == table1.color //=> true
		// 可繼承 原 function 內的 method

4. ppototype 常見錯誤:

		MyTableClass.phototype = {
			_dom: dom,
			color: function() {}
		}

	少了 constructor //=> instance 繼承會 error

## 下半節::
### this 是尛

	var o = {
		color: function(){
			console.log(this);
			console.log(this == o);
		},
		test: function(/*fn*/callback) {
			console.log(this);
			callback(o);
		}
	}
	var myfn = o.color;
	myfn(); // this == window; a.b 形式
	myfn.apply(o, [function(param_o)])

+ apply: 多在架構面使用
+ call: 多數可使用 apply 來替代使用
+ myfn.call(o, arg1, arg2, arg3)

		o.test(function(){
			my_callback.apply(window,[o])
		})
		o.test(my_callback.bind(window));

### closure 閉包
	var 變數生命週期
	var 宣告 hosting

	#### memory leak:
	var dom = $('#dom');
	dom.click(...)

	!!! dom bind event: creat memory leak (!?

