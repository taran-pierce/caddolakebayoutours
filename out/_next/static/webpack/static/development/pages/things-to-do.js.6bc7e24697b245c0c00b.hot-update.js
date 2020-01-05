webpackHotUpdate("static/development/pages/things-to-do.js",{

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
      image = _props$data.image,
      googleMap = _props$data.googleMap;
  return __jsx("section", {
    className: "side-hug",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "container flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, imageFirst ? ( // display google map if we have one
  googleMap && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, googleMap), // display image if we have one
  image && __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__["CloudinaryContext"], {
    cloudName: "tpierce36",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "img-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    publicId: image.path,
    responsive: true,
    width: "auto",
    crop: "scale",
    alt: image.alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__["Transformation"], {
    quality: "auto",
    fetchFormat: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }))))) : textData.map(function (text, index) {
    return __jsx(_TextBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      data: text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    });
  })), __jsx("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, imageFirst ? textData.map(function (text, index) {
    return __jsx(_TextBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      data: text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    });
  }) : // display image if we have one
  image && __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__["CloudinaryContext"], {
    cloudName: "tpierce36",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    className: "img-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    publicId: image.path,
    responsive: true,
    width: "auto",
    crop: "scale",
    alt: image.alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_3__["Transformation"], {
    quality: "auto",
    fetchFormat: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })))), googleMap && __jsx("iframe", {
    title: "Google Maps",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13428.266285705415!2d-94.15337171079648!3d32.7108586943788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc79227c114d5c01d!2sCaddo+Lake+Bayou+Tours!5e0!3m2!1sen!2sus!4v1528217775632",
    width: "100%",
    height: "460",
    frameBorder: "0",
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }))));
};

SideHug.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (SideHug);

/***/ })

})
//# sourceMappingURL=things-to-do.js.6bc7e24697b245c0c00b.hot-update.js.map