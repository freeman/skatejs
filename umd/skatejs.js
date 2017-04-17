/*!
 * skatejs v5.0.0-alpha.0
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export root */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return customElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HTMLElement; });
/* harmony export (immutable) */ __webpack_exports__["c"] = dashCase;
/* harmony export (immutable) */ __webpack_exports__["f"] = debounce;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return freeze; });
/* harmony export (immutable) */ __webpack_exports__["e"] = keys;
/* harmony export (immutable) */ __webpack_exports__["a"] = sym;
/* unused harmony export uniqueId */
var root = typeof window === 'undefined' ? global : window;

var customElements = root.customElements,
    _root$HTMLElement = root.HTMLElement,
    HTMLElement = _root$HTMLElement === undefined ? null : _root$HTMLElement,
    Object = root.Object,
    MutationObserver = root.MutationObserver;
var getOwnPropertyNames = Object.getOwnPropertyNames,
    getOwnPropertySymbols = Object.getOwnPropertySymbols;




function dashCase(str) {
  return str.split(/([_A-Z])/).reduce(function (one, two, idx) {
    var dash = !one || idx % 2 === 0 ? '' : '-';
    two = two === '_' ? '' : two;
    return '' + one + dash + two.toLowerCase();
  });
}

function debounce(cbFunc) {
  var scheduled = false;
  var i = 0;
  var cbArgs = [];
  var elem = document.createElement('span');
  var observer = new MutationObserver(function () {
    cbFunc.apply(undefined, cbArgs);
    scheduled = false;
    cbArgs = null;
  });

  observer.observe(elem, { childList: true });

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    cbArgs = args;
    if (!scheduled) {
      scheduled = true;
      elem.textContent = '' + i;
      i += 1;
    }
  };
}

var empty = function empty(val) {
  return val == null;
};
var freeze = Object.freeze;



function keys() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var names = getOwnPropertyNames(obj);
  return getOwnPropertySymbols ? names.concat(getOwnPropertySymbols(obj)) : names;
}

function sym(description) {
  return typeof Symbol === 'function' ? Symbol(description ? String(description) : undefined) : uniqueId(description);
}

function uniqueId(description) {
  return (description ? String(description) : '') + 'xxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(12)))

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_with_props__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return props; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




// Unfortunately the polyfills still seem to double up on lifecycle calls. In
// order to get around this, we need guards to prevent us from executing them
// more than once for a given state.
var _connected = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* sym */])('_connected');
var _constructed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* sym */])('_constructed');

var _observedAttributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* sym */])('_observedAttributes');
var _prevProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* sym */])('_prevProps');
var _props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* sym */])('_props');
var _updateCallback = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* sym */])('_updateCallback');
var _updating = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* sym */])('_updating');

var withProps = function withProps() {
  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__util__["b" /* HTMLElement */];
  return function (_Base) {
    _inherits(_class2, _Base);

    _createClass(_class2, [{
      key: 'props',
      get: function get() {
        var _this2 = this;

        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* keys */])(this.constructor.props).reduce(function (prev, curr) {
          prev[curr] = _this2[curr];
          return prev;
        }, {});
      },
      set: function set(props) {
        var _this3 = this;

        var ctorProps = this.constructor.props;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* keys */])(props).forEach(function (k) {
          return k in ctorProps && (_this3[k] = props[k]);
        });
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        var props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_with_props__["a" /* normPropDefs */])(this);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* keys */])(props).map(function (k) {
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

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_with_props__["b" /* defineProps */])(constructor);
      _this[__WEBPACK_IMPORTED_MODULE_1__util_with_props__["c" /* _updateDebounced */]] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["f" /* debounce */])(_this[_updateCallback]);
      return _this;
    }

    _class2.prototype.connectedCallback = function connectedCallback() {
      if (this[_connected]) return;
      this[_connected] = true;
      if (_Base.prototype.connectedCallback) _Base.prototype.connectedCallback.call(this);
      this[__WEBPACK_IMPORTED_MODULE_1__util_with_props__["c" /* _updateDebounced */]]();
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
      return !prev || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* keys */])(prev).some(function (k) {
        return prev[k] !== next[k];
      });
    };

    _class2.prototype.attributeChangedCallback = function attributeChangedCallback(name, oldValue, newValue) {
      if (_Base.prototype.attributeChangedCallback) _Base.prototype.attributeChangedCallback.call(this, name, oldValue, newValue);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_with_props__["d" /* syncAttributeToProperty */])(this, name, newValue);
    };

    // Invokes the complete render lifecycle.


    return _class2;
  }(Base);
};

