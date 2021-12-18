webpackHotUpdate_N_E("pages/directions",{

/***/ "./components/SideHug.js":
/*!*******************************!*\
  !*** ./components/SideHug.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TextBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextBlock */ \"./components/TextBlock.js\");\n/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cloudinary-react */ \"./node_modules/cloudinary-react/lib/index.js\");\n/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sideHug_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sideHug.scss */ \"./components/sideHug.scss\");\n/* harmony import */ var _sideHug_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sideHug_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/pierce/projects/caddolakebayoutours/components/SideHug.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar SideHug = function SideHug(props) {\n  _s();\n\n  var _props$data = props.data,\n      imageFirst = _props$data.imageFirst,\n      textData = _props$data.textData,\n      image = _props$data.image,\n      googleMap = _props$data.googleMap;\n  console.log({\n    image: image\n  });\n  var imageColumnRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(585),\n      imageColumnWidth = _useState[0],\n      setImageColumnWidth = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(661),\n      imageColumnHeight = _useState2[0],\n      setImageColumnHeight = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var _imageColumnRef$curre2;\n\n    var _imageColumnRef$curre = imageColumnRef === null || imageColumnRef === void 0 ? void 0 : (_imageColumnRef$curre2 = imageColumnRef.current) === null || _imageColumnRef$curre2 === void 0 ? void 0 : _imageColumnRef$curre2.getBoundingClientRect(),\n        width = _imageColumnRef$curre.width,\n        height = _imageColumnRef$curre.height;\n\n    setImageColumnWidth(width);\n    setImageColumnHeight(height);\n  }, [imageColumnRef]);\n  return __jsx(\"section\", {\n    className: \"side-hug\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"container flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"col\",\n    ref: imageColumnRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, imageFirst ? ( // display google map if we have one\n  googleMap && __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 15\n    }\n  }, googleMap), // display image if we have one\n  image && __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"CloudinaryContext\"], {\n    cloudName: \"tpierce36\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"img-wrapper\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 25\n    }\n  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n    publicId: image.path,\n    responsive: true,\n    width: imageColumnWidth,\n    crop: \"scale\",\n    alt: image.alt,\n    loading: \"lazy\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 21\n    }\n  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"Transformation\"], {\n    quality: \"auto\",\n    fetchFormat: \"auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 23\n    }\n  }))))) : textData.map(function (text, index) {\n    return __jsx(_TextBlock__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: index,\n      data: text,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 17\n      }\n    });\n  })), __jsx(\"div\", {\n    className: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, imageFirst ? textData.map(function (text, index) {\n    return __jsx(_TextBlock__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: index,\n      data: text,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 17\n      }\n    });\n  }) : // display image if we have one\n  image && __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"CloudinaryContext\"], {\n    cloudName: \"tpierce36\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"img-wrapper\",\n    ref: imageColumnRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 19\n    }\n  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n    publicId: image.path,\n    responsive: true,\n    width: imageColumnWidth,\n    crop: \"scale\",\n    alt: image.alt,\n    loading: \"lazy\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 21\n    }\n  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"Transformation\"], {\n    quality: \"auto\",\n    fetchFormat: \"auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 23\n    }\n  })))), googleMap && __jsx(\"iframe\", {\n    title: \"Google Maps\",\n    src: \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13428.266285705415!2d-94.15337171079648!3d32.7108586943788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc79227c114d5c01d!2sCaddo+Lake+Bayou+Tours!5e0!3m2!1sen!2sus!4v1528217775632\",\n    width: \"100%\",\n    height: \"460\",\n    frameBorder: \"0\",\n    allowFullScreen: true,\n    importance: \"low\",\n    loading: \"lazy\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(SideHug, \"ssXaN8M/LQ4PieVkx1gAZTwx64I=\");\n\n_c = SideHug;\nSideHug.propTypes = {\n  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideHug);\n\nvar _c;\n\n$RefreshReg$(_c, \"SideHug\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlSHVnLmpzPzZjYTEiXSwibmFtZXMiOlsiU2lkZUh1ZyIsInByb3BzIiwiZGF0YSIsImltYWdlRmlyc3QiLCJ0ZXh0RGF0YSIsImltYWdlIiwiZ29vZ2xlTWFwIiwiY29uc29sZSIsImxvZyIsImltYWdlQ29sdW1uUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpbWFnZUNvbHVtbldpZHRoIiwic2V0SW1hZ2VDb2x1bW5XaWR0aCIsImltYWdlQ29sdW1uSGVpZ2h0Iiwic2V0SW1hZ2VDb2x1bW5IZWlnaHQiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJwYXRoIiwiYWx0IiwibWFwIiwidGV4dCIsImluZGV4IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU1BOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUVDLEtBQUYsRUFBYTtBQUFBOztBQUFBLG9CQU12QkEsS0FBSyxDQUFDQyxJQU5pQjtBQUFBLE1BRXpCQyxVQUZ5QixlQUV6QkEsVUFGeUI7QUFBQSxNQUd6QkMsUUFIeUIsZUFHekJBLFFBSHlCO0FBQUEsTUFJekJDLEtBSnlCLGVBSXpCQSxLQUp5QjtBQUFBLE1BS3pCQyxTQUx5QixlQUt6QkEsU0FMeUI7QUFRM0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNILFNBQUssRUFBTEE7QUFBRCxHQUFaO0FBRUEsTUFBTUksY0FBYyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBN0I7O0FBVjJCLGtCQVlxQkMsc0RBQVEsQ0FBQyxHQUFELENBWjdCO0FBQUEsTUFZcEJDLGdCQVpvQjtBQUFBLE1BWUZDLG1CQVpFOztBQUFBLG1CQWF1QkYsc0RBQVEsQ0FBQyxHQUFELENBYi9CO0FBQUEsTUFhcEJHLGlC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VyxRQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQURGLENBREYsQ0FUUixFQTZCR2hCLFNBQVMsSUFDUjtBQUNFLFNBQUssRUFBQyxhQURSO0FBRUUsT0FBRyxFQUFDLHdQQUZOO0FBR0UsU0FBSyxFQUFDLE1BSFI7QUFJRSxVQUFNLEVBQUMsS0FKVDtBQUtFLGVBQVcsRUFBQyxHQUxkO0FBTUUsbUJBQWUsTUFOakI7QUFPRSxjQUFVLEVBQUMsS0FQYjtBQVFFLFdBQU8sRUFBQyxNQVJWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5QkosQ0FyQ0YsQ0FERixDQURGO0FBb0ZELENBN0dEOztHQUFNTixPOztLQUFBQSxPO0FBK0dOQSxPQUFPLENBQUMwQixTQUFSLEdBQW9CO0FBQ2xCeEIsTUFBSSxFQUFFeUIsaURBQVMsQ0FBQ0M7QUFERSxDQUFwQjtBQUllNUIsc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVIdWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFRleHRCbG9jayBmcm9tICcuL1RleHRCbG9jaydcbmltcG9ydCB7XG4gIEltYWdlLFxuICBDbG91ZGluYXJ5Q29udGV4dCxcbiAgVHJhbnNmb3JtYXRpb24sXG59IGZyb20gJ2Nsb3VkaW5hcnktcmVhY3QnXG5cbmltcG9ydCAnLi9zaWRlSHVnLnNjc3MnXG5cbmNvbnN0IFNpZGVIdWcgPSAoIHByb3BzICkgPT4ge1xuICBjb25zdCB7XG4gICAgaW1hZ2VGaXJzdCxcbiAgICB0ZXh0RGF0YSxcbiAgICBpbWFnZSxcbiAgICBnb29nbGVNYXAsXG4gIH0gPSBwcm9wcy5kYXRhO1xuXG4gIGNvbnNvbGUubG9nKHtpbWFnZX0pO1xuXG4gIGNvbnN0IGltYWdlQ29sdW1uUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IFtpbWFnZUNvbHVtbldpZHRoLCBzZXRJbWFnZUNvbHVtbldpZHRoXSA9IHVzZVN0YXRlKDU4NSk7XG4gIGNvbnN0IFtpbWFnZUNvbHVtbkhlaWdodCwgc2V0SW1hZ2VDb2x1bW5IZWlnaHRdID0gdXNlU3RhdGUoNjYxKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgIH0gPSBpbWFnZUNvbHVtblJlZj8uY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBzZXRJbWFnZUNvbHVtbldpZHRoKHdpZHRoKTtcbiAgICBzZXRJbWFnZUNvbHVtbkhlaWdodChoZWlnaHQpO1xuICB9LCBbaW1hZ2VDb2x1bW5SZWZdKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YHNpZGUtaHVnYH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbnRhaW5lciBmbGV4YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sYH0gcmVmPXtpbWFnZUNvbHVtblJlZn0+XG4gICAgICAgICAge2ltYWdlRmlyc3QgP1xuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAvLyBkaXNwbGF5IGdvb2dsZSBtYXAgaWYgd2UgaGF2ZSBvbmVcbiAgICAgICAgICAgICAgZ29vZ2xlTWFwICYmIChcbiAgICAgICAgICAgICAgPGRpdj57Z29vZ2xlTWFwfTwvZGl2PlxuICAgICAgICAgICAgICApLFxuXG4gICAgICAgICAgICAgIC8vIGRpc3BsYXkgaW1hZ2UgaWYgd2UgaGF2ZSBvbmVcbiAgICAgICAgICAgICAgaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgIDxDbG91ZGluYXJ5Q29udGV4dCBjbG91ZE5hbWU9XCJ0cGllcmNlMzZcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17YGltZy13cmFwcGVyYH0gcmVmPXtpbWFnZUNvbHVtblJlZn0+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BpbWctd3JhcHBlcmB9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNJZD17aW1hZ2UucGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e2ltYWdlQ29sdW1uV2lkdGh9XG4gICAgICAgICAgICAgICAgICAgICAgY3JvcD17YHNjYWxlYH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlLmFsdH1cbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtgbGF6eWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNmb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpdHk9e2BhdXRvYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoRm9ybWF0PXtgYXV0b2B9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2xvdWRpbmFyeUNvbnRleHQ+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIHRleHREYXRhLm1hcCggKHRleHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPFRleHRCbG9jayBrZXk9e2luZGV4fSBkYXRhPXt0ZXh0fSAvPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sYH0+XG4gICAgICAgICAge2ltYWdlRmlyc3QgP1xuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICB0ZXh0RGF0YS5tYXAoICh0ZXh0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxUZXh0QmxvY2sga2V5PXtpbmRleH0gZGF0YT17dGV4dH0gLz5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIC8vIGRpc3BsYXkgaW1hZ2UgaWYgd2UgaGF2ZSBvbmVcbiAgICAgICAgICAgICAgaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgIDxDbG91ZGluYXJ5Q29udGV4dCBjbG91ZE5hbWU9XCJ0cGllcmNlMzZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaW1nLXdyYXBwZXJgfSByZWY9e2ltYWdlQ29sdW1uUmVmfT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgcHVibGljSWQ9e2ltYWdlLnBhdGh9XG4gICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtpbWFnZUNvbHVtbldpZHRofVxuICAgICAgICAgICAgICAgICAgICAgIGNyb3A9e2BzY2FsZWB9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtpbWFnZS5hbHR9XG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17YGxhenlgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNmb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpdHk9e2BhdXRvYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoRm9ybWF0PXtgYXV0b2B9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2xvdWRpbmFyeUNvbnRleHQ+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAge2dvb2dsZU1hcCAmJiAoXG4gICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgIHRpdGxlPVwiR29vZ2xlIE1hcHNcIlxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxMzQyOC4yNjYyODU3MDU0MTUhMmQtOTQuMTUzMzcxNzEwNzk2NDghM2QzMi43MTA4NTg2OTQzNzg4ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgwJTNBMHhjNzkyMjdjMTE0ZDVjMDFkITJzQ2FkZG8rTGFrZStCYXlvdStUb3VycyE1ZTAhM20yITFzZW4hMnN1cyE0djE1MjgyMTc3NzU2MzJcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0NjBcIlxuICAgICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgICAgaW1wb3J0YW5jZT1cImxvd1wiXG4gICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgID48L2lmcmFtZT5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5TaWRlSHVnLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZUh1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SideHug.js\n");

/***/ })

})