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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Form */ "./components/Form.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! cloudinary-react */ "./node_modules/cloudinary-react/lib/index.js");
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(cloudinary_react__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/Users/wpierce/projects/caddolakebayoutours/pages/contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;







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
      return __jsx("div", {
        className: "layout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-4249051786" + " " + 'main-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx(Header, {
        pageTitle: 'Contact | Caddo Lake Bayou Tours',
        canonical: '/contact',
        activeTab: 'contact',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_10__["default"], {
        imagePath: 'caddo-lake-swamp.jpg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4249051786",
        __self: this
      }, "ul.jsx-4249051786{list-style-type:none;padding:0;margin:0 0 1rem 0;}@media(min-width:768px){.flex.jsx-4249051786{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.item.jsx-4249051786{width:50%;}img.jsx-4249051786{display:block;margin:0 auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2NhZGRvbGFrZWJheW91dG91cnMvcGFnZXMvY29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RnNCLEFBR29DLEFBT04sQUFJSCxBQUlJLFVBSGhCLElBSWdCLE9BZk4sT0FnQlYsR0Fma0Isa0JBQ3BCLHlCQUtFIiwiZmlsZSI6Ii9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2NhZGRvbGFrZWJheW91dG91cnMvcGFnZXMvY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8nXG5pbXBvcnQgRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm0nXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgeyBJbWFnZSwgQ2xvdWRpbmFyeUNvbnRleHQsIFRyYW5zZm9ybWF0aW9uIH0gZnJvbSAnY2xvdWRpbmFyeS1yZWFjdCdcblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcbiAgICBzdXBlciggcHJvcHMgKVxuICAgIFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgbWVzc2FnZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBzZW50OiBmYWxzZSxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgICAgYnV0dG9uVGV4dDogJ1NlbmQgTWVzc2FnZScsXG4gICAgICBhY3RpdmVUYWI6ICdjb250YWN0JyxcbiAgICB9XG5cbiAgICB0aGlzLm9uRmlyc3ROYW1lQ2hhbmdlID0gdGhpcy5vbkZpcnN0TmFtZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkxhc3ROYW1lQ2hhbmdlID0gdGhpcy5vbkxhc3ROYW1lQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uRW1haWxDaGFuZ2UgPSB0aGlzLm9uRW1haWxDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25NZXNzYWdlQ2hhbmdlID0gdGhpcy5vbk1lc3NhZ2VDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25TdWJtaXQgPSB0aGlzLm9uU3VibWl0LmJpbmQodGhpcylcbiAgfVxuXG4gIG9uRmlyc3ROYW1lQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlyc3ROYW1lOiBlLnRhcmdldC52YWx1ZSB9KVxuICB9XG5cbiAgb25MYXN0TmFtZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxhc3ROYW1lOiBlLnRhcmdldC52YWx1ZSB9KVxuICB9XG5cbiAgb25NZXNzYWdlQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogZS50YXJnZXQudmFsdWUgfSlcbiAgfVxuXG4gIG9uRW1haWxDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSlcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuXG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICBuYW1lOiBgJHt0aGlzLnN0YXRlLmZpcnN0TmFtZX0gJHt0aGlzLnN0YXRlLmxhc3ROYW1lfWAsXG4gICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgIG1lc3NhZ2U6IHRoaXMuc3RhdGUubWVzc2FnZVxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGZldGNoKCcvL2NhZGRvLWVtYWlsLXNlcnZlci5oZXJva3VhcHAuY29tL3NlbmQvbWFpbCcsIHtcbiAgICAgIG1vZGU6ICduby1jb3JzJyxcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQWNjZXB0JzogJyovKicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgfSkudGhlbiggKCByZXMgKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VudDogdHJ1ZSB9KVxuICAgICAgdGhpcy5yZXNldEZvcm0oKVxuICAgIH0pXG4gIH1cblxuICByZXNldEZvcm0oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgbWVzc2FnZTogJycsXG4gICAgICBidXR0b25UZXh0OiAnU2VuZCcsXG4gICAgfSlcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGxheW91dGB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J21haW4tY29udGFpbmVyJ30+XG4gICAgICAgICAgPEhlYWRlciBcbiAgICAgICAgICAgIHBhZ2VUaXRsZT17J0NvbnRhY3QgfCBDYWRkbyBMYWtlIEJheW91IFRvdXJzJ30gXG4gICAgICAgICAgICBjYW5vbmljYWw9eycvY29udGFjdCd9IFxuICAgICAgICAgICAgYWN0aXZlVGFiPXsnY29udGFjdCd9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SGVybyBpbWFnZVBhdGg9eydjYWRkby1sYWtlLXN3YW1wLmpwZyd9IC8+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YCAgXG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgLmZsZXgge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2lkZS1odWcgd2l0aC1wYWRkaW5nXCI+XG4gICAgICAgICAgICA8aDE+Q29udGFjdDwvaDE+XG4gICAgICAgICAgICA8cD5JZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zIHBsZWFzZSBnaXZlIHVzIGEgY2FsbCBvciB5b3UgY2FuIGNvbnRhY3QgdXMgdmlhIGVtYWlsIGFuZCB3ZSB3aWxsIGdldCBiYWNrIHRvIHlvdSBhcyBzb29uIGFzIHBvc3NpYmxlLiBXZSB3aWxsIGFuc3dlciBhbnkgcXVlc3Rpb25zIHlvdSBtYXkgaGF2ZSBhYm91dCB3aGF0IGtpbmQgb2YgZ3VpZGVkIGJvYXQgdG91cnMgd2UgaGF2ZSBhdmFpbGFibGUsIHdoYXQgeW91IGNhbiBleHBlY3QgdG8gZW5jb3VudGVyIHdoaWxlIG9uIHRoZSB0b3VyIGFuZCBvZiBjb3Vyc2Ugd2hhdCB5b3UgY2FuIGFuZCBjYW4gbm90IGRvIG9uIHdoaWxlIG9uIHRoZSB0b3VyIG9mIHRoZSBsYWtlLjwvcD5cbiAgICAgICAgICAgIDxwPkNvbWUgYW5kIGVuam95IHRoZSB3b25kZXJmdWwgZXhwZXJpZW5jZSB0aGF0IGlzIENhZGRvIExha2UuIFdlIGNhbid0IHdhaXQgdG8gc2hhcmUgaXQgd2l0aCB5b3UhPC9wPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzaWRlLWh1Z1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4J30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnaXRlbSB0ZXh0LWxlZnQnfT5cbiAgICAgICAgICAgICAgICA8aDM+UmljaCBNY0ZhcmxhbmQgPHN0cm9uZz5Ub3VyIEd1aWRlPC9zdHJvbmc+PC9oMz5cbiAgICAgICAgICAgICAgICA8cD5Ub3VycyBhdmFpbGFibGUgNyBkYXlzIGEgd2VlaywgYW55IHRpbWUgZnJvbSBzdW5yaXNlIHRvIHN1bnNldC48L3A+XG4gICAgICAgICAgICAgICAgPHA+Qm9hdCB0b3VycyBsYXN0IGFwcHJveGltYXRlbHkgb25lIGhvdXIuPC9wPlxuICAgICAgICAgICAgICAgIDxwPk1ha2Ugc3VyZSB0byBsaWtlIHVzIG9uIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vY2FkZG90b3Vycy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5GYWNlQm9vazwvYT48L3A+XG4gICAgICAgICAgICAgICAgPGgzPkFkZHJlc3M8L2gzPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPjQ0OSBDeXByZXNzIERyaXZlPC9zdHJvbmc+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5VbmNlcnRhaW4gVFggNzU2NjE8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+UGhvbmU6IDwvc3Ryb25nPjkwMy01NzAtMjE2OTwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8aDQ+Qm9vayBhIGJvYXQgdG91ciBvciBzZW5kIGEgbWVzc2FnZTwvaDQ+XG4gICAgICAgICAgICAgICAgPHA+QXNrIGFib3V0IGJvYXQgdG91ciByZXNlcnZhdGlvbnMsIGZpc2hpbmcgdHJpcHMsIGF2YWlsYWJpbGl0eSBvZiBkYXRlcyBvciB0aW1lcywgb3IgYW55IG90aGVyIGdlbmVyYWwgcXVlc3Rpb25zLjwvcD5cbiAgICAgICAgICAgICAgICA8Rm9ybSBcbiAgICAgICAgICAgICAgICAgIG9uRmlyc3ROYW1lQ2hhbmdlPXt0aGlzLm9uRmlyc3ROYW1lQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25MYXN0TmFtZUNoYW5nZT17dGhpcy5vbkxhc3ROYW1lQ2hhbmdlfSAgXG4gICAgICAgICAgICAgICAgICBvbk1lc3NhZ2VDaGFuZ2U9e3RoaXMub25NZXNzYWdlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25FbWFpbENoYW5nZT17dGhpcy5vbkVtYWlsQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9XG4gICAgICAgICAgICAgICAgICBzdGF0ZT17dGhpcy5zdGF0ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydpdGVtJ30+XG4gICAgICAgICAgICAgIDxDbG91ZGluYXJ5Q29udGV4dCBjbG91ZE5hbWU9XCJ0cGllcmNlMzZcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICBwdWJsaWNJZD1cImxha2Utc3Vuc2V0LTIuanBnXCJcbiAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICBjcm9wPVwic2NhbGVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxUcmFuc2Zvcm1hdGlvbiBxdWFsaXR5PVwiYXV0b1wiIGZldGNoRm9ybWF0PVwiYXV0b1wiIC8+XG4gICAgICAgICAgICAgICAgPC9JbWFnZT5cbiAgICAgICAgICAgICAgPC9DbG91ZGluYXJ5Q29udGV4dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlIl19 */\n/*@ sourceURL=/Users/wpierce/projects/caddolakebayoutours/pages/contact.js */"), __jsx("section", {
        className: "jsx-4249051786" + " " + "side-hug with-padding",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Contact"), __jsx("p", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "If you have any questions please give us a call or you can contact us via email and we will get back to you as soon as possible. We will answer any questions you may have about what kind of guided boat tours we have available, what you can expect to encounter while on the tour and of course what you can and can not do on while on the tour of the lake."), __jsx("p", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Come and enjoy the wonderful experience that is Caddo Lake. We can't wait to share it with you!")), __jsx("section", {
        className: "jsx-4249051786" + " " + "side-hug",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-4249051786" + " " + 'flex',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-4249051786" + " " + 'item text-left',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Rich McFarland ", __jsx("strong", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Tour Guide")), __jsx("p", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Tours available 7 days a week, any time from sunrise to sunset."), __jsx("p", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Boat tours last approximately one hour."), __jsx("p", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Make sure to like us on ", __jsx("a", {
        href: "https://www.facebook.com/caddotours/",
        target: "_blank",
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "FaceBook")), __jsx("h3", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Address"), __jsx("ul", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, __jsx("li", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("strong", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "449 Cypress Drive")), __jsx("li", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "Uncertain TX 75661"), __jsx("li", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, __jsx("strong", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Phone: "), "903-570-2169")), __jsx("h4", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Book a boat tour or send a message"), __jsx("p", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Ask about boat tour reservations, fishing trips, availability of dates or times, or any other general questions."), __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onFirstNameChange: this.onFirstNameChange,
        onLastNameChange: this.onLastNameChange,
        onMessageChange: this.onMessageChange,
        onEmailChange: this.onEmailChange,
        onSubmit: this.onSubmit,
        state: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-4249051786" + " " + 'item',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_13__["CloudinaryContext"], {
        cloudName: "tpierce36",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_13__["Image"], {
        publicId: "lake-sunset-2.jpg",
        responsive: true,
        width: "auto",
        crop: "scale",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, __jsx(cloudinary_react__WEBPACK_IMPORTED_MODULE_13__["Transformation"], {
        quality: "auto",
        fetchFormat: "auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      })))))), __jsx(Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      })));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=contact.js.b7025ee15f181bf8084c.hot-update.js.map