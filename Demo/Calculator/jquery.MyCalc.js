;(function($) {
// protect~

$.fn.myCalc = function(settings) {

var _defaultSettings = {
    defaultOpen: false,         // 預設顯現與否,  [boolean]
    animeSpeed: 'normal',       // 開關動畫速度,  ['fast, 'normal', 'slow', \d{ms}']
    showAllways: false,         // 總是浮現,        [boolean]
    movable: false,             // 可動 需jQuery UI    [boolena]
    calcInstant : true,         // 即時運算
    style: 6,                   // 6:hexagonStyle | 0:pureStyle]
    wrongFormatMSG: '否定',     // 錯誤警告標題
    wrongFormatMSGsub: '公式錯誤<span>formaula is wrong</span>',    // 公式錯誤警示標語, span為小標[選用]

};
var _settings = $.extend(_defaultSettings, settings);
var _handler = function() {

    var $answerArea = $(this);

    var calcDivHTML = '<div id="calculatorDiv"><input id="formulaArea" type="text" value="" /><a id="closeCalcDiv">x</a>';

    // 樣式一 純色系， user可簡單用css修改、覆蓋
    var pureStyle = calcDivHTML + '<div class="pure"><div class="pure-row"><div class="m empty"></div><div class="m empty"></div><div class="m erase">C</div><div class="m backspace">←</div></div><div class="pure-row"><div class="m bracket">(</div><div class="m bracket">)</div><div class="m js-dL">&lt;</div><div class="m js-dR">&gt;</div></div><div class="pure-row"><div class="m digit">7</div><div class="m digit">8</div><div class="m digit">9</div><div class="m operator">+</div></div><div class="pure-row"><div class="m digit">4</div><div class="m digit">5</div><div class="m digit">6</div><div class="m operator">-</div></div><div class="pure-row"><div class="m digit">1</div><div class="m digit">2</div><div class="m digit">3</div><div class="m operator">*</div></div><div class="pure-row"><div class="m digit">0</div><div class="m digit">.</div><div class="m equal">=</div><div class="m operator">/</div></div></div>' + '</div>';

    // 樣式二 蜂巢式 
    var hexagonStyle = calcDivHTML + '<div class="beehive"><div class="hex-row"><div class="hex"><div class="l"></div><div class="m erase">X</div><div class="r"></div></div><div class="hex"><div class="l"></div><div class="m js-dL">&lt;</div><div class="r"></div></div><div class="hex"><div class="l"></div><div class="m empty"></div><div class="r"></div></div><div class="hex"><div class="l"></div><div class="m js-dR">&gt;</div><div class="r"></div></div><div class="hex"><div class="l"></div><div class="m backspace">←</div><div class="r"></div></div></div><div class="hex-row"><div class="hex"><div class="l"></div><div class="m bracket">(</div><div class="r"></div></div><div class="hex o-o"><div class="l"></div><div class="m operator">*</div><div class="r"></div></div><div class="hex o-o"><div class="l"></div><div class="m operator">+</div><div class="r"></div></div><div class="hex o-o"><div class="l"></div><div class="m operator">/</div><div class="r"></div></div><div class="hex"><div class="l"></div><div class="m bracket">)</div><div class="r"></div></div></div><div class="hex-row"><div class="hex"><div class="l"></div><div class="m empty"></div><div class="r"></div></div><div class="hex"><div class="l"></div><div class="m digit">6</div><div class="r"></div></div><div class="hex o-o"><div class="l"></div><div class="m operator">-</div><div class="r"></div></div><div class="hex"><div class="l"></div><div class="m digit">8</div><div class="r"></div></div><div class="hex"><div class="l"></div><div class="m empty"></div><div class="r"></div></div></div><div class="hex-row"><div class="hex"><div class="l"></div><div class="m digit">5</div><div class="r"></div></div><div class="hex"><div class="l"></div><div class="m digit">1</div><div class="r"></div></div><div class="hex"><div class="l"></div><div class="m digit">7</div><div class="r"></div></div><div class="hex"><div class="l"></div><div class="m digit">3</div><div class="r"></div></div><div class="hex"><div class="l"></div><div class="m digit">9</div><div class="r"></div></div></div><div class="hex-row"><div class="hex"><div class="l"></div><div class="m digit">0</div><div class="r"></div></div><div class="hex"><div class="l"></div><div class="m digit">.</div><div class="r"></div></div><div class="hex"><div class="l"></div><div class="m digit">2</div><div class="r"></div></div><div class="hex"><div class="l"></div><div class="m equal">=</div><div class="r"></div></div><div class="hex"><div class="l"></div><div class="m digit">4</div><div class="r"></div></div></div></div>' + '</div>';

    // 警告視窗 若為蜂巢式 增加class hexwarn
    var warnMSGBox = '<div class="warn'+ ((_settings.style == 6)?(' hexwarn'):('')) +'"><div class="t"><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b></div><div class="wrongFormatMSG">'+ _settings.wrongFormatMSG +'</div> <div class="wrongFormatMSGsub">'+ _settings.wrongFormatMSGsub +'</div><div class="b"><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b></div></div>';

    $answerArea.after( ( _settings.style == 0 )?( pureStyle ):( hexagonStyle) );

    var $formulaArea = $('#formulaArea');
    var $calculatorDiv = $('#calculatorDiv');

    $('#calculatorDiv:has(.beehive)').addClass('hexagonStyle');
    $calculatorDiv.append(warnMSGBox);

    $calculatorDiv.css({
        'left':$answerArea.offset().left, 'top':$answerArea.offset().top + $answerArea.height() + 2
    });

    if(!_settings.showAllways){
        if(!_settings.defaultOpen){
            $calculatorDiv.hide();
        }
        $('#closeCalcDiv').click(function(){
            $calculatorDiv.hide(_settings.animeSpeed);
            $answerArea.blur();
        });

        $answerArea.focus(function(){
            $calculatorDiv.show(_settings.animeSpeed);
        });
    }
    $('.hex:has(.empty)').addClass('empty');
    $('#closeCalcDiv').css('display',(_settings.showAllways)?'none':'inline-block');

    // make it draggable if movable is true
    (_settings.movable&&$.fn.draggable)?$calculatorDiv.draggable().prepend('<strong>drag to move</strong>').css('cursor','move'):'';

    //---- pos -----------------------------------------
    $.fn.setCursorPosition = function(pos) {
        // http://stackoverflow.com/questions/499126/jquery-set-cursor-position-in-text-area
        this.each(function(index, elem) {
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            }
            else if (elem.createTextRange) {
                var range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        });
        return this;
    };
    $.fn.getCursorPosition = function() {
        // http://stackoverflow.com/questions/2897155/get-caret-position-within-an-text-input-field
        var input = this.get(0);
        if (!input) return; // No (input) element found
        if ('selectionStart' in input) {
            // Standard-compliant browsers
            return input.selectionStart;
        } else if (document.selection) {
            // IE
            input.focus();
            var sel = document.selection.createRange();
            var selLen = document.selection.createRange().text.length;
            sel.moveStart('character', -input.value.length);
            return sel.text.length - selLen;
        }
    }
    //--------------------------------------------------

    $('div.m').click(function(){
        var $this    = $(this),
        character    = $this.html();
        var posNow   = $formulaArea.getCursorPosition();
        var formulaV = $formulaArea.val();
        var lenMax   = formulaV.length;
        var prevChar = formulaV.slice(posNow-1,posNow);
        var nextChar = formulaV.slice(posNow,posNow+1);
        var lastChar = formulaV.slice(-1);
             // console.log(lastChar+"---"+nextChar);

        // 運算符驗證 http://jsfiddle.net/B6SuW/5/
        // 頭不為乘除， 中間 運算符不重複 尾不為運算符
        // formula Value Validate Operator 運算符驗證
        var formulaV_VO = new RegExp(/^[^\d\+\-\.\(]|[\+\-\*\/]{2,}|\d\(|\)\d|[^\d\)]$/);
        // formula Value Validate Charater 字元驗證
        var formulaV_VC = new RegExp(/^[\d|\+|\-|\*|\/|\(|\)|\.]+$/);

        // 主要計算動作
        function doCalculate() {
            // 是否有非計算字元
            if( formulaV.match(formulaV_VC)  || lenMax == 0){
                // 運算符驗證通過
                if(!formulaV.match(formulaV_VO)){
                        // 修飾 formulaV 左右括號
                        var str = $formulaArea.val();
                        var numR = str.split(")").length-1;
                        var numL = str.split("(").length-1;
                        if(numL != numR ){
                            for(i=1;i<=Math.abs(numR-numL);i++){
                                str = ( (numR>numL)?('('):('') ) + str + ( (numR>numL)?(''):(')') );
                            }
                        }
                        str = str.replace((/\)(\d)/g),")*"+ '$1').replace(/(\d)\(/,'$1'+'*(').replace(/(\*|\/)\)/,'$1'+'1)').replace(/\((\*|\/)/,'(');
                        $formulaArea.val(str);

                    $('#answerArea').val(eval( str ));
                    $formulaArea.setCursorPosition(lenMax);
                }
                else{
                    // alert('請刪除錯位的運算符號!');
                    $('.wrongFormatMSGsub').html('運算符錯置<span>operator site is wrong</span>');
                    $('.warn').addClass('wrongFormat').dialog({closeText:'x',position:[250,30]});
                }
            }
            else{
                // alert('公式中有非計算機所使用字元!');
                $('.wrongFormatMSGsub').html('非法字元<span>illegal character</span>');
                $('.warn').addClass('wrongFormat').dialog({closeText:'x',position:[250,30]});
                // 提示後自動消掉非法字元
                $formulaArea.val( $formulaArea.val().replace((/[^0-9|\d|\+|\-|\*|\/|\(|\)|\.]/g), '') );
            }
        }

        // del: ←鈕
        if ($this.hasClass('backspace')) {
            // 由字串切段 前半段切至游標前一格 後段由游標至尾 兩段合併
            $formulaArea.val( formulaV.slice(0, (posNow-1<0)?(0):(posNow-1) ) + formulaV.slice(posNow)  );
            // 游標歸位
            $formulaArea.setCursorPosition(posNow-1);
            return false;
        }

        // erase: C鈕
        if($this.hasClass('erase')){
            // 清空公式框
            $formulaArea.val('');
            return false;
        }

        // direction - 左一步
        if ($this.hasClass('js-dL')) {
            $formulaArea.focus();
            $formulaArea.setCursorPosition( (posNow-1 >= 0)?(posNow-1):0 );
            return false;
        };

        // direction - 右一步
        if ($this.hasClass('js-dR')) {
            $formulaArea.focus();
            $formulaArea.setCursorPosition( (posNow+1 <= lenMax)?(posNow+1):lenMax  );
            return false;
        };

        // equal: =鈕
        if($this.hasClass('equal') ){
            // 驗証是否輸入非法字元 及 空資料
            doCalculate();
            return false;
        }

        // operator check
        // 若前一字元為 operator 則跳出
        // console.log( (/[\(\)\+\-\*\/]+/).test(formulaV.slice(posNow-1,posNow)) );
        if( $this.hasClass('operator') && (/[\+\-\*\/]+/).test(formulaV.slice(posNow-1,posNow)) ){
            return false;
        }

        // 括號防呆
        if($this.hasClass('bracket')) {
            // 左括號 加乘號
            // 若字串無右括號 則於字串尾補加
            if( $this.html() == '(' && (/[\(]{0}/).test(formulaV) ) {
                $formulaArea.val( formulaV.slice(0,posNow) + '(' + formulaV.slice(posNow) + ')' );
                $formulaArea.setCursorPosition(posNow+1);
                return false;
            }
            // 右括號
            // 若字串無左括號 則於字串首補加
            else if( $this.html() == ')' && (/[\)]{0}/).test(formulaV) ) {
                $formulaArea.val( '(' + formulaV.slice(0,posNow) + ')' + formulaV.slice(posNow) );
                $formulaArea.setCursorPosition(posNow+1);
                return false;
            }
        }

        // 按數字 括號防呆 加乘號
        if( $this.hasClass('digit') ){
            // 前一字元為右括號 先補加乘號再加數字
            if( (/[\)]/).test(formulaV.slice(posNow-1,posNow)) ){
                $formulaArea.val( formulaV.slice(0,posNow) + '*' + character + formulaV.slice(posNow) );
                return false;
            }
            // 後一字元為左括號 先加數字再補加乘號
            if( (/[\(]/).test(formulaV.slice(posNow,posNow+1)) ){
                $formulaArea.val( formulaV.slice(0,posNow)  + character + '*' + formulaV.slice(posNow) );
                return false;
            }
        }

        // 其餘按鈕觸發 公式框字串新增
        $formulaArea.val( formulaV.slice(0,posNow) + character + formulaV.slice(posNow) );
        $formulaArea.setCursorPosition(posNow+1);

        //  即時運算
        if ( $this.hasClass('digit') && _settings.calcInstant ) {
                // 修飾 formulaV 中的左右括號
                var str = $formulaArea.val();
                var numR = str.split(")").length-1;
                var numL = str.split("(").length-1;
                if(numL != numR ){
                    for(i=1;i<=Math.abs(numR-numL);i++){
                        str = ( (numR>numL)?('('):('') ) + str + ( (numR>numL)?(''):(')') );
                    }
                }
                str = str.replace((/\)(\d)/g),")*"+ '$1').replace(/(\d)\(/,'$1'+'*(').replace(/(\*|\/)\)/,'$1'+'1)').replace(/\((\*|\/)/,'(');
                $formulaArea.val(str);

            if( ( str.match(formulaV_VC)  && !str.match( formulaV_VO ) ) ){
                $formulaArea.removeClass('wrongFormat');

                $('#answerArea').val(eval( str ));
                // $formulaArea.val(str);
            }
            else{
                $('.wrongFormatMSGsub').html(_settings.wrongFormatMSGsub);
                $('.warn').addClass('wrongFormat').dialog({closeText:'x',position:[250,30]});
            }
        };
    });

}; // end _handler
return this.each(_handler);

}; // end myCalc
// protect~
})(jQuery);
