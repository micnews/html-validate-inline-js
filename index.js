'use strict';

var cheerio = require('cheerio');
var checkSyntaxError = require('syntax-error');

function validate (html) {
  var $ = cheerio.load(html);
  var scripts = $('script');

  return scripts.toArray().map(function (script) {
    return checkSyntaxError($(script).html());
  }).filter(Boolean)[0];
}

module.exports = validate;
