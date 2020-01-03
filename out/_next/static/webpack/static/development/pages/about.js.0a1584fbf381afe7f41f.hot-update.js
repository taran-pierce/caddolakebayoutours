webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_SideHug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SideHug */ "./components/SideHug.js");





var _jsxFileName = "/Users/wpierce/projects/caddolakebayoutours/pages/about.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var sideHugData1 = {
  image: {
    path: 'lake-sunset.jpg',
    alt: 'Caddo Lake, rich with history'
  },
  textData: [{
    titles: ['<h3>About Caddo Lake Bayou Tours</h3>'],
    paragraphs: ['We can take you out on a variety of tours on Caddo Lake so that you can relax and enjoy your time knowing you are in the hands of a well trained guide while on the lake.', 'No matter what you are looking for, so long as you are wanting to have a good time, there are plenty of things to do on Caddo Lake.'],
    lists: [{
      'type': 'ul',
      'items': [{
        'title': 'Fishing Trips',
        'paragraphs': ['There are plenty of great fishing spots across the lake. Come take a guided fishing trip for all your fishing needs.']
      }, {
        'title': 'Sightseeing',
        'paragraphs': ['Enjoy the beautiful lake, lots of wildlife and the overall mystique of Caddo Lake.', 'Visit historic Jefferson, Texas and enjoy all that it has to offer.']
      }, {
        'title': 'Sunrise and sunset tours',
        'paragraphs': ['Caddo Lake is always a beautiful sight to behold, but the sunrises and sunsets out on the lake are among some of the most gorgeous ones in the South.', 'Contact us today to find out about the availability of tours and to check on seasonal prices.']
      }]
    }],
    cta: '<a class="btn btn-info" href="/contact">Contact us today</a>'
  }]
};
var sideHugData2 = {
  image: {
    path: 'lake-spanish-moss.jpg',
    alt: 'Caddo Lake, rich with history'
  },
  textData: [{
    titles: ['<h2>About Caddo Lake</h2>'],
    paragraphs: ['Caddo Lake is steeped in history dating back to the early 1800\'s. The history which includes the Caddo Indian tribes that inhabited the area and the steamboat navigational trade from New Orleans, Louisiana to Jefferson, Texas are just some of the lake\'s rich history.', 'Check out some of our photos from around various spots of Caddo Lake.', '<a class="btn btn-info" href="photo-gallery">View Photos</a>']
  }],
  imageFirst: true
};
var sideHugData3 = {
  image: {
    path: 'lake-spanish-moss.jpg',
    alt: 'Caddo Lake, rich with history'
  },
  textData: [{
    titles: ['<h2>Photography Tours</h2>'],
    paragraphs: ['Looking to get some great pictures of the beautiful Bald Cypress trees covered in Spanish moss? Schedule a guided tour and go on an adventure to get all the images you need to complete your photography collection.', 'Whether you want to go on a wildlife photography tour with a group or with the peace and quiet of being alone to get those perfect shots, we can accommodate.']
  }]
};

var Page =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Page, _React$Component);

  function Page(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Page).call(this, props));
    _this.state = {
      activeTab: 'about'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        pageTitle: "About - Caddo Lake Bayou Tours",
        canonical: "/about/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_7__["default"], {
        imagePath: "lake-sunset-2.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), __jsx(_components_SideHug__WEBPACK_IMPORTED_MODULE_8__["default"], {
        data: sideHugData1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), __jsx(_components_SideHug__WEBPACK_IMPORTED_MODULE_8__["default"], {
        data: sideHugData2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), __jsx(_components_SideHug__WEBPACK_IMPORTED_MODULE_8__["default"], {
        data: sideHugData3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=about.js.0a1584fbf381afe7f41f.hot-update.js.map