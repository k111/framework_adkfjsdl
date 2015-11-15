/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	    // namespace setting
	    var MYAPP = MYAPP || {};

	    // modulle
	    MYAPP.module = MYAPP.module || {};
	    MYAPP.module.Smoothscroll = __webpack_require__(1);
	    MYAPP.module.Device = __webpack_require__(2);
	    MYAPP.module.Tab = __webpack_require__(3);
	    MYAPP.module.Accordion = __webpack_require__(4);
	    MYAPP.module.Imagerollover = __webpack_require__(5);
	    MYAPP.module.Device = __webpack_require__(2);

	    // plugin
	    MYAPP.plugin = MYAPP.plugin || {};


	    $(function(){
	        // Smoothscroll
	        $('[data-js="scroll"]').each(function() {
	            MYAPP.smoothscroll = new MYAPP.module.Smoothscroll(this);
	        });

	        // Tab
	        $('[data-js="tab"]').each(function() {
	            MYAPP.tab = new MYAPP.module.Tab(this);
	        });

	        // Accordion
	        $('.mod-accordion').each(function() {
	            MYAPP.accordion = new MYAPP.module.Accordion(this);
	        });

	        //Imagerollover
	        $('.hover').each(function() {
	            MYAPP.imagerollover = new MYAPP.module.Imagerollover(this);
	        });



	        // Device
	        MYAPP.UA = new MYAPP.module.Device();
	        if(MYAPP.UA.isMobile) {
	            alert('この端末はスマートフォンです。');
	        }
	        // タブレットの場合に、viewportを上書き指定
	        if(MYAPP.UA.isTablet) {
	            $('#viewport').setAttribute('content', 'width=1024');
	        }



	        // SPナビゲーション
	        MYAPP.spMenu = MYAPP.spMenu || {};
	        MYAPP.spMenu.$trigger = $('.l-header .sp-menu');
	        MYAPP.spMenu.$target = $('.l-global-nav ');
	        MYAPP.spMenu.isClose = true;
	        $(window).on('enterBreakpoint1', function () {
	            MYAPP.spMenu.$trigger.on('click', function (e) {
	                if (MYAPP.spMenu.isClose) {
	                    MYAPP.spMenu.isClose = false;
	                    $(this).addClass('is-active');
	                    MYAPP.spMenu.$target.stop().show();
	                } else {
	                    MYAPP.spMenu.isClose = true;
	                    $(this).removeClass('is-active');
	                    MYAPP.spMenu.$target.stop().hide();
	                }
	                e.preventDefault();
	                return false;
	            });
	        });

	        // Breakpoint
	        $(window).setBreakpoints({
	            distinct: true,
	            breakpoints: [
	                1,
	                640
	            ]
	        });
	        /* for mobile */
	        $(window).on('enterBreakpoint1', function () {
	            MYAPP.spMenu.isClose = true;
	            //MYAPP.spMenu.$target.css('display','none').css('height','auto');
	            console.log("enterBreakpoint1-sp");
	        });
	        /* for pc */
	        $(window).on('enterBreakpoint640', function () {
	            MYAPP.spMenu.isClose = false;
	            console.log("enterBreakpoint640-pc");
	        });



	        /*******
	         * Plugins
	         */

	        // jquery matchHeight
	        // https://github.com/liabru/jquery-match-height
	        MYAPP.plugin.matchHeight = $('[data-js="match-height"]');
	        if( MYAPP.plugin.matchHeight.length > 0 ) {
	            MYAPP.plugin.matchHeight.matchHeight();
	        }

	        // slick
	        // http://kenwheeler.github.io/slick/
	        MYAPP.plugin.carousel = $('[data-js="carousel"] > ul');
	        if( MYAPP.plugin.carousel.length > 0 ) {
	            MYAPP.plugin.carousel.slick({
	                dots: true,
	                infinite: true,
	                autoplay: true,
	                speed: 500,
	                fade: false,
	                cssEase: 'linear'
	            });
	        }


	        // Magnific popup
	        //

	        // image
	        MYAPP.plugin.modalImage = $('[data-js="modal-image"]');
	        if( MYAPP.plugin.modalImage.length > 0 ) {
	            MYAPP.plugin.modalImage.magnificPopup({
	                type: 'image'
	            });
	        }
	        // video
	        MYAPP.plugin.modalVideo = $('[data-js="modal-video"]');
	        if( MYAPP.plugin.modalVideo.length > 0 ) {
	            MYAPP.plugin.modalVideo.magnificPopup({
	                disableOn: 700,
	                type: 'iframe',
	                mainClass: 'mfp-fade',
	                removalDelay: 160,
	                preloader: false,
	                fixedContentPos: false
	            });
	        }
	        // inline mordal
	        MYAPP.plugin.modalInline = $('[data-js="modal-inline"]');
	        if( MYAPP.plugin.modalInline.length > 0 ) {
	            MYAPP.plugin.modalInline.magnificPopup({
	                type: 'inline',
	                fixedContentPos: false,
	                fixedBgPos: true,
	                overflowY: 'auto',
	                closeBtnInside: true,
	                preloader: false,
	                midClick: true,
	                removalDelay: 300,
	                mainClass: 'my-mfp-zoom-in'
	            });
	        }

	        // Waypoints - Sticky Elements
	        // http://imakewebthings.com/waypoints/
	        /* for pc */
	        $(window).on('enterBreakpoint640', function () {
	            MYAPP.plugin.sticky = new Waypoint.Sticky({
	                element: $('.l-global-nav')[0],
	                stuckClass: 'stuck',
	                offset: -100
	            });
	        });
	        /* for mobile */
	        $(window).on('enterBreakpoint1', function () {
	            if(MYAPP.plugin.sticky) {
	                MYAPP.plugin.sticky.destroy();
	            }
	        });

	    });


	})();


