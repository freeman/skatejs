'use strict';

exports.__esModule = true;
exports.formatName = formatName;
exports.generateName = generateName;

var _ = require('.');

var suffix = 0;

function formatName(prefix, suffix) {
  prefix = prefix || 'element';
  return (prefix.indexOf('-') === -1 ? 'x-' + prefix : prefix) + (suffix ? '-' + suffix : '');
}

function generateName(Ctor) {
  var prefix = (0, _.dashCase)(Ctor.name);
  while (_.customElements.get(formatName(prefix, suffix))) {
    suffix++;
  }
  return formatName(prefix, suffix++);
}