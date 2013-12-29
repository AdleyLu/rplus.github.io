$(function() {
/**
 * this jquery plug-in is based on "[jQuery] 自製 jQuery Plugin" by 大澤木小鐵(jaceju)
 * ref: http://www.jaceju.net/blog/archives/336/
 */

$.fn.loopIMG = function(settings) {
    var _defaultSettings = {
        hover2Change: true,
        imgTransSpeed: 200,     // (ms)
        dir: 1,                 // { +1: turn right, -1: turn left }
        numButton: true,        // 是否出現數字鈕
        dirButton: true,        // 是否出現方向鈕
        dirLeft: '<',           // 向左的符號
        dirRight: '>',          // 向右的符號
        click2Pause: true,      // 點圖停止
        stateIcon: true,        // 點擊開關自動輪播時是否出現暫停/開始的圖示
        autoRun: true,          // 是否自動輪播
        // 自訂class
        class_imgCtrlWrap:      'imgCtrl-wrap',
        class_imgCtrlDir:       'imgCtrl-dir',
        class_imgCtrlNumbers:   'imgCtrl-numbers',
        class_imgCtrlNum:       'imgCtrl-num',
        class_stateIcon:        'stateIcon',
        class_stateIconPlay:    'stateIcon-play',
        class_stateIconPause:   'stateIcon-pause'
    };
    var _settings = $.extend(_defaultSettings, settings);
    var _handler = function() {

        var $containerWrap = $(this),
            $imgs = $('img', $containerWrap),
            imgsNumber = $imgs.length;
            nowImg = 1,     // 圖片初始化
            intval = '',    // 輪播
            dir = _settings.dir;

        // 組模版
        var temp = {};
            temp.imgCtrl = [
                    '',
                    '<a class="' + _settings.class_imgCtrlNum + '" data-sort="$i">$i</a>',
                    ''
                ],
            temp.imgCtrlHtml = '';
            temp.imgCtrlNumberHtml = '';
            temp.i = 0;
            temp.stateIcon = _settings.stateIcon ? '<div class="' + _settings.class_stateIcon + '"><div class="' + _settings.class_stateIconPlay + '"></div><div class="' + _settings.class_stateIconPause + '"></div></div>' : '';

        // 對應相片數，產生數字按鈕
        if (_settings.numButton) {
            temp.imgCtrlNumberHtml = '<span class="' + _settings.class_imgCtrlNumbers + '">';
            for (; temp.i < imgsNumber; temp.i += 1 ) {
                temp.imgCtrlNumberHtml += temp.imgCtrl[1].replace( /\$i/g , temp.i + 1 );
            }
            temp.imgCtrlNumberHtml += '</span>';
        }

        // 生成方向鈕
        if (_settings.dirButton) {
            temp.imgCtrl[0] = '<a class="'+ _settings.class_imgCtrlDir +'" data-dir="-1">' + _settings.dirLeft + '</a>';
            temp.imgCtrl[2] = '<a class="'+ _settings.class_imgCtrlDir +'" data-dir="+1">' + _settings.dirRight + '</a>';
        }

        // 控制鈕合體
        temp.imgCtrlHtml += '<div class="' + _settings.class_imgCtrlWrap + '">'
            + temp.imgCtrl[0]
            + temp.imgCtrlNumberHtml
            + temp.imgCtrl[2] +'</div>' + temp.stateIcon;

        // 控制鈕合體插入各控制項元件
        $containerWrap.append(temp.imgCtrlHtml);

        var imgLoop = function(index) {
                // index: [1-#]
                if ( index !== nowImg ) {
                    $imgs.eq(nowImg - 1).fadeOut(_settings.imgTransSpeed).end()
                       .eq(index - 1).fadeIn(_settings.imgTransSpeed);
                    nowImg = index;
                }
            };

        // @dir: 輪播方向 +1: 向右; -1: 向左
        var startAutoRun = function() {
                if ( intval === '' ) {
                    intval = window.setInterval(function() {
                            imgLoop( ( nowImg + dir ) % imgsNumber );
                        }, 1000);
                }
            },
            stopAutoRun = function() {
                window.clearInterval(intval);
                intval = '';
            };

        var imgSwitcher = function() {
            var _thisDir = $(this).data('dir'),
                _thisSort = $(this).data('sort');
            if ( _thisDir ) {
                imgLoop( ( nowImg + dir ) % imgsNumber );
                dir = _thisDir;
            } else if( _thisSort ) {
                imgLoop( _thisSort );
            }
        };

        $('.' + _settings.class_imgCtrlWrap).find('a').on({
            'click': imgSwitcher ,
            'mouseenter': (_settings.hover2Change && imgSwitcher)
        });

        if (_settings.click2Pause) {
            var _icons     = $('.' + _settings.class_stateIcon),
                _iconPlay  = $('.' + _settings.class_stateIconPlay, _icons),
                _iconPause = $('.' + _settings.class_stateIconPause, _icons);

            // images clicl to stop/start loop
            $imgs.add(_icons).on('click', function() {
                if (intval === '') {
                    startAutoRun();
                    _iconPause.hide();
                    _iconPlay.show();
                    _icons.stop().css({'opacity':1, 'display': 'block'}).animate({'opacity':0},1500);
                } else {
                    stopAutoRun();
                    _iconPlay.hide();
                    _iconPause.show();
                    _icons.stop().css({'opacity':1, 'display': 'block'}).animate({'opacity':0},1500);
                }
            });

            // initialize
            $imgs.not(':first').add(_iconPlay, _iconPause).hide();
        }

        if (_settings.autoRun) {
            startAutoRun();
        }
    };
    return this.each(_handler);
};

});