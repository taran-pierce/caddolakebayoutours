webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SideHug.js":
/*!*******************************!*\
  !*** ./components/SideHug.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TextBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextBlock */ \"./components/TextBlock.js\");\n/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cloudinary-react */ \"./node_modules/cloudinary-react/lib/index.js\");\n/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sideHug_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sideHug.scss */ \"./components/sideHug.scss\");\n/* harmony import */ var _sideHug_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sideHug_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/pierce/projects/caddolakebayoutours/components/SideHug.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar SideHug = function SideHug(props) {\n  _s();\n\n  var _props$data = props.data,\n      imageFirst = _props$data.imageFirst,\n      textData = _props$data.textData,\n      image = _props$data.image,\n      googleMap = _props$data.googleMap;\n  var imageColumnRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(585),\n      imageColumnWidth = _useState[0],\n      setImageColumnWidth = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(661),\n      imageColumnHeight = _useState2[0],\n      setImageColumnHeight = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var _imageColumnRef$curre2;\n\n    var _imageColumnRef$curre = imageColumnRef === null || imageColumnRef === void 0 ? void 0 : (_imageColumnRef$curre2 = imageColumnRef.current) === null || _imageColumnRef$curre2 === void 0 ? void 0 : _imageColumnRef$curre2.getBoundingClientRect(),\n        width = _imageColumnRef$curre.width,\n        height = _imageColumnRef$curre.height;\n\n    setImageColumnWidth(width);\n    setImageColumnHeight(height);\n  }, [imageColumnRef]);\n  return __jsx(\"section\", {\n    className: \"side-hug\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"container flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, imageFirst ? ( // display google map if we have one\n  googleMap && __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 15\n    }\n  }, googleMap), // display image if we have one\n  image && __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"CloudinaryContext\"], {\n    cloudName: \"tpierce36\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"img-wrapper\",\n    ref: imageColumnRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 19\n    }\n  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n    publicId: image.path,\n    responsive: true,\n    width: imageColumnWidth,\n    crop: \"scale\",\n    alt: image.alt,\n    loading: \"lazy\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 21\n    }\n  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"Transformation\"], {\n    quality: \"auto\",\n    fetchFormat: \"auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 23\n    }\n  }))))) : textData.map(function (text, index) {\n    return __jsx(_TextBlock__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: index,\n      data: text,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }\n    });\n  })), __jsx(\"div\", {\n    className: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, imageFirst ? textData.map(function (text, index) {\n    return __jsx(_TextBlock__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: index,\n      data: text,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 17\n      }\n    });\n  }) : // display image if we have one\n  image && __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"CloudinaryContext\"], {\n    cloudName: \"tpierce36\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"img-wrapper\",\n    ref: imageColumnRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 19\n    }\n  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n    publicId: image.path,\n    responsive: true,\n    width: imageColumnWidth,\n    crop: \"scale\",\n    alt: image.alt,\n    loading: \"lazy\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 21\n    }\n  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"Transformation\"], {\n    quality: \"auto\",\n    fetchFormat: \"auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 23\n    }\n  })))), googleMap && __jsx(\"iframe\", {\n    title: \"Google Maps\",\n    src: \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13428.266285705415!2d-94.15337171079648!3d32.7108586943788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc79227c114d5c01d!2sCaddo+Lake+Bayou+Tours!5e0!3m2!1sen!2sus!4v1528217775632\",\n    width: \"100%\",\n    height: \"460\",\n    frameBorder: \"0\",\n    allowFullScreen: true,\n    importance: \"low\",\n    loading: \"lazy\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(SideHug, \"ssXaN8M/LQ4PieVkx1gAZTwx64I=\");\n\n_c = SideHug;\nSideHug.propTypes = {\n  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideHug);\n\nvar _c;\n\n$RefreshReg$(_c, \"SideHug\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlSHVnLmpzPzZjYTEiXSwibmFtZXMiOlsiU2lkZUh1ZyIsInByb3BzIiwiZGF0YSIsImltYWdlRmlyc3QiLCJ0ZXh0RGF0YSIsImltYWdlIiwiZ29vZ2xlTWFwIiwiaW1hZ2VDb2x1bW5SZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImltYWdlQ29sdW1uV2lkdGgiLCJzZXRJbWFnZUNvbHVtbldpZHRoIiwiaW1hZ2VDb2x1bW5IZWlnaHQiLCJzZXRJbWFnZUNvbHVtbkhlaWdodCIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInBhdGgiLCJhbHQiLCJtYXAiLCJ0ZXh0IiwiaW5kZXgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBRUMsS0FBRixFQUFhO0FBQUE7O0FBQUEsb0JBTXZCQSxLQUFLLENBQUNDLElBTmlCO0FBQUEsTUFFekJDLFVBRnlCLGVBRXpCQSxVQUZ5QjtBQUFBLE1BR3pCQyxRQUh5QixlQUd6QkEsUUFIeUI7QUFBQSxNQUl6QkMsS0FKeUIsZUFJekJBLEtBSnlCO0FBQUEsTUFLekJDLFNBTHlCLGVBS3pCQSxTQUx5QjtBQVEzQixNQUFNQyxjQUFjLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUE3Qjs7QUFSMkIsa0JBVXFCQyxzREFBUSxDQUFDLEdBQUQsQ0FWN0I7QUFBQSxNQVVwQkMsZ0JBVm9CO0FBQUEsTUFVRkMsbUJBVkU7O0FBQUEsbUJBV3VCRixzREFBUSxDQUFDLEdBQUQsQ0FYL0I7QUFBQSxNQVdwQkcsaUJBWG9CO0FBQUEsTUFXREMsb0JBWEM7O0FBYTNCQyx5REFBUyxDQUFDLFlBQU07QUFBQTs7QUFBQSxnQ0FJVlAsY0FKVSxh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SUFDUjtBQUNFLFNBQUssRUFBQyxhQURSO0FBRUUsT0FBRyxFQUFDLHdQQUZOO0FBR0UsU0FBSyxFQUFDLE1BSFI7QUFJRSxVQUFNLEVBQUMsS0FKVDtBQUtFLGVBQVcsRUFBQyxHQUxkO0FBTUUsbUJBQWUsTUFOakI7QUFPRSxjQUFVLEVBQUMsS0FQYjtBQVFFLFdBQU8sRUFBQyxNQVJWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5QkosQ0FwQ0YsQ0FERixDQURGO0FBbUZELENBMUdEOztHQUFNTixPOztLQUFBQSxPO0FBNEdOQSxPQUFPLENBQUN3QixTQUFSLEdBQW9CO0FBQ2xCdEIsTUFBSSxFQUFFdUIsaURBQVMsQ0FBQ0M7QUFERSxDQUFwQjtBQUllMUIsc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVIdWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFRleHRCbG9jayBmcm9tICcuL1RleHRCbG9jaydcbmltcG9ydCB7XG4gIEltYWdlLFxuICBDbG91ZGluYXJ5Q29udGV4dCxcbiAgVHJhbnNmb3JtYXRpb24sXG59IGZyb20gJ2Nsb3VkaW5hcnktcmVhY3QnXG5cbmltcG9ydCAnLi9zaWRlSHVnLnNjc3MnXG5cbmNvbnN0IFNpZGVIdWcgPSAoIHByb3BzICkgPT4ge1xuICBjb25zdCB7XG4gICAgaW1hZ2VGaXJzdCxcbiAgICB0ZXh0RGF0YSxcbiAgICBpbWFnZSxcbiAgICBnb29nbGVNYXAsXG4gIH0gPSBwcm9wcy5kYXRhXG5cbiAgY29uc3QgaW1hZ2VDb2x1bW5SZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgW2ltYWdlQ29sdW1uV2lkdGgsIHNldEltYWdlQ29sdW1uV2lkdGhdID0gdXNlU3RhdGUoNTg1KTtcbiAgY29uc3QgW2ltYWdlQ29sdW1uSGVpZ2h0LCBzZXRJbWFnZUNvbHVtbkhlaWdodF0gPSB1c2VTdGF0ZSg2NjEpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgfSA9IGltYWdlQ29sdW1uUmVmPy5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIHNldEltYWdlQ29sdW1uV2lkdGgod2lkdGgpO1xuICAgIHNldEltYWdlQ29sdW1uSGVpZ2h0KGhlaWdodCk7XG4gIH0sIFtpbWFnZUNvbHVtblJlZl0pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgc2lkZS1odWdgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29udGFpbmVyIGZsZXhgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2xgfT5cbiAgICAgICAgICB7aW1hZ2VGaXJzdCA/XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgIC8vIGRpc3BsYXkgZ29vZ2xlIG1hcCBpZiB3ZSBoYXZlIG9uZVxuICAgICAgICAgICAgICBnb29nbGVNYXAgJiYgKFxuICAgICAgICAgICAgICA8ZGl2Pntnb29nbGVNYXB9PC9kaXY+XG4gICAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgICAgLy8gZGlzcGxheSBpbWFnZSBpZiB3ZSBoYXZlIG9uZVxuICAgICAgICAgICAgICBpbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgPENsb3VkaW5hcnlDb250ZXh0IGNsb3VkTmFtZT1cInRwaWVyY2UzNlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BpbWctd3JhcHBlcmB9IHJlZj17aW1hZ2VDb2x1bW5SZWZ9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNJZD17aW1hZ2UucGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e2ltYWdlQ29sdW1uV2lkdGh9XG4gICAgICAgICAgICAgICAgICAgICAgY3JvcD17YHNjYWxlYH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlLmFsdH1cbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtgbGF6eWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNmb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpdHk9e2BhdXRvYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoRm9ybWF0PXtgYXV0b2B9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2xvdWRpbmFyeUNvbnRleHQ+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIHRleHREYXRhLm1hcCggKHRleHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPFRleHRCbG9jayBrZXk9e2luZGV4fSBkYXRhPXt0ZXh0fSAvPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sYH0+XG4gICAgICAgICAge2ltYWdlRmlyc3QgP1xuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICB0ZXh0RGF0YS5tYXAoICh0ZXh0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxUZXh0QmxvY2sga2V5PXtpbmRleH0gZGF0YT17dGV4dH0gLz5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIC8vIGRpc3BsYXkgaW1hZ2UgaWYgd2UgaGF2ZSBvbmVcbiAgICAgICAgICAgICAgaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgIDxDbG91ZGluYXJ5Q29udGV4dCBjbG91ZE5hbWU9XCJ0cGllcmNlMzZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaW1nLXdyYXBwZXJgfSByZWY9e2ltYWdlQ29sdW1uUmVmfT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgcHVibGljSWQ9e2ltYWdlLnBhdGh9XG4gICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtpbWFnZUNvbHVtbldpZHRofVxuICAgICAgICAgICAgICAgICAgICAgIGNyb3A9e2BzY2FsZWB9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtpbWFnZS5hbHR9XG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17YGxhenlgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNmb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpdHk9e2BhdXRvYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoRm9ybWF0PXtgYXV0b2B9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2xvdWRpbmFyeUNvbnRleHQ+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAge2dvb2dsZU1hcCAmJiAoXG4gICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgIHRpdGxlPVwiR29vZ2xlIE1hcHNcIlxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxMzQyOC4yNjYyODU3MDU0MTUhMmQtOTQuMTUzMzcxNzEwNzk2NDghM2QzMi43MTA4NTg2OTQzNzg4ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgwJTNBMHhjNzkyMjdjMTE0ZDVjMDFkITJzQ2FkZG8rTGFrZStCYXlvdStUb3VycyE1ZTAhM20yITFzZW4hMnN1cyE0djE1MjgyMTc3NzU2MzJcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0NjBcIlxuICAgICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgICAgaW1wb3J0YW5jZT1cImxvd1wiXG4gICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgID48L2lmcmFtZT5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5TaWRlSHVnLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZUh1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SideHug.js\n");

/***/ })

})