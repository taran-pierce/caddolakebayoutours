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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cloudinary-react */ "./node_modules/cloudinary-react/lib/index.js");
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cloudinary_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _imageGallery_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./imageGallery.scss */ "./components/imageGallery.scss");
/* harmony import */ var _imageGallery_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_imageGallery_scss__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/wpierce/projects/caddolakebayoutours/components/ImageGallery.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



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
      lastSlide: 11,
      lightBoxOpen: false
    };
    _this.previousImage = _this.previousImage.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.nextImage = _this.nextImage.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.toggleLightBox = _this.toggleLightBox.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
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
    key: "toggleLightBox",
    value: function toggleLightBox(event) {
      event.preventDefault();
      this.setState({
        lightBoxOpen: !this.state.lightBoxOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          currentSlide = _this$state.currentSlide,
          lightBoxOpen = _this$state.lightBoxOpen;
      return __jsx("section", {
        className: "image-gallery",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Pictures of Caddo Lake"), __jsx("div", {
        className: "gallery-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("a", {
        className: "btn ".concat(currentSlide == 1 && 'disabled'),
        onClick: this.previousImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Previous")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("a", {
        className: "btn ".concat(currentSlide == 11 && 'disabled'),
        onClick: this.nextImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Next")))), __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_8__["CloudinaryContext"], {
        cloudName: "tpierce36",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("a", {
        href: "https://res.cloudinary.com/tpierce36/image/upload/v1578238226/".concat(galleryName).concat(currentSlide, ".jpg"),
        alt: "Image Gallery ".concat(currentSlide),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        publicId: "".concat(galleryName).concat(currentSlide, ".jpg"),
        responsive: true,
        width: "auto",
        crop: "scale",
        alt: "Caddo Lake #".concat(currentSlide),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_8__["Transformation"], {
        quality: "auto",
        fetchFormat: "auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })))))), __jsx("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("a", {
        className: "btn ".concat(currentSlide == 1 && 'disabled'),
        onClick: this.previousImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Previous")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx("a", {
        className: "btn ".concat(currentSlide == 11 && 'disabled'),
        onClick: this.nextImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Next"))))));
    }
  }]);

  return ImageGallery;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

ImageGallery.propTypes = {
  currentSlide: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  previousImage: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  nextImage: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (ImageGallery);

/***/ })

})
//# sourceMappingURL=photo-gallery.js.0f44b894665e0f1aff91.hot-update.js.map