'use strict';

var util = require('../plugin-utils');
var $ = require('jquery');

util.registerPlugin({
  name: 'user-iframe',
  replace: true,
  defaults: {
    width: 500,
    height: 300
  },
  callback: function(element, option) {
    var iframe = $('<iframe/>')
      .addClass(element.attr('class'))
      .removeClass(this.name);

    $.each(option, $.proxy(iframe, 'attr'));

    return iframe;
  }
});
