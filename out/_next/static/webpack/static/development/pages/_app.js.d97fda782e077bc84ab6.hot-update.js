webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.scss */ "./components/layout.scss");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/wpierce/projects/caddolakebayoutours/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var links = [{
  "name": "About",
  "href": "/about/"
}, {
  "name": "Directions",
  "href": "/directions/"
}, {
  "name": "Things to do",
  "href": "/things-to-do/"
}, {
  "name": "Photo Gallery",
  "href": "/photo-gallery/"
}, {
  "name": "Contact",
  "href": "/contact/"
}];

var Layout = function Layout(props) {
  var pageTitle = props.pageTitle,
      canonical = props.canonical;
  return __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, props.children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    links: links,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }));
};

Layout.propTypes = {
  pageTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  canonical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=_app.js.d97fda782e077bc84ab6.hot-update.js.map