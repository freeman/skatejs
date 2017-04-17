function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { h, render } from 'preact';

import { HTMLElement, sym } from './util';
import { withProps } from './with-props';
import { withRender } from './with-render';
import { withUnique } from './with-unique';

var _preactDom = sym('_preactDom');

export var withComponent = function withComponent() {
  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HTMLElement;
  return function (_withUnique) {
    _inherits(_class, _withUnique);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, _withUnique.apply(this, arguments));
    }

    _class.prototype.rendererCallback = function rendererCallback(shadowRoot, renderCallback) {
      this[_preactDom] = render(renderCallback(), shadowRoot, this[_preactDom]);
    };

    return _class;
  }(withUnique(withRender(withProps(Base))));
};

export var Component = withComponent();
export { h };