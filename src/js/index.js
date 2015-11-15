(function() {
    // namespace setting
    var MYAPP = MYAPP || {};

    // modulle
    MYAPP.module = MYAPP.module || {};
    MYAPP.module.Smoothscroll = require('./module/Smoothscroll');
    MYAPP.module.Device = require('./module/Device');
    MYAPP.module.Tab = require('./module/Tab');
    MYAPP.module.Accordion = require('./module/Accordion');
    MYAPP.module.Imagerollover = require('./module/Imagerollover');
    MYAPP.module.Device = require('./module/Device');

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
