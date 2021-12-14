webpackHotUpdate_N_E("pages/directions",{

/***/ "./components/SideHug.js":
/*!*******************************!*\
  !*** ./components/SideHug.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TextBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextBlock */ \"./components/TextBlock.js\");\n/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cloudinary-react */ \"./node_modules/cloudinary-react/lib/index.js\");\n/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sideHug_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sideHug.scss */ \"./components/sideHug.scss\");\n/* harmony import */ var _sideHug_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sideHug_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/pierce/projects/caddolakebayoutours/components/SideHug.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar SideHug = function SideHug(props) {\n  _s();\n\n  var _props$data = props.data,\n      imageFirst = _props$data.imageFirst,\n      textData = _props$data.textData,\n      image = _props$data.image,\n      googleMap = _props$data.googleMap;\n  var imageColumnRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(585),\n      imageColumnWidth = _useState[0],\n      setImageColumnWidth = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(661),\n      imageColumnHeight = _useState2[0],\n      setImageColumnHeight = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {// const {\n    //   width,\n    //   height,\n    // } = imageColumnRef?.current?.getBoundingClientRect();\n    // setImageColumnWidth(width);\n    // setImageColumnHeight(height);\n  }, [imageColumnRef]);\n  return __jsx(\"section\", {\n    className: \"side-hug\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"container flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, imageFirst ? ( // display google map if we have one\n  googleMap && __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 15\n    }\n  }, googleMap), // display image if we have one\n  image && __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"CloudinaryContext\"], {\n    cloudName: \"tpierce36\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"img-wrapper\",\n    ref: imageColumnRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 19\n    }\n  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n    publicId: image.path,\n    responsive: true,\n    width: imageColumnWidth,\n    crop: \"scale\",\n    alt: image.alt,\n    loading: \"lazy\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 21\n    }\n  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"Transformation\"], {\n    quality: \"auto\",\n    fetchFormat: \"auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 23\n    }\n  }))))) : textData.map(function (text, index) {\n    return __jsx(_TextBlock__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: index,\n      data: text,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }\n    });\n  })), __jsx(\"div\", {\n    className: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, imageFirst ? textData.map(function (text, index) {\n    return __jsx(_TextBlock__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: index,\n      data: text,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 17\n      }\n    });\n  }) : // display image if we have one\n  image && __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"CloudinaryContext\"], {\n    cloudName: \"tpierce36\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"img-wrapper\",\n    ref: imageColumnRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 19\n    }\n  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n    publicId: image.path,\n    responsive: true,\n    width: imageColumnWidth,\n    crop: \"scale\",\n    alt: image.alt,\n    loading: \"lazy\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 21\n    }\n  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__[\"Transformation\"], {\n    quality: \"auto\",\n    fetchFormat: \"auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 23\n    }\n  })))), googleMap && __jsx(\"iframe\", {\n    title: \"Google Maps\",\n    src: \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13428.266285705415!2d-94.15337171079648!3d32.7108586943788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc79227c114d5c01d!2sCaddo+Lake+Bayou+Tours!5e0!3m2!1sen!2sus!4v1528217775632\",\n    width: \"100%\",\n    height: \"460\",\n    frameBorder: \"0\",\n    allowFullScreen: true,\n    importance: \"low\",\n    loading: \"lazy\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(SideHug, \"ssXaN8M/LQ4PieVkx1gAZTwx64I=\");\n\n_c = SideHug;\nSideHug.propTypes = {\n  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideHug);\n\nvar _c;\n\n$RefreshReg$(_c, \"SideHug\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlSHVnLmpzPzZjYTEiXSwibmFtZXMiOlsiU2lkZUh1ZyIsInByb3BzIiwiZGF0YSIsImltYWdlRmlyc3QiLCJ0ZXh0RGF0YSIsImltYWdlIiwiZ29vZ2xlTWFwIiwiaW1hZ2VDb2x1bW5SZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImltYWdlQ29sdW1uV2lkdGgiLCJzZXRJbWFnZUNvbHVtbldpZHRoIiwiaW1hZ2VDb2x1bW5IZWlnaHQiLCJzZXRJbWFnZUNvbHVtbkhlaWdodCIsInVzZUVmZmVjdCIsInBhdGgiLCJhbHQiLCJtYXAiLCJ0ZXh0IiwiaW5kZXgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBRUMsS0FBRixFQUFhO0FBQUE7O0FBQUEsb0JBTXZCQSxLQUFLLENBQUNDLElBTmlCO0FBQUEsTUFFekJDLFVBRnlCLGVBRXpCQSxVQUZ5QjtBQUFBLE1BR3pCQyxRQUh5QixlQUd6QkEsUUFIeUI7QUFBQSxNQUl6QkMsS0FKeUIsZUFJekJBLEtBSnlCO0FBQUEsTUFLekJDLFNBTHlCLGVBS3pCQSxTQUx5QjtBQVEzQixNQUFNQyxjQUFjLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUE3Qjs7QUFSMkIsa0JBVXFCQyxzREFBUSxDQUFDLEdBQUQsQ0FWN0I7QUFBQSxNQVVwQkMsZ0JBVm9CO0FBQUEsTUFVRkMsbUJBVkU7O0FBQUEsbUJBV3VCRixzREFBUSxDQUFDLEdBQUQsQ0FYL0I7QUFBQSxNQVdwQkcsaUJBWG9CO0FBQUEsTUFXREMsb0JBWEM7O0FBYTNCQyx5REFBUyxDQUFDLFlBQU0sQ0FDZDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDRCxHQVJRLEVBUU4sQ0FBQ1AsY0FBRCxDQVJNLENBQVQ7QUFVQSxTQUNFO0FBQVMsYUFBUyxZQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLGtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLFVBQVUsS0FFUDtBQUNBRyxXQUFTLElBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNQSxTQUFOLENBREEsRUFJQTtBQUNBRCxPQUFLLElBQ0gsTUFBQyxrRUFBRDtBQUFtQixhQUFTLEVBQUMsV0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxlQUFkO0FBQStCLE9BQUcsRUFBRUUsY0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFDRSxZQUFRLEVBQUVGLEtBQUssQ0FBQ1UsSUFEbEI7QUFFRSxjQUFVLE1BRlo7QUFHRSxTQUFLLEVBQUVMLGdCQUhUO0FBSUUsUUFBSSxTQUpOO0FBS0UsT0FBRyxFQUFFTCxLQUFLLENBQUNXLEdBTGI7QUFNRSxXQUFPLFFBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFLE1BQUMsK0RBQUQ7QUFDRSxXQUFPLFFBRFQ7QUFFRSxlQUFXLFFBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREYsQ0FERixDQVRLLElBNEJQWixRQUFRLENBQUNhLEdBQVQsQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxXQUNaLE1BQUMsa0RBQUQ7QUFBVyxTQUFHLEVBQUVBLEtBQWhCO0FBQXVCLFVBQUksRUFBRUQsSUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURZO0FBQUEsR0FBZCxDQTdCTixDQURGLEVBb0NFO0FBQUssYUFBUyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2YsVUFBVSxHQUVQQyxRQUFRLENBQUNhLEdBQVQsQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxXQUNaLE1BQUMsa0RBQUQ7QUFBVyxTQUFHLEVBQUVBLEtBQWhCO0FBQXVCLFVBQUksRUFBRUQsSUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURZO0FBQUEsR0FBZCxDQUZPLEdBTVA7QUFDQWIsT0FBSyxJQUNILE1BQUMsa0VBQUQ7QUFBbUIsYUFBUyxFQUFDLFdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsZUFBZDtBQUErQixPQUFHLEVBQUVFLGNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQ0UsWUFBUSxFQUFFRixLQUFLLENBQUNVLElBRGxCO0FBRUUsY0FBVSxNQUZaO0FBR0UsU0FBSyxFQUFFTCxnQkFIVDtBQUlFLFFBQUksU0FKTjtBQUtFLE9BQUcsRUFBRUwsS0FBSyxDQUFDVyxHQUxiO0FBTUUsV0FBTyxRQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRSxNQUFDLCtEQUFEO0FBQ0UsV0FBTyxRQURUO0FBRUUsZUFBVyxRQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQURGLENBREYsQ0FUUixFQTZCR1YsU0FBUyxJQUNSO0FBQ0UsU0FBSyxFQUFDLGFBRFI7QUFFRSxPQUFHLEVBQUMsd1BBRk47QUFHRSxTQUFLLEVBQUMsTUFIUjtBQUlFLFVBQU0sRUFBQyxLQUpUO0FBS0UsZUFBVyxFQUFDLEdBTGQ7QUFNRSxtQkFBZSxNQU5qQjtBQU9FLGNBQVUsRUFBQyxLQVBiO0FBUUUsV0FBTyxFQUFDLE1BUlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlCSixDQXBDRixDQURGLENBREY7QUFtRkQsQ0ExR0Q7O0dBQU1OLE87O0tBQUFBLE87QUE0R05BLE9BQU8sQ0FBQ29CLFNBQVIsR0FBb0I7QUFDbEJsQixNQUFJLEVBQUVtQixpREFBUyxDQUFDQztBQURFLENBQXBCO0FBSWV0QixzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2lkZUh1Zy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgVGV4dEJsb2NrIGZyb20gJy4vVGV4dEJsb2NrJ1xuaW1wb3J0IHtcbiAgSW1hZ2UsXG4gIENsb3VkaW5hcnlDb250ZXh0LFxuICBUcmFuc2Zvcm1hdGlvbixcbn0gZnJvbSAnY2xvdWRpbmFyeS1yZWFjdCdcblxuaW1wb3J0ICcuL3NpZGVIdWcuc2NzcydcblxuY29uc3QgU2lkZUh1ZyA9ICggcHJvcHMgKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpbWFnZUZpcnN0LFxuICAgIHRleHREYXRhLFxuICAgIGltYWdlLFxuICAgIGdvb2dsZU1hcCxcbiAgfSA9IHByb3BzLmRhdGFcblxuICBjb25zdCBpbWFnZUNvbHVtblJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBbaW1hZ2VDb2x1bW5XaWR0aCwgc2V0SW1hZ2VDb2x1bW5XaWR0aF0gPSB1c2VTdGF0ZSg1ODUpO1xuICBjb25zdCBbaW1hZ2VDb2x1bW5IZWlnaHQsIHNldEltYWdlQ29sdW1uSGVpZ2h0XSA9IHVzZVN0YXRlKDY2MSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zdCB7XG4gICAgLy8gICB3aWR0aCxcbiAgICAvLyAgIGhlaWdodCxcbiAgICAvLyB9ID0gaW1hZ2VDb2x1bW5SZWY/LmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgLy8gc2V0SW1hZ2VDb2x1bW5XaWR0aCh3aWR0aCk7XG4gICAgLy8gc2V0SW1hZ2VDb2x1bW5IZWlnaHQoaGVpZ2h0KTtcbiAgfSwgW2ltYWdlQ29sdW1uUmVmXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2BzaWRlLWh1Z2B9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb250YWluZXIgZmxleGB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbGB9PlxuICAgICAgICAgIHtpbWFnZUZpcnN0ID9cbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgLy8gZGlzcGxheSBnb29nbGUgbWFwIGlmIHdlIGhhdmUgb25lXG4gICAgICAgICAgICAgIGdvb2dsZU1hcCAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+e2dvb2dsZU1hcH08L2Rpdj5cbiAgICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgICAvLyBkaXNwbGF5IGltYWdlIGlmIHdlIGhhdmUgb25lXG4gICAgICAgICAgICAgIGltYWdlICYmIChcbiAgICAgICAgICAgICAgICA8Q2xvdWRpbmFyeUNvbnRleHQgY2xvdWROYW1lPVwidHBpZXJjZTM2XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGltZy13cmFwcGVyYH0gcmVmPXtpbWFnZUNvbHVtblJlZn0+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIHB1YmxpY0lkPXtpbWFnZS5wYXRofVxuICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17aW1hZ2VDb2x1bW5XaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICBjcm9wPXtgc2NhbGVgfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17aW1hZ2UuYWx0fVxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2BsYXp5YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2Zvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eT17YGF1dG9gfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hGb3JtYXQ9e2BhdXRvYH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DbG91ZGluYXJ5Q29udGV4dD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgdGV4dERhdGEubWFwKCAodGV4dCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8VGV4dEJsb2NrIGtleT17aW5kZXh9IGRhdGE9e3RleHR9IC8+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2xgfT5cbiAgICAgICAgICB7aW1hZ2VGaXJzdCA/XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgIHRleHREYXRhLm1hcCggKHRleHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPFRleHRCbG9jayBrZXk9e2luZGV4fSBkYXRhPXt0ZXh0fSAvPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgLy8gZGlzcGxheSBpbWFnZSBpZiB3ZSBoYXZlIG9uZVxuICAgICAgICAgICAgICBpbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgPENsb3VkaW5hcnlDb250ZXh0IGNsb3VkTmFtZT1cInRwaWVyY2UzNlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BpbWctd3JhcHBlcmB9IHJlZj17aW1hZ2VDb2x1bW5SZWZ9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNJZD17aW1hZ2UucGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e2ltYWdlQ29sdW1uV2lkdGh9XG4gICAgICAgICAgICAgICAgICAgICAgY3JvcD17YHNjYWxlYH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlLmFsdH1cbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtgbGF6eWB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2Zvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eT17YGF1dG9gfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hGb3JtYXQ9e2BhdXRvYH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DbG91ZGluYXJ5Q29udGV4dD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICB7Z29vZ2xlTWFwICYmIChcbiAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgdGl0bGU9XCJHb29nbGUgTWFwc1wiXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDEzNDI4LjI2NjI4NTcwNTQxNSEyZC05NC4xNTMzNzE3MTA3OTY0OCEzZDMyLjcxMDg1ODY5NDM3ODghMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDAlM0EweGM3OTIyN2MxMTRkNWMwMWQhMnNDYWRkbytMYWtlK0JheW91K1RvdXJzITVlMCEzbTIhMXNlbiEyc3VzITR2MTUyODIxNzc3NTYzMlwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQ2MFwiXG4gICAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgICAgICAgICAgICBpbXBvcnRhbmNlPVwibG93XCJcbiAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cblNpZGVIdWcucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlSHVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SideHug.js\n");

/***/ })

})