// Props

var parse = JSON.parse,
    stringify = JSON.stringify;

var attribute = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* freeze */])({ source: true });
var createProp = function createProp(obj) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* freeze */])(_extends({ attribute: attribute }, obj));
};
var nullOrType = function nullOrType(type) {
  return function (val) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* empty */])(val) ? null : type(val);
  };
};
var zeroOrNumber = function zeroOrNumber(val) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* empty */])(val) ? 0 : Number(val);
};

var array = createProp({
  coerce: function coerce(val) {
    return Array.isArray(val) ? val : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* empty */])(val) ? null : [val];
  },
  default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* freeze */])([]),
  deserialize: parse,
  serialize: stringify
});

var boolean = createProp({
  coerce: Boolean,
  default: false,
  deserialize: function deserialize(val) {
    return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* empty */])(val);
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
  default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["g" /* freeze */])({}),
  deserialize: parse,
  serialize: stringify
});

var string = createProp({
  default: '',
  coerce: String,
  serialize: nullOrType(String)
});

var props = {
  array: array,
  boolean: boolean,
  number: number,
  object: object,
  string: string
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withRender; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var _shadowRoot = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* sym */])();

var attachShadowOptions = { mode: 'open' };

function attachShadow(elem) {
  return elem.attachShadow ? elem.attachShadow(attachShadowOptions) : elem;
}

var withRender = function withRender() {
  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__util__["b" /* HTMLElement */];
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

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_with_unique__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withUnique; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var _is = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* sym */])('_is');

