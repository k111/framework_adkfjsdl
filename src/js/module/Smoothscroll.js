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
