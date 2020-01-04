webpackHotUpdate("static/development/pages/photo-gallery.js",{

/***/ "./components/ImageGallery.js":
/*!************************************!*\
  !*** ./components/ImageGallery.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cloudinary-react */ "./node_modules/cloudinary-react/lib/index.js");
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(cloudinary_react__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/Users/wpierce/projects/caddolakebayoutours/components/ImageGallery.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var galleryName = 'gallery/caddo-lake-';

var ImageGallery =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ImageGallery, _React$Component);

  function ImageGallery(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ImageGallery);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ImageGallery).call(this, props));
    _this.state = {
      currentSlide: 1,
      lastSlide: 11
    };
    _this.previousImage = _this.previousImage.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.nextImage = _this.nextImage.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ImageGallery, [{
    key: "nextImage",
    value: function nextImage(event) {
      event.preventDefault();
      var nextSlide = this.state.currentSlide + 1;

      if (this.state.currentSlide != this.state.lastSlide) {
        this.setState({
          currentSlide: nextSlide
        });
      }
    }
  }, {
    key: "previousImage",
    value: function previousImage(event) {
      event.preventDefault();
      var previousSlide = this.state.currentSlide - 1;

      if (this.state.currentSlide != 1) {
        this.setState({
          currentSlide: previousSlide
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("section", {
        className: "jsx-4144189095" + " " + "photo-gallery",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "4144189095",
        __self: this
      }, ".gallery-container.jsx-4144189095{border:1px solid #cacaca;padding:1rem;margin:1rem .5rem;}ul.jsx-4144189095{list-style-type:none;margin:0;padding:0;}nav.jsx-4144189095 ul.jsx-4144189095{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}nav.jsx-4144189095 ul.jsx-4144189095 li.jsx-4144189095{width:50%;}li.jsx-4144189095>a.jsx-4144189095{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2NhZGRvbGFrZWJheW91dG91cnMvY29tcG9uZW50cy9JbWFnZUdhbGxlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENvQixBQUdzQyxBQU1KLEFBTVIsQUFLSCxBQUlJLFVBSGhCLElBSUEsT0FmVyxJQU5JLEtBT0gsUUFOUSxFQU9wQixnQkFOQSxrQkFVbUIsK0RBQ25CIiwiZmlsZSI6Ii9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2NhZGRvbGFrZWJheW91dG91cnMvY29tcG9uZW50cy9JbWFnZUdhbGxlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBJbWFnZSwgQ2xvdWRpbmFyeUNvbnRleHQsIFRyYW5zZm9ybWF0aW9uIH0gZnJvbSAnY2xvdWRpbmFyeS1yZWFjdCdcblxuY29uc3QgZ2FsbGVyeU5hbWUgPSAnZ2FsbGVyeS9jYWRkby1sYWtlLSdcblxuY2xhc3MgSW1hZ2VHYWxsZXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoIHByb3BzICkge1xuICAgIHN1cGVyKCBwcm9wcyApXG4gIFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50U2xpZGU6IDEsXG4gICAgICBsYXN0U2xpZGU6IDExXG4gICAgfVxuXG4gICAgdGhpcy5wcmV2aW91c0ltYWdlID0gdGhpcy5wcmV2aW91c0ltYWdlLmJpbmQodGhpcylcbiAgICB0aGlzLm5leHRJbWFnZSA9IHRoaXMubmV4dEltYWdlLmJpbmQodGhpcylcbiAgfVxuXG4gIG5leHRJbWFnZSggZXZlbnQgKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgbGV0IG5leHRTbGlkZSA9IHRoaXMuc3RhdGUuY3VycmVudFNsaWRlICsgMVxuXG4gICAgaWYgKCB0aGlzLnN0YXRlLmN1cnJlbnRTbGlkZSAhPSB0aGlzLnN0YXRlLmxhc3RTbGlkZSApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50U2xpZGU6IG5leHRTbGlkZSB9KVxuICAgIH1cbiAgfVxuXG4gIHByZXZpb3VzSW1hZ2UoIGV2ZW50ICkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGxldCBwcmV2aW91c1NsaWRlID0gdGhpcy5zdGF0ZS5jdXJyZW50U2xpZGUgLSAxXG5cbiAgICBpZiAoIHRoaXMuc3RhdGUuY3VycmVudFNsaWRlICE9IDEgKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFNsaWRlOiBwcmV2aW91c1NsaWRlIH0pXG4gICAgfVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YHBob3RvLWdhbGxlcnlgfT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5nYWxsZXJ5LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAuNXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG5hdiB1bCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmF2IHVsIGxpIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICBsaSA+IGEge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxoMj5QaWN0dXJlcyBvZiBDYWRkbyBMYWtlPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BnYWxsZXJ5LWNvbnRhaW5lcmB9PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPENsb3VkaW5hcnlDb250ZXh0IGNsb3VkTmFtZT1cInRwaWVyY2UzNlwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgIHB1YmxpY0lkPXtgJHtnYWxsZXJ5TmFtZX0ke3RoaXMuc3RhdGUuY3VycmVudFNsaWRlfS5qcGdgfVxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZVxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgIGNyb3A9XCJzY2FsZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zZm9ybWF0aW9uIHF1YWxpdHk9XCJhdXRvXCIgZmV0Y2hGb3JtYXQ9XCJhdXRvXCIgLz5cbiAgICAgICAgICAgICAgICA8L0ltYWdlPlxuICAgICAgICAgICAgICA8L0Nsb3VkaW5hcnlDb250ZXh0PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BidG4gJHt0aGlzLnN0YXRlLmN1cnJlbnRTbGlkZSA9PSAxICYmICdkaXNhYmxlZCd9YH0gb25DbGljaz17dGhpcy5wcmV2aW91c0ltYWdlfT5QcmV2aW91czwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGJ0biAke3RoaXMuc3RhdGUuY3VycmVudFNsaWRlID09IDExICYmICdkaXNhYmxlZCd9YH0gb25DbGljaz17dGhpcy5uZXh0SW1hZ2V9Pk5leHQ8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VHYWxsZXJ5Il19 */\n/*@ sourceURL=/Users/wpierce/projects/caddolakebayoutours/components/ImageGallery.js */"), __jsx("h2", {
        className: "jsx-4144189095",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Pictures of Caddo Lake"), __jsx("div", {
        className: "jsx-4144189095" + " " + "gallery-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("ul", {
        className: "jsx-4144189095",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("li", {
        className: "jsx-4144189095",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_10__["CloudinaryContext"], {
        cloudName: "tpierce36",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_10__["Image"], {
        publicId: "".concat(galleryName).concat(this.state.currentSlide, ".jpg"),
        responsive: true,
        width: "auto",
        crop: "scale",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_10__["Transformation"], {
        quality: "auto",
        fetchFormat: "auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }))))), __jsx("nav", {
        className: "jsx-4144189095",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("ul", {
        className: "jsx-4144189095",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("li", {
        className: "jsx-4144189095",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("a", {
        onClick: this.previousImage,
        className: "jsx-4144189095" + " " + "btn ".concat(this.state.currentSlide == 1 && 'disabled'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Previous")), __jsx("li", {
        className: "jsx-4144189095",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx("a", {
        onClick: this.nextImage,
        className: "jsx-4144189095" + " " + "btn ".concat(this.state.currentSlide == 11 && 'disabled'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Next"))))));
    }
  }]);

  return ImageGallery;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ImageGallery);

/***/ })

})
//# sourceMappingURL=photo-gallery.js.2cfa0a5145c7afde681c.hot-update.js.map