/***/ },
/* 1 */
/***/ function(module, exports) {

	//var $ = require('../vendor/jquery.min');

	// SmoothScroll
	var Smoothscroll = function(el){
	    $element = $(el);
	    return this.scroll();
	};

	Smoothscroll.VERSION = 0.01;
	Smoothscroll.SPEED = 300;


	Smoothscroll.prototype.scroll = function(e) {
	    var $this = $(this);

	    $element.on('click', function(e){
	        var $target = $(this.hash);
	        var top;

	        if( $target.size() < 1 ) {
	            top = 0;
	        } else {
	            top = $target.offset().top;
	        }

	        e.preventDefault();

	        $('html,body').animate({
	            scrollTop: top
	        }, Smoothscroll.SPEED);
	    });
	};

	module.exports = Smoothscroll;


/***/ },
/* 2 */
/***/ function(module, exports) {

	
	// Device
	var Device = function(){
	    var u = window.navigator.userAgent.toLowerCase();
	    var v = window.navigator.appVersion.toLowerCase();
	    return {
	        isTablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1)
	        || u.indexOf("ipad") != -1
	        || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
	        || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
	        || u.indexOf("kindle") != -1
	        || u.indexOf("silk") != -1
	        || u.indexOf("playbook") != -1,
	        isMobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
	            || u.indexOf("iphone") != -1
	            || u.indexOf("ipod") != -1
	            || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
	            || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
	            || u.indexOf("blackberry") != -1,
	        isIE:(u.indexOf('msie') != -1),
	        isIE8:(v.indexOf("msie 8.") != -1)
	  };
	};


	//if(_ua.isMobile){
	//この中のコードはスマホにのみ適用
	//}else if(_ua.isTablet){
	//この中のコードはタブレットにのみ適用
	//}else{
	//この中のコードはスマホとタブレット以外に適用
	//}

	module.exports = Device;



/***/ },
/* 3 */
/***/ function(module, exports) {

	//var $ = require('../vendor/jquery.min');

	var Tab = function(el,option) {
	    this.$element = $(el);
	    option = $.extend({}, Tab.DEFAULT , option);
	    this.init(option);
	};

	Tab.DEFAULT = {
	    activeClass: 'is-active',
	    header:'[data-js="tab-header"] > li',
	    contents: '[data-js="tab-body"] > div'
	};

	Tab.prototype.init = function(option) {
	    var $trigger = this.$element.find(option.header);
	    var $target = this.$element.find(option.contents);
	    var activeClass = option.activeClass;

	    $trigger.on('click', function(e){
	        var index = $trigger.index(this);
	        e.preventDefault();
	        $(this).addClass(activeClass).siblings().removeClass(activeClass);
	        $target.eq(index).addClass(activeClass).siblings().removeClass(activeClass);
	    });
	};

	module.exports = Tab;


/***/ },
/* 4 */
/***/ function(module, exports) {

	//var $ = require('../vendor/jquery.min');

	var Accordion = function(el,option) {
	    this.$element = $(el);
	    option = $.extend({}, Accordion.DEFAULT, option);
	    this.init(option);
	};

	Accordion.DEFAULT = {
	    activeClass: 'is-show',
	    trigger: 'dt > a'
	};

	Accordion.prototype.init = function(option) {
	    var $self = this.$element;
	    var $trigger = $self.find(option.trigger);
	    $trigger.on('click',function(e){
	        e.preventDefault();
	        $(this).parent().next().stop().toggleClass(option.activeClass);
	    });
	};


	module.exports = Accordion;


/***/ },
/* 5 */
/***/ function(module, exports) {

	//var $ = require('../vendor/jquery.min');

	var Imagerollover = function(el,option) {
	    option = $.extend({}, Imagerollover.DEFAULT, option);
	    this.init(option);
	};

	Imagerollover.DEFAULT = {
	    hoverclass : ".hover",
	    suffix: '_o'
	};

	Imagerollover.prototype.init = function(option){
	    var check = new RegExp(option.suffix + '\\.\\w+$');
	    return $(option.hoverclass).each(function() {
	        var img = $(this);
	        var src_off = img.attr('src');
	        if (check.test(src_on)) return;
	        var src_on = src_off.replace(/\.\w+$/, option.suffix + '$&');
	        $('<img>').attr('src', src_on);
	        img.hover(
	            function() {
	                img.attr('src', src_on);
	            },
	            function() {
	                img.attr('src', src_off);
	            }
	        );
	    });
	};

	module.exports = Imagerollover;


/***/ }
/******/ ]);