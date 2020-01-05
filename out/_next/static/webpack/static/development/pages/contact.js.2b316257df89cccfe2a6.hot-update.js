webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_SideHug__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SideHug */ "./components/SideHug.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Form */ "./components/Form.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "/Users/wpierce/projects/caddolakebayoutours/pages/contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;







var Page =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Page, _React$Component);

  function Page(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Page);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Page).call(this, props));
    _this.state = {
      firstName: '',
      lastName: '',
      message: '',
      email: '',
      sent: false,
      error: null,
      buttonText: 'Send Message',
      activeTab: 'contact'
    };
    _this.onFirstNameChange = _this.onFirstNameChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onLastNameChange = _this.onLastNameChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onEmailChange = _this.onEmailChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onMessageChange = _this.onMessageChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onSubmit = _this.onSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Page, [{
    key: "onFirstNameChange",
    value: function onFirstNameChange(e) {
      this.setState({
        firstName: e.target.value
      });
    }
  }, {
    key: "onLastNameChange",
    value: function onLastNameChange(e) {
      this.setState({
        lastName: e.target.value
      });
    }
  }, {
    key: "onMessageChange",
    value: function onMessageChange(e) {
      this.setState({
        message: e.target.value
      });
    }
  }, {
    key: "onEmailChange",
    value: function onEmailChange(e) {
      this.setState({
        email: e.target.value
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this2 = this;

      var data = {
        name: "".concat(this.state.firstName, " ").concat(this.state.lastName),
        email: this.state.email,
        message: this.state.message
      };
      event.preventDefault();
      fetch('//caddo-email-server.herokuapp.com/send/mail', {
        mode: 'no-cors',
        method: 'post',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)
      }).then(function (res) {
        _this2.setState({
          sent: true
        });

        _this2.resetForm();
      });
    }
  }, {
    key: "resetForm",
    value: function resetForm() {
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        buttonText: 'Send'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var sideHugData1 = {
        image: {
          path: 'lake-with-pier.jpg',
          alt: 'A pier on Caddo Lake'
        },
        textData: [{
          titles: ['<h2>Questions about tours?</h2>'],
          paragraphs: ['If you have any questions please give us a call or you can contact us via email and we will get back to you as soon as possible. We will answer any questions you may have about what kind of guided boat tours we have available, what you can expect to encounter while on the tour and of course what you can and can not do on while on the tour of the lake.', 'Come and enjoy the wonderful experience that is Caddo Lake. We can\'t wait to share it with you and don\'t forgot to like us on our <a href="https://www.facebook.com/caddotours/" target="_blank">FaceBook page</a>!'],
          lists: [{
            'type': 'ul',
            'items': [{
              'title': 'Where does the tour start?',
              'paragraphs': ['All tours start and end at the Shady Glade Marina']
            }, {
              'paragraphs': ['<strong>Address</strong>', '449 Cypress Drive', 'Uncertain TX 75661', '<strong>Phone:</strong> <a href="tel:1-903-570-2169">903-570-2169</a>']
            }]
          }]
        }]
      };
      var sideHugData2 = {
        image: {
          path: 'lake-trees-in-fall.jpg',
          alt: ''
        },
        imageFirst: true,
        textData: [{
          titles: ['<h2>Types of Tours for Caddo Lake</h2>'],
          lists: [{
            'type': 'ul',
            'items': [{
              'title': 'Guided photography tour',
              'paragraphs': ['Whether you are looking to take some photography of the abundant wildlife here at Caddo Lake or some of the breath taking nature, we can show you all the best places on the lake amidst the maze of bayous and Bald Cypress trees.']
            }, {
              'title': 'Sunrise or sunset tours',
              'paragraphs': ['Who can resist seeing a gorgeous sunset or sunrise over a lake? Caddo Lake is picturesque in every way, shape and form. Book a tour today and find out for yourself!']
            }, {
              'title': 'Fishing trips',
              'paragraphs': ['With vast amounts of experience and knowledge of Caddo Lake, we can take you to all the best fishing spots to ensure you will have a great time and a great catch.']
            }, {
              'title': 'Sightseeing trips',
              'paragraphs': ['If taking pictures isn\'t quite your thing then just taking a relaxing ride on Caddo Lake and getting to see the bayous and how they all intertwine first hand is worth the experience alone. Come and check out the wonders of Caddo Lake today!']
            }, {
              'title': 'and more!',
              'paragraphs': ['There are so many things available to do and see on the lake that we couldn\'t list them all. If you think of something that you would like to do or see and you wonder if we can accommodate those plans, just send us a message and let us know! We will get back to you as soon as possible to let you know if we can help out.']
            }]
          }]
        }]
      };
      var formData = {
        image: {
          path: 'lake-cypress-trees.jpg',
          alt: 'Caddo Lake with Cypress trees'
        },
        textData: [{
          titles: ['<h1>Contact Caddo Lake Bayou Tours</h1>', '<h4>Rich McFarland <strong>Tour Guide</strong></h4>'],
          paragraphs: ['Tours available 7 days a week, any time from sunrise to sunset. Boat tours last approximately one hour.', 'Book a bout tour today or ask about boat tour reservations, photography tour, fishing trips, availability of dates or times, or any other general questions.']
        }]
      };
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        pageTitle: "Contact - Caddo Lake Bayou Tours",
        canonical: "/contact/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_9__["default"], {
        imagePath: "mike-moir-2.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }), __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_11__["default"], {
        data: formData,
        onFirstNameChange: this.onFirstNameChange,
        onLastNameChange: this.onLastNameChange,
        onMessageChange: this.onMessageChange,
        onEmailChange: this.onEmailChange,
        onSubmit: this.onSubmit,
        state: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }), __jsx(_components_SideHug__WEBPACK_IMPORTED_MODULE_10__["default"], {
        data: sideHugData1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }), __jsx(_components_SideHug__WEBPACK_IMPORTED_MODULE_10__["default"], {
        data: sideHugData2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=contact.js.2b316257df89cccfe2a6.hot-update.js.map