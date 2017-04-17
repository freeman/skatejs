'use strict';

exports.__esModule = true;
exports.withRender = undefined;

var _util = require('./util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _shadowRoot = (0, _util.sym)();

var attachShadowOptions = { mode: 'open' };

function attachShadow(elem) {
  return elem.attachShadow ? elem.attachShadow(attachShadowOptions) : elem;
}

var withRender = exports.withRender = function withRender() {
  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _util.HTMLElement;
  return function (_Base) {
    _inherits(_class, _Base);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, _Base.apply(this, arguments));
    }

    _class.prototype.propsChangedCallback = function propsChangedCallback() {
      var _this2 = this;

      this[_shadowRoot] = this[_shadowRoot] || (this[_shadowRoot] = attachShadow(this));
      this.rendererCallback(this[_shadowRoot], function () {
        return _this2.renderCallback(_this2);
      });
      this.renderedCallback();
    };

    // Called to render the component.


    _class.prototype.renderCallback = function renderCallback() {};

    // Called after the component has rendered.


    _class.prototype.renderedCallback = function renderedCallback() {};

    return _class;
  }(Base);
};