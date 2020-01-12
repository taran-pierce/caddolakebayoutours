webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cloudinary-react */ "./node_modules/cloudinary-react/lib/index.js");
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cloudinary_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hero_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero.scss */ "./components/hero.scss");
/* harmony import */ var _hero_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hero_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/wpierce/projects/caddolakebayoutours/components/Hero.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Hero = function Hero(props) {
  var imagePath = props.imagePath,
      alt = props.alt,
      bottom = props.bottom;
  return __jsx("section", {
    className: "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_2__["CloudinaryContext"], {
    cloudName: "tpierce36",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, bottom && __jsx("style", {
    jsx: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "\n            @media(min-width: 992px) {\n              .img-wrapper img {\n                bottom: ".concat(bottom, "px;\n              }\n            }\n          ")), __jsx("div", {
    className: "img-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    publicId: imagePath,
    responsive: true,
    width: "auto",
    crop: "scale",
    alt: alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_2__["Transformation"], {
    quality: "90",
    fetchFormat: "auto",
    gravity: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })))));
};

Hero.propTypes = {
  imagePath: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ })

})
//# sourceMappingURL=contact.js.0ecbb0350a261b9580d5.hot-update.js.map