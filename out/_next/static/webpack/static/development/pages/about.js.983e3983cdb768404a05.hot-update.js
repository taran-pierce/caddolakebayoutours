webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/TextBlock.js":
/*!*********************************!*\
  !*** ./components/TextBlock.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _textBlock_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textBlock.scss */ "./components/textBlock.scss");
/* harmony import */ var _textBlock_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_textBlock_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/wpierce/projects/caddolakebayoutours/components/TextBlock.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var TextBlock = function TextBlock(props) {
  return __jsx("div", {
    className: "text-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.data.titles.map(function (title, index) {
    return __jsx("div", {
      key: index,
      dangerouslySetInnerHTML: {
        __html: title
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  }), props.data.paragraphs.map(function (paragraph, index) {
    return __jsx("p", {
      key: index,
      dangerouslySetInnerHTML: {
        __html: paragraph
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    });
  }), props.data.lists && props.data.lists.map(function (list, index) {
    return (// check to see if it is a UL
      list.type === 'ul' ? __jsx("ul", {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, list.items.map(function (item, index) {
        return __jsx("li", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, item.title && __jsx("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, item.title), item.paragraphs.map(function (paragraph, index) {
          return __jsx("p", {
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, paragraph);
        }));
      })) : // use an OL otherwise
      __jsx("ol", {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, list.items.map(function (item, index) {
        return __jsx("li", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, item.title && __jsx("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, item.title), item.paragraphs.map(function (paragraph, index) {
          return __jsx("p", {
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, paragraph);
        }));
      }))
    );
  }));
};

TextBlock.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (TextBlock);

/***/ })

})
//# sourceMappingURL=about.js.983e3983cdb768404a05.hot-update.js.map