var withUnique = function withUnique() {
  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__util__["b" /* HTMLElement */];
  return function (_Base) {
    _inherits(_class, _Base);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, _Base.apply(this, arguments));
    }

    _createClass(_class, null, [{
      key: 'is',
      get: function get() {
        return this[_is] || (this[_is] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_with_unique__["a" /* generateName */])(this));
      },
      set: function set(is) {
        this[_is] = is;
      }
    }]);

    return _class;
  }(Base);
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "define", function() { return __WEBPACK_IMPORTED_MODULE_0__define__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emit__ = __webpack_require__(6);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "emit", function() { return __WEBPACK_IMPORTED_MODULE_1__emit__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__link__ = __webpack_require__(7);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "link", function() { return __WEBPACK_IMPORTED_MODULE_2__link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__with_component__ = __webpack_require__(10);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "withComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__with_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return __WEBPACK_IMPORTED_MODULE_3__with_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__with_component__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__with_props__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "withProps", function() { return __WEBPACK_IMPORTED_MODULE_4__with_props__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_4__with_props__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__with_render__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "withRender", function() { return __WEBPACK_IMPORTED_MODULE_5__with_render__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__with_unique__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "withUnique", function() { return __WEBPACK_IMPORTED_MODULE_6__with_unique__["a"]; });








/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = define;


function define(Ctor) {
  var is = Ctor.is;

  if (!__WEBPACK_IMPORTED_MODULE_0__util__["d" /* customElements */].get(is)) {
    __WEBPACK_IMPORTED_MODULE_0__util__["d" /* customElements */].define(is, Ctor);
  }
  return Ctor;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = emit;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var defs = {
  bubbles: true,
  cancelable: true,
  composed: false
};

function emit(elem, name, opts) {
  opts = _extends({}, defs, opts);
  var e = document.createEvent('CustomEvent');
  e.initCustomEvent(name, opts.bubbles, opts.cancelable, opts.detail);
  Object.defineProperty(e, 'composed', { value: opts.composed });
  return elem.dispatchEvent(e);
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = link;
function getValue(elem) {
  var checked = elem.checked,
      type = elem.type,
      value = elem.value;

  if (type === 'checkbox' || type === 'radio') {
    return checked ? value || true : false;
  }
  return value;
}

function link(elem, target) {
  return function (e) {
    // We fallback to checking the composed path. Unfortunately this behaviour
    // is difficult to impossible to reproduce as it seems to be a possible
    // quirk in the shadydom polyfill that incorrectly returns null for the
    // target but has the target as the first point in the path.
    // TODO revisit once all browsers have native support.
    var localTarget = e.target || e.composedPath()[0];
    var value = getValue(localTarget);
    var localTargetName = target || localTarget.name || 'value';

    if (localTargetName.indexOf('.') > -1) {
      var parts = localTargetName.split('.');
      var firstPart = parts[0];
      var propName = parts.pop();
      var obj = parts.reduce(function (prev, curr) {
        return prev && prev[curr];
      }, elem);

      obj[propName || e.target.name] = value;
      elem[firstPart] = elem[firstPart];
    } else {
      elem[localTargetName] = value;
    }
  };
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _updateDebounced; });
/* harmony export (immutable) */ __webpack_exports__["b"] = defineProps;
/* unused harmony export normAttribute */
/* unused harmony export normPropDef */
/* harmony export (immutable) */ __webpack_exports__["a"] = normPropDefs;
/* harmony export (immutable) */ __webpack_exports__["d"] = syncAttributeToProperty;
/* unused harmony export syncPropertyToAttribute */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var _definedProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0____["a" /* sym */])('_definedProps');
var _normPropDef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0____["a" /* sym */])('_normPropDef');
var _syncingAttributeToProperty = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0____["a" /* sym */])('_syncingAttributeToProperty');
var _syncingPropertyToAttribute = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0____["a" /* sym */])('_syncingPropertyToAttribute');

var _updateDebounced = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0____["a" /* sym */])('_updateDebounced');

function defineProps(Ctor) {
  if (Ctor[_definedProps]) {
    return;
  }
  Ctor[_definedProps] = true;

  var prototype = Ctor.prototype;

  var props = normPropDefs(Ctor);

  Object.defineProperties(prototype, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0____["e" /* keys */])(props).reduce(function (prev, curr) {
    var _props$curr = props[curr],
        target = _props$curr.attribute.target,
        coerce = _props$curr.coerce,
        def = _props$curr.default,
        serialize = _props$curr.serialize;

    var _value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0____["a" /* sym */])(curr);
    prev[curr] = {
      configurable: true,
      get: function get() {
        var val = this[_value];
        return val == null ? def : val;
      },
      set: function set(val) {
        this[_value] = coerce(val);
        syncPropertyToAttribute(this, target, serialize, val);
        this[_updateDebounced]();
      }
    };
    return prev;
  }, {}));
}

function normAttribute(name, prop) {
  var attribute = prop.attribute;

  var obj = (typeof attribute === 'undefined' ? 'undefined' : _typeof(attribute)) === 'object' ? _extends({}, attribute) : {
    source: attribute,
    target: attribute
  };
  if (obj.source === true) {
    obj.source = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0____["c" /* dashCase */])(name);
  }
  if (obj.target === true) {
    obj.target = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0____["c" /* dashCase */])(name);
  }
  return obj;
}

function normPropDef(name, prop) {
  var coerce = prop.coerce,
      def = prop.default,
      deserialize = prop.deserialize,
      serialize = prop.serialize;

  return {
    attribute: normAttribute(name, prop),
    coerce: coerce || function (v) {
      return v;
    },
    default: def,
    deserialize: deserialize || function (v) {
      return v;
    },
    serialize: serialize || function (v) {
      return v;
    }
  };
}

