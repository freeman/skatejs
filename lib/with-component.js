'use strict';

exports.__esModule = true;
exports.h = exports.Component = exports.withComponent = undefined;

var _preact = require('preact');

var _util = require('./util');

var _withProps = require('./with-props');

var _withRender = require('./with-render');

var _withUnique2 = require('./with-unique');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _preactDom = (0, _util.sym)('_preactDom');

var withComponent = exports.withComponent = function withComponent() {
  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _util.HTMLElement;
  return function (_withUnique) {
    _inherits(_class, _withUnique);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, _withUnique.apply(this, arguments));
    }

    _class.prototype.rendererCallback = function rendererCallback(shadowRoot, renderCallback) {
      this[_preactDom] = (0, _preact.render)(renderCallback(), shadowRoot, this[_preactDom]);
    };

    return _class;
  }((0, _withUnique2.withUnique)((0, _withRender.withRender)((0, _withProps.withProps)(Base))));
};

var Component = exports.Component = withComponent();
exports.h = _preact.h;