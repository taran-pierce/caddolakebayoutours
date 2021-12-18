webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SideHug.js":
/*!*******************************!*\
  !*** ./components/SideHug.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TextBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextBlock */ \"./components/TextBlock.js\");\n/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cloudinary-react */ \"./node_modules/cloudinary-react/lib/index.js\");\n/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sideHug_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sideHug.scss */ \"./components/sideHug.scss\");\n/* harmony import */ var _sideHug_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sideHug_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/pierce/projects/caddolakebayoutours/components/SideHug.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar SideHug = function SideHug(props) {\n  _s();\n\n  var _props$data = props.data,\n      imageFirst = _props$data.imageFirst,\n      textData = _props$data.textData,\n      image = _props$data.image,\n      googleMap = _props$data.googleMap;\n  console.log({\n    image: image\n  });\n  var imageColumnRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(585),\n      imageColumnWidth = _useState[0],\n      setImageColumnWidth = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(661),\n      imageColumnHeight = _useState2[0],\n      setImageColumnHeight = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {// const {\n    //   width,\n    //   height,\n    // } = imageColumnRef?.current?.getBoundingClientRect();\n    // setImageColumnWidth(width);\n    // setImageColumnHeight(height);\n  }, [imageColumnRef]);\n  return __jsx(\"section\", {\n    className: \"side-hug\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"container flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, imageFirst ? ( // display google map if we have one\n  googleMap && __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 15\n    }\n  }, googleMap), // display image if we have one\n  image && __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"CloudinaryContext\"], {\n    cloudName: \"tpierce36\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"img-wrapper\",\n    ref: imageColumnRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 19\n    }\n  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n    publicId: image.path,\n    responsive: true,\n    width: imageColumnWidth,\n    crop: \"scale\",\n    alt: image.alt,\n    loading: \"lazy\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 21\n    }\n  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"Transformation\"], {\n    quality: \"auto\",\n    fetchFormat: \"auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 23\n    }\n  }))))) : textData.map(function (text, index) {\n    return __jsx(_TextBlock__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: index,\n      data: text,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }\n    });\n  })), __jsx(\"div\", {\n    className: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, imageFirst ? textData.map(function (text, index) {\n    return __jsx(_TextBlock__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: index,\n      data: text,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 17\n      }\n    });\n  }) : // display image if we have one\n  image && __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"CloudinaryContext\"], {\n    cloudName: \"tpierce36\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"img-wrapper\",\n    ref: imageColumnRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 19\n    }\n  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n    publicId: image.path,\n    responsive: true,\n    width: imageColumnWidth,\n    crop: \"scale\",\n    alt: image.alt,\n    loading: \"lazy\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 21\n    }\n  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"Transformation\"], {\n    quality: \"auto\",\n    fetchFormat: \"auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 23\n    }\n  })))), googleMap && __jsx(\"iframe\", {\n    title: \"Google Maps\",\n    src: \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13428.266285705415!2d-94.15337171079648!3d32.7108586943788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc79227c114d5c01d!2sCaddo+Lake+Bayou+Tours!5e0!3m2!1sen!2sus!4v1528217775632\",\n    width: \"100%\",\n    height: \"460\",\n    frameBorder: \"0\",\n    allowFullScreen: true,\n    importance: \"low\",\n    loading: \"lazy\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(SideHug, \"ssXaN8M/LQ4PieVkx1gAZTwx64I=\");\n\n_c = SideHug;\nSideHug.propTypes = {\n  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideHug);\n\nvar _c;\n\n$RefreshReg$(_c, \"SideHug\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlSHVnLmpzPzZjYTEiXSwibmFtZXMiOlsiU2lkZUh1ZyIsInByb3BzIiwiZGF0YSIsImltYWdlRmlyc3QiLCJ0ZXh0RGF0YSIsImltYWdlIiwiZ29vZ2xlTWFwIiwiY29uc29sZSIsImxvZyIsImltYWdlQ29sdW1uUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpbWFnZUNvbHVtbldpZHRoIiwic2V0SW1hZ2VDb2x1bW5XaWR0aCIsImltYWdlQ29sdW1uSGVpZ2h0Iiwic2V0SW1hZ2VDb2x1bW5IZWlnaHQiLCJ1c2VFZmZlY3QiLCJwYXRoIiwiYWx0IiwibWFwIiwidGV4dCIsImluZGV4IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU1BOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUVDLEtBQUYsRUFBYTtBQUFBOztBQUFBLG9CQU12QkEsS0FBSyxDQUFDQyxJQU5pQjtBQUFBLE1BRXpCQyxVQUZ5QixlQUV6QkEsVUFGeUI7QUFBQSxNQUd6QkMsUUFIeUIsZUFHekJBLFFBSHlCO0FBQUEsTUFJekJDLEtBSnlCLGVBSXpCQSxLQUp5QjtBQUFBLE1BS3pCQyxTQUx5QixlQUt6QkEsU0FMeUI7QUFRM0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNILFNBQUssRUFBTEE7QUFBRCxHQUFaO0FBRUEsTUFBTUksY0FBYyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBN0I7O0FBVjJCLGtCQVlxQkMsc0RBQVEsQ0FBQyxHQUFELENBWjdCO0FBQUEsTUFZcEJDLGdCQVpvQjtBQUFBLE1BWUZDLG1CQVpFOztBQUFBLG1CQWF1QkYsc0RBQVEsQ0FBQyxHQUFELENBYi9CO0FBQUEsTUFhcEJHLGlCQWJvQjtBQUFBLE1BYURDLG9CQWJDOztBQWUzQkMseURBQVMsQ0FBQyxZQUFNLENBQ2Q7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QUMsTUFSVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOUJKLENBcENGLENBREYsQ0FERjtBQW1GRCxDQTVHRDs7R0FBTU4sTzs7S0FBQUEsTztBQThHTkEsT0FBTyxDQUFDc0IsU0FBUixHQUFvQjtBQUNsQnBCLE1BQUksRUFBRXFCLGlEQUFTLENBQUNDO0FBREUsQ0FBcEI7QUFJZXhCLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaWRlSHVnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBUZXh0QmxvY2sgZnJvbSAnLi9UZXh0QmxvY2snXG5pbXBvcnQge1xuICBJbWFnZSxcbiAgQ2xvdWRpbmFyeUNvbnRleHQsXG4gIFRyYW5zZm9ybWF0aW9uLFxufSBmcm9tICdjbG91ZGluYXJ5LXJlYWN0J1xuXG5pbXBvcnQgJy4vc2lkZUh1Zy5zY3NzJ1xuXG5jb25zdCBTaWRlSHVnID0gKCBwcm9wcyApID0+IHtcbiAgY29uc3Qge1xuICAgIGltYWdlRmlyc3QsXG4gICAgdGV4dERhdGEsXG4gICAgaW1hZ2UsXG4gICAgZ29vZ2xlTWFwLFxuICB9ID0gcHJvcHMuZGF0YTtcblxuICBjb25zb2xlLmxvZyh7aW1hZ2V9KTtcblxuICBjb25zdCBpbWFnZUNvbHVtblJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBbaW1hZ2VDb2x1bW5XaWR0aCwgc2V0SW1hZ2VDb2x1bW5XaWR0aF0gPSB1c2VTdGF0ZSg1ODUpO1xuICBjb25zdCBbaW1hZ2VDb2x1bW5IZWlnaHQsIHNldEltYWdlQ29sdW1uSGVpZ2h0XSA9IHVzZVN0YXRlKDY2MSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zdCB7XG4gICAgLy8gICB3aWR0aCxcbiAgICAvLyAgIGhlaWdodCxcbiAgICAvLyB9ID0gaW1hZ2VDb2x1bW5SZWY/LmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgLy8gc2V0SW1hZ2VDb2x1bW5XaWR0aCh3aWR0aCk7XG4gICAgLy8gc2V0SW1hZ2VDb2x1bW5IZWlnaHQoaGVpZ2h0KTtcbiAgfSwgW2ltYWdlQ29sdW1uUmVmXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2BzaWRlLWh1Z2B9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb250YWluZXIgZmxleGB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbGB9PlxuICAgICAgICAgIHtpbWFnZUZpcnN0ID9cbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgLy8gZGlzcGxheSBnb29nbGUgbWFwIGlmIHdlIGhhdmUgb25lXG4gICAgICAgICAgICAgIGdvb2dsZU1hcCAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+e2dvb2dsZU1hcH08L2Rpdj5cbiAgICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgICAvLyBkaXNwbGF5IGltYWdlIGlmIHdlIGhhdmUgb25lXG4gICAgICAgICAgICAgIGltYWdlICYmIChcbiAgICAgICAgICAgICAgICA8Q2xvdWRpbmFyeUNvbnRleHQgY2xvdWROYW1lPVwidHBpZXJjZTM2XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGltZy13cmFwcGVyYH0gcmVmPXtpbWFnZUNvbHVtblJlZn0+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIHB1YmxpY0lkPXtpbWFnZS5wYXRofVxuICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17aW1hZ2VDb2x1bW5XaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICBjcm9wPXtgc2NhbGVgfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17aW1hZ2UuYWx0fVxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2BsYXp5YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2Zvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eT17YGF1dG9gfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hGb3JtYXQ9e2BhdXRvYH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DbG91ZGluYXJ5Q29udGV4dD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgdGV4dERhdGEubWFwKCAodGV4dCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8VGV4dEJsb2NrIGtleT17aW5kZXh9IGRhdGE9e3RleHR9IC8+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2xgfT5cbiAgICAgICAgICB7aW1hZ2VGaXJzdCA/XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgIHRleHREYXRhLm1hcCggKHRleHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPFRleHRCbG9jayBrZXk9e2luZGV4fSBkYXRhPXt0ZXh0fSAvPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgLy8gZGlzcGxheSBpbWFnZSBpZiB3ZSBoYXZlIG9uZVxuICAgICAgICAgICAgICBpbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgPENsb3VkaW5hcnlDb250ZXh0IGNsb3VkTmFtZT1cInRwaWVyY2UzNlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BpbWctd3JhcHBlcmB9IHJlZj17aW1hZ2VDb2x1bW5SZWZ9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNJZD17aW1hZ2UucGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e2ltYWdlQ29sdW1uV2lkdGh9XG4gICAgICAgICAgICAgICAgICAgICAgY3JvcD17YHNjYWxlYH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlLmFsdH1cbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtgbGF6eWB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2Zvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eT17YGF1dG9gfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hGb3JtYXQ9e2BhdXRvYH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DbG91ZGluYXJ5Q29udGV4dD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICB7Z29vZ2xlTWFwICYmIChcbiAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgdGl0bGU9XCJHb29nbGUgTWFwc1wiXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDEzNDI4LjI2NjI4NTcwNTQxNSEyZC05NC4xNTMzNzE3MTA3OTY0OCEzZDMyLjcxMDg1ODY5NDM3ODghMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDAlM0EweGM3OTIyN2MxMTRkNWMwMWQhMnNDYWRkbytMYWtlK0JheW91K1RvdXJzITVlMCEzbTIhMXNlbiEyc3VzITR2MTUyODIxNzc3NTYzMlwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQ2MFwiXG4gICAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgICAgICAgICAgICBpbXBvcnRhbmNlPVwibG93XCJcbiAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cblNpZGVIdWcucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlSHVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SideHug.js\n");

/***/ })

})