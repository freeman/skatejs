'use strict';

exports.__esModule = true;
exports.props = exports.withProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = require('./util');

var _withProps = require('./util/with-props');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Unfortunately the polyfills still seem to double up on lifecycle calls. In
// order to get around this, we need guards to prevent us from executing them
// more than once for a given state.
var _connected = (0, _util.sym)('_connected');
var _constructed = (0, _util.sym)('_constructed');

var _observedAttributes = (0, _util.sym)('_observedAttributes');
var _prevProps = (0, _util.sym)('_prevProps');
var _props = (0, _util.sym)('_props');
var _updateCallback = (0, _util.sym)('_updateCallback');
var _updating = (0, _util.sym)('_updating');

var withProps = exports.withProps = function withProps() {
  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _util.HTMLElement;
  return function (_Base) {
    _inherits(_class2, _Base);

    _createClass(_class2, [{
      key: 'props',
      get: function get() {
        var _this2 = this;

        return (0, _util.keys)(this.constructor.props).reduce(function (prev, curr) {
          prev[curr] = _this2[curr];
          return prev;
        }, {});
      },
      set: function set(props) {
        var _this3 = this;

        var ctorProps = this.constructor.props;
        (0, _util.keys)(props).forEach(function (k) {
          return k in ctorProps && (_this3[k] = props[k]);
        });
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        var props = (0, _withProps.normPropDefs)(this);
        return (0, _util.keys)(props).map(function (k) {
          return props[k].attribute;
        }).filter(Boolean).map(function (a) {
          return a.source;
        }).concat(this[_observedAttributes] || []);
      },
      set: function set(attrs) {
        this[_observedAttributes] = attrs;
      }
    }, {
      key: 'props',
      get: function get() {
        return this[_props];
      },
      set: function set(props) {
        this[_props] = props;
      }
    }]);

    function _class2() {
      _classCallCheck(this, _class2);

      var _this = _possibleConstructorReturn(this, _Base.call(this));

      _this[_updateCallback] = function () {
        if (_this[_updating] || !_this[_connected]) {
          return;
        }

        // Flag as rendering. This prevents anything from trying to render - or
        // queueing a render - while there is a pending render.
        _this[_updating] = true;

        // Prev / next props for prop lifecycle callbacks.
        var prev = _this[_prevProps];
        var next = _this[_prevProps] = _this.props;

        // Always call set, but only call changed if the props updated.
        _this.propsSetCallback(next, prev);
        if (_this.propsUpdatedCallback(next, prev)) {
          _this.propsChangedCallback(next, prev);
        }

        _this[_updating] = false;
      };

      if (_this[_constructed]) return _possibleConstructorReturn(_this);
      _this[_constructed] = true;
      var constructor = _this.constructor;

      (0, _withProps.defineProps)(constructor);
      _this[_withProps._updateDebounced] = (0, _util.debounce)(_this[_updateCallback]);
      return _this;
    }

    _class2.prototype.connectedCallback = function connectedCallback() {
      if (this[_connected]) return;
      this[_connected] = true;
      if (_Base.prototype.connectedCallback) _Base.prototype.connectedCallback.call(this);
      this[_withProps._updateDebounced]();
    };

    _class2.prototype.disconnectedCallback = function disconnectedCallback() {
      if (!this[_connected]) return;
      this[_connected] = false;
      if (_Base.prototype.disconnectedCallback) _Base.prototype.disconnectedCallback.call(this);
    };

    // Called when props actually change.


    _class2.prototype.propsChangedCallback = function propsChangedCallback() {};

    // Called whenever props are set, even if they don't change.


    _class2.prototype.propsSetCallback = function propsSetCallback() {};

    // Called to see if the props changed.


    _class2.prototype.propsUpdatedCallback = function propsUpdatedCallback(next, prev) {
      return !prev || (0, _util.keys)(prev).some(function (k) {
        return prev[k] !== next[k];
      });
    };

    _class2.prototype.attributeChangedCallback = function attributeChangedCallback(name, oldValue, newValue) {
      if (_Base.prototype.attributeChangedCallback) _Base.prototype.attributeChangedCallback.call(this, name, oldValue, newValue);
      (0, _withProps.syncAttributeToProperty)(this, name, newValue);
    };

    // Invokes the complete render lifecycle.


    return _class2;
  }(Base);
};

// Props

var parse = JSON.parse,
    stringify = JSON.stringify;

var attribute = (0, _util.freeze)({ source: true });
var createProp = function createProp(obj) {
  return (0, _util.freeze)(_extends({ attribute: attribute }, obj));
};
var nullOrType = function nullOrType(type) {
  return function (val) {
    return (0, _util.empty)(val) ? null : type(val);
  };
};
var zeroOrNumber = function zeroOrNumber(val) {
  return (0, _util.empty)(val) ? 0 : Number(val);
};

var array = createProp({
  coerce: function coerce(val) {
    return Array.isArray(val) ? val : (0, _util.empty)(val) ? null : [val];
  },
  default: (0, _util.freeze)([]),
  deserialize: parse,
  serialize: stringify
});

var boolean = createProp({
  coerce: Boolean,
  default: false,
  deserialize: function deserialize(val) {
    return !(0, _util.empty)(val);
  },
  serialize: function serialize(val) {
    return val ? '' : null;
  }
});

var number = createProp({
  default: 0,
  coerce: zeroOrNumber,
  deserialize: zeroOrNumber,
  serialize: nullOrType(Number)
});

var object = createProp({
  default: (0, _util.freeze)({}),
  deserialize: parse,
  serialize: stringify
});

var string = createProp({
  default: '',
  coerce: String,
  serialize: nullOrType(String)
});

var props = exports.props = {
  array: array,
  boolean: boolean,
  number: number,
  object: object,
  string: string
};