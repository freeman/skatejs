'use strict';

exports.__esModule = true;
exports.define = define;

var _util = require('./util');

function define(Ctor) {
  var is = Ctor.is;

  if (!_util.customElements.get(is)) {
    _util.customElements.define(is, Ctor);
  }
  return Ctor;
}