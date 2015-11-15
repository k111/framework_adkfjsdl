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
