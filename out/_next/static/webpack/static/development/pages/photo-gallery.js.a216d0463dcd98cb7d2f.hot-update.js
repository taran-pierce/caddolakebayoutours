webpackHotUpdate("static/development/pages/photo-gallery.js",{

/***/ "./pages/photo-gallery.js":
/*!********************************!*\
  !*** ./pages/photo-gallery.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_ImageGallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ImageGallery */ "./components/ImageGallery.js");





var _jsxFileName = "/Users/wpierce/projects/caddolakebayoutours/pages/photo-gallery.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var Page =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Page, _React$Component);

  function Page(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Page).call(this, props));
    _this.state = {
      activeTab: 'photo-gallery'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        pageTitle: "Photography Gallery - Caddo Lake Bayou Tours",
        canonical: "/photo-gallery",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_8__["default"], {
        imagePath: 'caddo-lake-swamp.jpg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "352903360",
        __self: this
      }, "section.jsx-352903360{background:#fafafa;}ul.jsx-352903360{list-style-type:none;padding:0;margin:0 0 1rem 0;}@media(min-width:768px){.flex.jsx-352903360{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.item.jsx-352903360{width:50%;}img.jsx-352903360{display:block;margin:0 auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2NhZGRvbGFrZWJheW91dG91cnMvcGFnZXMvcGhvdG8tZ2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQnNCLEFBR2tDLEFBR0UsQUFPTixBQUlILEFBSUksVUFIaEIsSUFJZ0IsS0FsQmxCLEVBR1ksT0FnQlYsR0Fma0Isa0JBQ3BCLHlCQUtFIiwiZmlsZSI6Ii9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2NhZGRvbGFrZWJheW91dG91cnMvcGFnZXMvcGhvdG8tZ2FsbGVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8nXG5pbXBvcnQgSW1hZ2VHYWxsZXJ5IGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2VHYWxsZXJ5J1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoIHByb3BzICkge1xuICAgIHN1cGVyKCBwcm9wcyApXG4gIFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVUYWI6ICdwaG90by1nYWxsZXJ5JyxcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgcGFnZVRpdGxlPXtgUGhvdG9ncmFwaHkgR2FsbGVyeSAtIENhZGRvIExha2UgQmF5b3UgVG91cnNgfSBjYW5vbmljYWw9e2AvcGhvdG8tZ2FsbGVyeWB9PlxuICAgICAgICA8SGVybyBpbWFnZVBhdGg9eydjYWRkby1sYWtlLXN3YW1wLmpwZyd9IC8+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgICB9ICBcbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAuZmxleCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29udGFpbmVyYH0+XG4gICAgICAgICAgICAgIDxoMT5QaG90byBHYWxsZXJ5PC9oMT5cbiAgICAgICAgICAgICAgPHA+SGVyZSBhcmUgc29tZSBwaG90b3Mgb2YgQ2FkZG8gTGFrZSBhbmQgdGhlIHN1cnJvdW5kaW5nIGFyZWEgc28geW91IGNhbiBnZXQgYW4gaWRlYSBvZiB3aGF0IGl0J3MgZ29pbmcgdG8gYmUgbGlrZS4gWW91IGdldCB0aGUgYmVzdCB2aWV3cyBvZiB0aGUgbGFrZSB3aGlsZSBvdXQgb24gdGhlIGd1aWRlZCBib2F0IHRvdXJzIHNvIHRoZSB2aWV3cyBhcmUgc3BlY3RhY3VsYXIuPC9wPlxuICAgICAgICAgICAgICA8cD5PZiBjb3Vyc2UsIGxpa2UgbW9zdCB0aGluZ3MsIGl0J3MgZXZlbiBtb3JlIGJlYXV0aWZ1bCBpbiBwZXJzb24uIFlvdSBkb24ndCBoYXZlIHRvIHRha2Ugb3VyIHdvcmQgZm9yIGl0IHRob3VnaCwgeW91IGNhbiBjb21lIGFuZCBzZWUgZm9yIHlvdXJzZWxmLiA8YSBocmVmPXtgL2NvbnRhY3QvYH0+Q2FsbCB1cyB0b2RheSE8L2E+PC9wPlxuICAgICAgICAgICAgICA8SW1hZ2VHYWxsZXJ5IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZSJdfQ== */\n/*@ sourceURL=/Users/wpierce/projects/caddolakebayoutours/pages/photo-gallery.js */"), __jsx("section", {
        className: "jsx-352903360",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-352903360" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-352903360",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Photo Gallery"), __jsx("p", {
        className: "jsx-352903360",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Here are some photos of Caddo Lake and the surrounding area so you can get an idea of what it's going to be like. You get the best views of the lake while out on the guided boat tours so the views are spectacular."), __jsx("p", {
        className: "jsx-352903360",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Of course, like most things, it's even more beautiful in person. You don't have to take our word for it though, you can come and see for yourself. ", __jsx("a", {
        href: "/contact/",
        className: "jsx-352903360",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Call us today!")), __jsx(_components_ImageGallery__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }))));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=photo-gallery.js.a216d0463dcd98cb7d2f.hot-update.js.map