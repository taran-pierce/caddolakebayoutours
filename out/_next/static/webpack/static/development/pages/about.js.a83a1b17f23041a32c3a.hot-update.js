webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/SideHug.js":
/*!*******************************!*\
  !*** ./components/SideHug.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TextBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextBlock */ "./components/TextBlock.js");
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cloudinary-react */ "./node_modules/cloudinary-react/lib/index.js");
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sideHug_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sideHug.scss */ "./components/sideHug.scss");
/* harmony import */ var _sideHug_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sideHug_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/wpierce/projects/caddolakebayoutours/components/SideHug.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var SideHug = function SideHug(props) {
  var _props$data = props.data,
      imageFirst = _props$data.imageFirst,
      textData = _props$data.textData,
      image = _props$data.image;
  console.log('image: ', image);
  return __jsx("section", {
    className: "side-hug",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "container flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, imageFirst ? __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__["CloudinaryContext"], {
    cloudName: "tpierce36",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "img-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    publicId: props.data.image.path,
    responsive: true,
    width: "auto",
    crop: "scale",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__["Transformation"], {
    quality: "auto",
    fetchFormat: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })))) : textData.map(function (text, index) {
    return __jsx(_TextBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      data: text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    });
  })), __jsx("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, imageFirst ? textData.map(function (text, index) {
    return __jsx(_TextBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      data: text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    });
  }) : __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__["CloudinaryContext"], {
    cloudName: "tpierce36",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "img-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    publicId: props.data.image.path,
    responsive: true,
    width: "auto",
    crop: "scale",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__["Transformation"], {
    quality: "auto",
    fetchFormat: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })))))));
};

SideHug.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (SideHug);

/***/ })

})
//# sourceMappingURL=about.js.a83a1b17f23041a32c3a.hot-update.js.map