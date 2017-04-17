var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var defs = {
  bubbles: true,
  cancelable: true,
  composed: false
};

export function emit(elem, name, opts) {
  opts = _extends({}, defs, opts);
  var e = document.createEvent('CustomEvent');
  e.initCustomEvent(name, opts.bubbles, opts.cancelable, opts.detail);
  Object.defineProperty(e, 'composed', { value: opts.composed });
  return elem.dispatchEvent(e);
}