webpackHotUpdate("static/development/pages/directions.js",{

/***/ "./pages/directions.js":
/*!*****************************!*\
  !*** ./pages/directions.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_SideHug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SideHug */ "./components/SideHug.js");






var _jsxFileName = "/Users/wpierce/projects/caddolakebayoutours/pages/directions.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var sideHugData1 = {
  googleMap: '<iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13428.266285705415!2d-94.15337171079648!3d32.7108586943788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc79227c114d5c01d!2sCaddo+Lake+Bayou+Tours!5e0!3m2!1sen!2sus!4v1528217775632" width="100%" height="460" frameBorder="0" allowFullScreen></iframe>',
  textData: [{
    titles: ['<h1>Directions</h1>'],
    paragraphs: ['Knowing how to get somewhere is half the battle. Let me help you out because Caddo Lake is a gem that can be hard to find. Rest assured, once you make it to Caddo Lake you will find that it was well worth it.', 'All trips take off from Shady Glade Resort at their marina.', 'Caddo Lake is located between Marshall, Texas and Shreveport, Louisiana in Uncertain, Texas.', 'Bayou Tours is located at Shady Glade Resort, five miles from Caddo Lake State Park. <strong>Guide Boat tours are available daily.</strong>']
  }]
};
var sideHugData2 = {
  image: {
    path: 'lake-spanish-moss.jpg',
    alt: 'Spanish moss covered Cypress trees'
  },
  imageFirst: true,
  textData: [{
    titles: ['<h2>Take in the beauty</h2>'],
    paragraphs: ['Still not convinced that Caddo Lake is worth the visit? Check out our photo gallery to get a glimpse of what awaits you.', '<a class="btn" href="/photo-gallery/">Photo Gallery</a>', 'Let us make your next trip out to the lake a the most memorable one! We can take you on the best guided fishing trips, to the hidden spots for sunrises and sunsets or even just on a relaxing boat ride around the lake soaking in it\'s rich history.', '<a class="btn btn-info" href="/contact/">Book a Tour</a>']
  }]
};

var Page =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Page, _React$Component);

  function Page(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Page);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Page).call(this, props));
    _this.state = {
      activeTab: 'directions'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Page, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_7__["default"], {
        imagePath: "lake-cypress-trees-3.jpg",
        alt: "Caddo Lake cypress trees",
        bottom: 240,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), __jsx(_components_SideHug__WEBPACK_IMPORTED_MODULE_8__["default"], {
        data: sideHugData1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx(_components_SideHug__WEBPACK_IMPORTED_MODULE_8__["default"], {
        data: sideHugData2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Page.getInitialProps = function _callee(_ref) {
  var req, canonical, pageTitle, activeTab;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req = _ref.req;
          canonical = '/directions/';
          pageTitle = 'Directions - Caddo Lake Bayou Tours';
          activeTab = 'directions';
          return _context.abrupt("return", {
            canonical: canonical,
            pageTitle: pageTitle,
            activeTab: activeTab
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=directions.js.939823278ea720e0577e.hot-update.js.map