function normPropDefs(Ctor) {
  return Ctor[_normPropDef] || (Ctor[_normPropDef] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0____["e" /* keys */])(Ctor.props).reduce(function (prev, curr) {
    prev[curr] = normPropDef(curr, Ctor.props[curr] || {});
    return prev;
  }, {}));
}

function syncAttributeToProperty(elem, name, value) {
  if (elem[_syncingPropertyToAttribute]) {
    return;
  }
  var propDefs = normPropDefs(elem.constructor);
  for (var propName in propDefs) {
    var _propDefs$propName = propDefs[propName],
        source = _propDefs$propName.attribute.source,
        deserialize = _propDefs$propName.deserialize;

    if (source === name) {
      elem[_syncingAttributeToProperty] = propName;
      elem[propName] = value == null ? value : deserialize(value);
      elem[_syncingAttributeToProperty] = null;
    }
  }
}

function syncPropertyToAttribute(elem, target, serialize, val) {
  if (target && elem[_syncingAttributeToProperty] !== target) {
    var serialized = serialize(val);
    elem[_syncingPropertyToAttribute] = true;
    if (serialized == null) {
      elem.removeAttribute(target);
    } else {
      elem.setAttribute(target, serialized);
    }
    elem[_syncingPropertyToAttribute] = false;
  }
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(0);
/* unused harmony export formatName */
/* harmony export (immutable) */ __webpack_exports__["a"] = generateName;


var suffix = 0;

function formatName(prefix, suffix) {
  prefix = prefix || 'element';
  return (prefix.indexOf('-') === -1 ? 'x-' + prefix : prefix) + (suffix ? '-' + suffix : '');
}

function generateName(Ctor) {
  var prefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0____["c" /* dashCase */])(Ctor.name);
  while (__WEBPACK_IMPORTED_MODULE_0____["d" /* customElements */].get(formatName(prefix, suffix))) {
    suffix++;
  }
  return formatName(prefix, suffix++);
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__with_props__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__with_render__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__with_unique__ = __webpack_require__(3);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_preact__, "h")) __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0_preact__["h"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Component; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _preactDom = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* sym */])('_preactDom');

var withComponent = function withComponent() {
  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_1__util__["b" /* HTMLElement */];
  return function (_withUnique) {
    _inherits(_class, _withUnique);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, _withUnique.apply(this, arguments));
    }

    _class.prototype.rendererCallback = function rendererCallback(shadowRoot, renderCallback) {
      this[_preactDom] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["render"])(renderCallback(), shadowRoot, this[_preactDom]);
    };

    return _class;
  }(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__with_unique__["a" /* withUnique */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__with_render__["a" /* withRender */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__with_props__["a" /* withProps */])(Base))));
};

var Component = withComponent();


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

