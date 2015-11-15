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
