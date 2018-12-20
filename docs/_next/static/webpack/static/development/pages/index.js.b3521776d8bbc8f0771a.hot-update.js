webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/lutaonan/projects/picas/pages/index.js";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var WebFont;

if (true) {
  WebFont = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
}



function useInput() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'value';

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var setter = function setter(e) {
    setValue(e.target[target]);
  };

  return [value, setter];
}

function Canvas(_ref) {
  var text = _ref.text,
      color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      fontSize = _ref.fontSize,
      fontFamily = _ref.fontFamily,
      padding = _ref.padding,
      bold = _ref.bold,
      italic = _ref.italic;
  var canvas = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var ctx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loadingFont = _useState4[0],
      setLoadingFont = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ctx.current = canvas.current.getContext('2d'); // for retina

    canvas.current.width = width * 2;
    canvas.current.height = height * 2;
    canvas.current.style.width = "".concat(width, "px");
    canvas.current.style.height = "".concat(height, "px");
    WebFont.load({
      loading: function loading() {
        setLoadingFont(true);
      },
      active: function active() {
        drawText();
        setLoadingFont(false);
      },
      inactive: function inactive() {
        setLoadingFont(false);
      }
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    WebFont.load({
      google: {
        families: [fontFamily]
      },
      loading: function loading() {
        setLoadingFont(true);
      },
      active: function active() {
        drawText();
        setLoadingFont(false);
      },
      inactive: function inactive() {
        setLoadingFont(false);
      }
    });
  }, [fontFamily]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(drawText, [text, color, fontFamily, width, height, padding, fontSize, bold, italic]);

  function drawText() {
    var measure = ctx.current.measureText(text); // const fontSize = height - padding * 2

    var fontProperties = [];

    if (italic) {
      fontProperties.push('italic');
    }

    if (bold) {
      fontProperties.push('bold');
    }

    fontProperties.push("".concat(fontSize * 2, "px"));
    fontProperties.push(fontFamily);
    ctx.current.font = fontProperties.filter(Boolean).join(' ');
    ctx.current.textAlign = 'center';
    ctx.current.textBaseline = 'middle'; // clear canvas

    ctx.current.clearRect(0, 0, canvas.current.width, canvas.current.height); // draw text

    ctx.current.fillStyle = color;
    ctx.current.fillText(text, width, height);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    style: {
      width: width,
      height: height
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
    style: {
      visibility: loadingFont ? 'hidden' : 'visible'
    },
    width: width,
    height: height,
    ref: canvas,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })));
}

function App() {
  var _useInput = useInput('Picas'),
      _useInput2 = _slicedToArray(_useInput, 2),
      name = _useInput2[0],
      setName = _useInput2[1];

  var _useInput3 = useInput(256),
      _useInput4 = _slicedToArray(_useInput3, 2),
      fontSize = _useInput4[0],
      setFontSize = _useInput4[1];

  var _useInput5 = useInput('#c62828'),
      _useInput6 = _slicedToArray(_useInput5, 2),
      color = _useInput6[0],
      setColor = _useInput6[1];

  var _useInput7 = useInput('Fredericka the Great'),
      _useInput8 = _slicedToArray(_useInput7, 2),
      fontFamilyInput = _useInput8[0],
      setFontFamilyInput = _useInput8[1];

  var _useInput9 = useInput('Fredericka the Great'),
      _useInput10 = _slicedToArray(_useInput9, 2),
      fontFamily = _useInput10[0],
      setFontFamily = _useInput10[1];

  var _useInput11 = useInput(false, 'checked'),
      _useInput12 = _slicedToArray(_useInput11, 2),
      bold = _useInput12[0],
      setBold = _useInput12[1];

  var _useInput13 = useInput(true, 'checked'),
      _useInput14 = _slicedToArray(_useInput13, 2),
      italic = _useInput14[0],
      setItalic = _useInput14[1];

  var onClickChangeFont = function onClickChangeFont() {
    setFontFamily({
      target: {
        value: fontFamilyInput
      }
    });
  };

  var big = {
    width: 1024,
    height: 1024 * 0.618 / 2
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Picas - Generate Project Logo with Google Fonts")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: '<a href="https://github.com/djyde/Picas" class="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#FD6C6C; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '960px',
      margin: '0 auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      margin: '36px auto',
      width: big.width,
      marginBottom: '0px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Canvas, {
    padding: 0,
    text: name,
    width: big.width,
    height: big.height,
    color: color,
    fontFamily: fontFamily,
    fontSize: fontSize,
    bold: bold,
    italic: italic,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "is-size-4",
    style: {
      textAlign: 'center',
      padding: '2rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Generate Project Logo with Google Fonts")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Product name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "input",
    defaultValue: name,
    onChange: setName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Font size"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "input",
    defaultValue: fontSize,
    onChange: setFontSize,
    type: "number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Font color"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "input",
    defaultValue: color,
    onChange: setColor,
    type: "color",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Font family"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field has-addons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "input",
    defaultValue: fontFamilyInput,
    onChange: setFontFamilyInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "button",
    onClick: onClickChangeFont,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "Change"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "\u270D\uFE0F Find font on ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://fonts.google.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, " Google Font "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "checkbox",
    style: {
      marginRight: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    defaultChecked: bold,
    onChange: setBold,
    type: "checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }), "bold"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    defaultChecked: italic,
    onChange: setItalic,
    type: "checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }), "italic")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "is-size-7",
    style: {
      textAlign: 'center',
      padding: '2rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Made by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/djyde",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "Randy")));
}

/* harmony default export */ __webpack_exports__["default"] = (App);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.b3521776d8bbc8f0771a.hot-update.js.map