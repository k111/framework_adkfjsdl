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
