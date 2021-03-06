'use strict';

require('jquery');
var loadSheet = require('../lib/sheetloader');

window.blockFotoramaData = true;
require('fotorama');

exports.callback = function(element, option) {
  element.removeClass('hidden');

  if (!option.key)
    throw new Error('エラー：シートの key が指定されていません');

  element.css({height: 0, opacity: 0}).html('<div class="spinner"/>');

  var pad = (option.thumbheight || 64) + (option.thumbmargin || 2) * 2;
  var height = Math.ceil(element.width() * 9 / 16 + pad);

  element.animate({height: height, opacity: 1}, 200);

  loadSheet(option.key)
    .done(function(data) {
      data.forEach(function(item) {
        delete item.id;
        delete item.html;
      });

      option.data = data;

      element
        .on('fotorama:ready', function() {
          element.animate({height: element.children().height()}, 200, function() {
            element.css({height: ''});
          });
        })
        .fotorama(option);
    })
    .fail(function() {
      element
        .text('エラー：スプレッドシートを読み込めません')
        .addClass('error');
    });
};