!function(global, factory) {
     true ? factory(exports) : 'function' == typeof define && define.amd ? define([ 'exports' ], factory) : factory(global.preact = global.preact || {});
}(this, function(exports) {
    function VNode(nodeName, attributes, children) {
        this.nodeName = nodeName;
        this.attributes = attributes;
        this.children = children;
        this.key = attributes && attributes.key;
    }
    function h(nodeName, attributes) {
        var children, lastSimple, child, simple, i;
        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
        if (attributes && attributes.children) {
            if (!stack.length) stack.push(attributes.children);
            delete attributes.children;
        }
        while (stack.length) if ((child = stack.pop()) instanceof Array) for (i = child.length; i--; ) stack.push(child[i]); else if (null != child && child !== !0 && child !== !1) {
            if ('number' == typeof child) child = String(child);
            simple = 'string' == typeof child;
            if (simple && lastSimple) children[children.length - 1] += child; else {
                (children || (children = [])).push(child);
                lastSimple = simple;
            }
        }
        var p = new VNode(nodeName, attributes || void 0, children || EMPTY_CHILDREN);
        if (options.vnode) options.vnode(p);
        return p;
    }
    function extend(obj, props) {
        if (props) for (var i in props) obj[i] = props[i];
        return obj;
    }
    function clone(obj) {
        return extend({}, obj);
    }
    function delve(obj, key) {
        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) obj = obj[p[i]];
        return obj;
    }
    function isFunction(obj) {
        return 'function' == typeof obj;
    }
    function isString(obj) {
        return 'string' == typeof obj;
    }
    function hashToClassName(c) {
        var str = '';
        for (var prop in c) if (c[prop]) {
            if (str) str += ' ';
            str += prop;
        }
        return str;
    }
    function cloneElement(vnode, props) {
        return h(vnode.nodeName, extend(clone(vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
    }
    function createLinkedState(component, key, eventPath) {
        var path = key.split('.');
        return function(e) {
            var t = e && e.target || this, state = {}, obj = state, v = isString(eventPath) ? delve(e, eventPath) : t.nodeName ? t.type.match(/^che|rad/) ? t.checked : t.value : e, i = 0;
            for (;i < path.length - 1; i++) obj = obj[path[i]] || (obj[path[i]] = !i && component.state[path[i]] || {});
            obj[path[i]] = v;
            component.setState(state);
        };
    }
    function enqueueRender(component) {
        if (!component._dirty && (component._dirty = !0) && 1 == items.push(component)) (options.debounceRendering || defer)(rerender);
    }
    function rerender() {
        var p, list = items;
        items = [];
        while (p = list.pop()) if (p._dirty) renderComponent(p);
    }
    function isFunctionalComponent(vnode) {
        var nodeName = vnode && vnode.nodeName;
        return nodeName && isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
    }
    function buildFunctionalComponent(vnode, context) {
        return vnode.nodeName(getNodeProps(vnode), context || EMPTY);
    }
    function isSameNodeType(node, vnode) {
        if (isString(vnode)) return node instanceof Text;
        if (isString(vnode.nodeName)) return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
        if (isFunction(vnode.nodeName)) return (node._componentConstructor ? node._componentConstructor === vnode.nodeName : !0) || isFunctionalComponent(vnode); else ;
    }
    function isNamedNode(node, nodeName) {
        return node.normalizedNodeName === nodeName || toLowerCase(node.nodeName) === toLowerCase(nodeName);
    }
    function getNodeProps(vnode) {
        var props = clone(vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
        return props;
    }
    function removeNode(node) {
        var p = node.parentNode;
        if (p) p.removeChild(node);
    }
    function setAccessor(node, name, old, value, isSvg) {
        if ('className' === name) name = 'class';
        if ('class' === name && value && 'object' == typeof value) value = hashToClassName(value);
        if ('key' === name) ; else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
            if (!value || isString(value) || isString(old)) node.style.cssText = value || '';
            if (value && 'object' == typeof value) {
                if (!isString(old)) for (var i in old) if (!(i in value)) node.style[i] = '';
                for (var i in value) node.style[i] = 'number' == typeof value[i] && !NON_DIMENSION_PROPS[i] ? value[i] + 'px' : value[i];
            }
        } else if ('dangerouslySetInnerHTML' === name) {
            if (value) node.innerHTML = value.__html || '';
        } else if ('o' == name[0] && 'n' == name[1]) {
            var l = node._listeners || (node._listeners = {});
            name = toLowerCase(name.substring(2));
            if (value) {
                if (!l[name]) node.addEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
            } else if (l[name]) node.removeEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
            l[name] = value;
        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
            setProperty(node, name, null == value ? '' : value);
            if (null == value || value === !1) node.removeAttribute(name);
        } else {
            var ns = isSvg && name.match(/^xlink\:?(.+)/);
            if (null == value || value === !1) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1])); else node.removeAttribute(name); else if ('object' != typeof value && !isFunction(value)) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1]), value); else node.setAttribute(name, value);
        }
    }
    function setProperty(node, name, value) {
        try {
            node[name] = value;
        } catch (e) {}
    }
    function eventProxy(e) {
        return this._listeners[e.type](options.event && options.event(e) || e);
    }
    function collectNode(node) {
        removeNode(node);
        if (node instanceof Element) {
            node._component = node._componentConstructor = null;
            var _name = node.normalizedNodeName || toLowerCase(node.nodeName);
            (nodes[_name] || (nodes[_name] = [])).push(node);
        }
    }
    function createNode(nodeName, isSvg) {
        var name = toLowerCase(nodeName), node = nodes[name] && nodes[name].pop() || (isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName));
        node.normalizedNodeName = name;
        return node;
    }
    function flushMounts() {
        var c;
        while (c = mounts.pop()) {
            if (options.afterMount) options.afterMount(c);
            if (c.componentDidMount) c.componentDidMount();
        }
    }
    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
        if (!diffLevel++) {
            isSvgMode = parent && 'undefined' != typeof parent.ownerSVGElement;
            hydrating = dom && !(ATTR_KEY in dom);
        }
        var ret = idiff(dom, vnode, context, mountAll);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (!--diffLevel) {
            hydrating = !1;
            if (!componentRoot) flushMounts();
        }
        return ret;
    }
    function idiff(dom, vnode, context, mountAll) {
        var ref = vnode && vnode.attributes && vnode.attributes.ref;
        while (isFunctionalComponent(vnode)) vnode = buildFunctionalComponent(vnode, context);
        if (null == vnode) vnode = '';
        if (isString(vnode)) {
            if (dom && dom instanceof Text && dom.parentNode) {
                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
            } else {
                if (dom) recollectNodeTree(dom);
                dom = document.createTextNode(vnode);
            }
            return dom;
        }
        if (isFunction(vnode.nodeName)) return buildComponentFromVNode(dom, vnode, context, mountAll);
        var out = dom, nodeName = String(vnode.nodeName), prevSvgMode = isSvgMode, vchildren = vnode.children;
        isSvgMode = 'svg' === nodeName ? !0 : 'foreignObject' === nodeName ? !1 : isSvgMode;
        if (!dom) out = createNode(nodeName, isSvgMode); else if (!isNamedNode(dom, nodeName)) {
            out = createNode(nodeName, isSvgMode);
            while (dom.firstChild) out.appendChild(dom.firstChild);
            if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
            recollectNodeTree(dom);
        }
        var fc = out.firstChild, props = out[ATTR_KEY];
        if (!props) {
            out[ATTR_KEY] = props = {};
            for (var a = out.attributes, i = a.length; i--; ) props[a[i].name] = a[i].value;
        }
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && fc && fc instanceof Text && !fc.nextSibling) {
            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || fc) innerDiffNode(out, vchildren, context, mountAll, !!props.dangerouslySetInnerHTML);
        diffAttributes(out, vnode.attributes, props);
        if (ref) (props.ref = ref)(out);
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, context, mountAll, absorb) {
        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren && vchildren.length;
        if (len) for (var i = 0; i < len; i++) {
            var _child = originalChildren[i], props = _child[ATTR_KEY], key = vlen ? (c = _child._component) ? c.__key : props ? props.key : null : null;
            if (null != key) {
                keyedLen++;
                keyed[key] = _child;
            } else if (hydrating || absorb || props || _child instanceof Text) children[childrenLen++] = _child;
        }
        if (vlen) for (var i = 0; i < vlen; i++) {
            vchild = vchildren[i];
            child = null;
            var key = vchild.key;
            if (null != key) {
                if (keyedLen && key in keyed) {
                    child = keyed[key];
                    keyed[key] = void 0;
                    keyedLen--;
                }
            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) {
                c = children[j];
                if (c && isSameNodeType(c, vchild)) {
                    child = c;
                    children[j] = void 0;
                    if (j === childrenLen - 1) childrenLen--;
                    if (j === min) min++;
                    break;
                }
            }
            child = idiff(child, vchild, context, mountAll);
            if (child && child !== dom) if (i >= len) dom.appendChild(child); else if (child !== originalChildren[i]) {
                if (child === originalChildren[i + 1]) removeNode(originalChildren[i]);
                dom.insertBefore(child, originalChildren[i] || null);
            }
        }
        if (keyedLen) for (var i in keyed) if (keyed[i]) recollectNodeTree(keyed[i]);
        while (min <= childrenLen) {
            child = children[childrenLen--];
            if (child) recollectNodeTree(child);
        }
    }
    function recollectNodeTree(node, unmountOnly) {
        var component = node._component;
        if (component) unmountComponent(component, !unmountOnly); else {
            if (node[ATTR_KEY] && node[ATTR_KEY].ref) node[ATTR_KEY].ref(null);
            if (!unmountOnly) collectNode(node);
            var c;
            while (c = node.lastChild) recollectNodeTree(c, unmountOnly);
        }
    }
    function diffAttributes(dom, attrs, old) {
        var name;
        for (name in old) if (!(attrs && name in attrs) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
        if (attrs) for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
    }
    function collectComponent(component) {
        var name = component.constructor.name, list = components[name];
        if (list) list.push(component); else components[name] = [ component ];
    }
    function createComponent(Ctor, props, context) {
        var inst = new Ctor(props, context), list = components[Ctor.name];
        Component.call(inst, props, context);
        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
            inst.nextBase = list[i].nextBase;
            list.splice(i, 1);
            break;
        }
        return inst;
    }
    function setComponentProps(component, props, opts, context, mountAll) {
        if (!component._disable) {
            component._disable = !0;
            if (component.__ref = props.ref) delete props.ref;
            if (component.__key = props.key) delete props.key;
            if (!component.base || mountAll) {
                if (component.componentWillMount) component.componentWillMount();
            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
            if (context && context !== component.context) {
                if (!component.prevContext) component.prevContext = component.context;
                component.context = context;
            }
            if (!component.prevProps) component.prevProps = component.props;
            component.props = props;
            component._disable = !1;
            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
            if (component.__ref) component.__ref(component);
        }
    }
    function renderComponent(component, opts, mountAll, isChild) {
        if (!component._disable) {
            var skip, rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.prevProps || props, previousState = component.prevState || state, previousContext = component.prevContext || context, isUpdate = component.base, nextBase = component.nextBase, initialBase = isUpdate || nextBase, initialChildComponent = component._component;
            if (isUpdate) {
                component.props = previousProps;
                component.state = previousState;
                component.context = previousContext;
                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
                component.props = props;
                component.state = state;
                component.context = context;
            }
            component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
            component._dirty = !1;
            if (!skip) {
                if (component.render) rendered = component.render(props, state, context);
                if (component.getChildContext) context = extend(clone(context), component.getChildContext());
                while (isFunctionalComponent(rendered)) rendered = buildFunctionalComponent(rendered, context);
                var toUnmount, base, childComponent = rendered && rendered.nodeName;
                if (isFunction(childComponent)) {
                    var childProps = getNodeProps(rendered);
                    inst = initialChildComponent;
                    if (inst && inst.constructor === childComponent && childProps.key == inst.__key) setComponentProps(inst, childProps, 1, context); else {
                        toUnmount = inst;
                        inst = createComponent(childComponent, childProps, context);
                        inst.nextBase = inst.nextBase || nextBase;
                        inst._parentComponent = component;
                        component._component = inst;
                        setComponentProps(inst, childProps, 0, context);
                        renderComponent(inst, 1, mountAll, !0);
                    }
                    base = inst.base;
                } else {
                    cbase = initialBase;
                    toUnmount = initialChildComponent;
                    if (toUnmount) cbase = component._component = null;
                    if (initialBase || 1 === opts) {
                        if (cbase) cbase._component = null;
                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
                    }
                }
                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
                    var baseParent = initialBase.parentNode;
                    if (baseParent && base !== baseParent) {
                        baseParent.replaceChild(base, initialBase);
                        if (!toUnmount) {
                            initialBase._component = null;
                            recollectNodeTree(initialBase);
                        }
                    }
                }
                if (toUnmount) unmountComponent(toUnmount, base !== initialBase);
                component.base = base;
                if (base && !isChild) {
                    var componentRef = component, t = component;
                    while (t = t._parentComponent) (componentRef = t).base = base;
                    base._component = componentRef;
                    base._componentConstructor = componentRef.constructor;
                }
            }
            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
                if (options.afterUpdate) options.afterUpdate(component);
            }
            var fn, cb = component._renderCallbacks;
            if (cb) while (fn = cb.pop()) fn.call(component);
            if (!diffLevel && !isChild) flushMounts();
        }
    }
    function buildComponentFromVNode(dom, vnode, context, mountAll) {
        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
        while (c && !isOwner && (c = c._parentComponent)) isOwner = c.constructor === vnode.nodeName;
        if (c && isOwner && (!mountAll || c._component)) {
            setComponentProps(c, props, 3, context, mountAll);
            dom = c.base;
        } else {
            if (originalComponent && !isDirectOwner) {
                unmountComponent(originalComponent, !0);
                dom = oldDom = null;
            }
            c = createComponent(vnode.nodeName, props, context);
            if (dom && !c.nextBase) {
                c.nextBase = dom;
                oldDom = null;
            }
            setComponentProps(c, props, 1, context, mountAll);
            dom = c.base;
            if (oldDom && dom !== oldDom) {
                oldDom._component = null;
                recollectNodeTree(oldDom);
            }
        }
        return dom;
    }
    function unmountComponent(component, remove) {
        if (options.beforeUnmount) options.beforeUnmount(component);
        var base = component.base;
        component._disable = !0;
        if (component.componentWillUnmount) component.componentWillUnmount();
        component.base = null;
        var inner = component._component;
        if (inner) unmountComponent(inner, remove); else if (base) {
            if (base[ATTR_KEY] && base[ATTR_KEY].ref) base[ATTR_KEY].ref(null);
            component.nextBase = base;
            if (remove) {
                removeNode(base);
                collectComponent(component);
            }
            var c;
            while (c = base.lastChild) recollectNodeTree(c, !remove);
        }
        if (component.__ref) component.__ref(null);
        if (component.componentDidUnmount) component.componentDidUnmount();
    }
    function Component(props, context) {
        this._dirty = !0;
        this.context = context;
        this.props = props;
        if (!this.state) this.state = {};
    }
    function render(vnode, parent, merge) {
        return diff(merge, vnode, {}, !1, parent);
    }
    var options = {};
    var stack = [];
    var EMPTY_CHILDREN = [];
    var lcCache = {};
    var toLowerCase = function(s) {
        return lcCache[s] || (lcCache[s] = s.toLowerCase());
    };
    var resolved = 'undefined' != typeof Promise && Promise.resolve();
    var defer = resolved ? function(f) {
        resolved.then(f);
    } : setTimeout;
    var EMPTY = {};
    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol.for('preactattr') : '__preactattr_';
    var NON_DIMENSION_PROPS = {
        boxFlex: 1,
        boxFlexGroup: 1,
        columnCount: 1,
        fillOpacity: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        fontWeight: 1,
        lineClamp: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        strokeOpacity: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1
    };
    var NON_BUBBLING_EVENTS = {
        blur: 1,
        error: 1,
        focus: 1,
        load: 1,
        resize: 1,
        scroll: 1
    };
    var items = [];
    var nodes = {};
    var mounts = [];
    var diffLevel = 0;
    var isSvgMode = !1;
    var hydrating = !1;
    var components = {};
    extend(Component.prototype, {
        linkState: function(key, eventPath) {
            var c = this._linkedStates || (this._linkedStates = {});
            return c[key + eventPath] || (c[key + eventPath] = createLinkedState(this, key, eventPath));
        },
        setState: function(state, callback) {
            var s = this.state;
            if (!this.prevState) this.prevState = clone(s);
            extend(s, isFunction(state) ? state(s, this.props) : state);
            if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
            enqueueRender(this);
        },
        forceUpdate: function() {
            renderComponent(this, 2);
        },
        render: function() {}
    });
    exports.h = h;
    exports.cloneElement = cloneElement;
    exports.Component = Component;
    exports.render = render;
    exports.rerender = rerender;
    exports.options = options;
});
//# sourceMappingURL=preact.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);
});