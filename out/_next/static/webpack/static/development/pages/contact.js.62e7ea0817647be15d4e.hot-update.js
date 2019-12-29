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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Form */ "./components/Form.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! cloudinary-react */ "./node_modules/cloudinary-react/lib/index.js");
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(cloudinary_react__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "/Users/wpierce/projects/caddolakebayoutours/pages/contact.js";









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
      buttonText: 'Send Message'
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
      event.preventDefault(); // fetch('/send/mail', {

      fetch('http://caddo-email-server.herokuapp.com/send/mail', {
        mode: 'no-cors',
        method: 'post',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)
      }).then(function (res) {
        res.status === 200 ? _this2.setState({
          sent: true
        }) : '';

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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "layout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4249051786" + " " + 'main-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        pageTitle: 'Contact | Caddo Lake Bayou Tours',
        canonical: '/contact',
        activeTab: 'contact',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_10__["default"], {
        imagePath: 'caddo-lake-swamp.jpg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4249051786",
        __self: this
      }, "ul.jsx-4249051786{list-style-type:none;padding:0;margin:0 0 1rem 0;}@media(min-width:768px){.flex.jsx-4249051786{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.item.jsx-4249051786{width:50%;}img.jsx-4249051786{display:block;margin:0 auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2NhZGRvbGFrZWJheW91dG91cnMvcGFnZXMvY29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRnNCLEFBR29DLEFBT04sQUFJSCxBQUlJLFVBSGhCLElBSWdCLE9BZk4sT0FnQlYsR0Fma0Isa0JBQ3BCLHlCQUtFIiwiZmlsZSI6Ii9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2NhZGRvbGFrZWJheW91dG91cnMvcGFnZXMvY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8nXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtJ1xuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IHsgSW1hZ2UsIENsb3VkaW5hcnlDb250ZXh0LCBUcmFuc2Zvcm1hdGlvbiB9IGZyb20gJ2Nsb3VkaW5hcnktcmVhY3QnXG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKSB7XG4gICAgc3VwZXIoIHByb3BzIClcbiAgICBcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgc2VudDogZmFsc2UsXG4gICAgICBlcnJvcjogbnVsbCxcbiAgICAgIGJ1dHRvblRleHQ6ICdTZW5kIE1lc3NhZ2UnXG4gICAgfVxuXG4gICAgdGhpcy5vbkZpcnN0TmFtZUNoYW5nZSA9IHRoaXMub25GaXJzdE5hbWVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25MYXN0TmFtZUNoYW5nZSA9IHRoaXMub25MYXN0TmFtZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkVtYWlsQ2hhbmdlID0gdGhpcy5vbkVtYWlsQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uTWVzc2FnZUNoYW5nZSA9IHRoaXMub25NZXNzYWdlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpXG4gIH1cblxuICBvbkZpcnN0TmFtZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpcnN0TmFtZTogZS50YXJnZXQudmFsdWUgfSlcbiAgfVxuXG4gIG9uTGFzdE5hbWVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsYXN0TmFtZTogZS50YXJnZXQudmFsdWUgfSlcbiAgfVxuXG4gIG9uTWVzc2FnZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IGUudGFyZ2V0LnZhbHVlIH0pXG4gIH1cblxuICBvbkVtYWlsQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pXG4gIH1cblxuICBvblN1Ym1pdCgpIHtcblxuICAgIGxldCBkYXRhID0ge1xuICAgICAgbmFtZTogYCR7dGhpcy5zdGF0ZS5maXJzdE5hbWV9ICR7dGhpcy5zdGF0ZS5sYXN0TmFtZX1gLFxuICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICBtZXNzYWdlOiB0aGlzLnN0YXRlLm1lc3NhZ2VcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyBmZXRjaCgnL3NlbmQvbWFpbCcsIHtcbiAgICBmZXRjaCgnaHR0cDovL2NhZGRvLWVtYWlsLXNlcnZlci5oZXJva3VhcHAuY29tL3NlbmQvbWFpbCcsIHtcbiAgICAgIG1vZGU6ICduby1jb3JzJyxcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQWNjZXB0JzogJyovKicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH0pLnRoZW4oICggcmVzICkgPT4ge1xuICAgICAgcmVzLnN0YXR1cyA9PT0gMjAwID8gdGhpcy5zZXRTdGF0ZSh7IHNlbnQ6IHRydWUgfSkgOiAnJztcbiAgICAgIHRoaXMucmVzZXRGb3JtKClcbiAgICB9KVxuICB9XG5cbiAgcmVzZXRGb3JtKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgYnV0dG9uVGV4dDogJ1NlbmQnLFxuICAgIH0pXG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BsYXlvdXRgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydtYWluLWNvbnRhaW5lcid9PlxuICAgICAgICAgIDxIZWFkZXIgXG4gICAgICAgICAgICBwYWdlVGl0bGU9eydDb250YWN0IHwgQ2FkZG8gTGFrZSBCYXlvdSBUb3Vycyd9IFxuICAgICAgICAgICAgY2Fub25pY2FsPXsnL2NvbnRhY3QnfSBcbiAgICAgICAgICAgIGFjdGl2ZVRhYj17J2NvbnRhY3QnfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEhlcm8gaW1hZ2VQYXRoPXsnY2FkZG8tbGFrZS1zd2FtcC5qcGcnfSAvPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2AgIFxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgIC5mbGV4IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLml0ZW0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNpZGUtaHVnIHdpdGgtcGFkZGluZ1wiPlxuICAgICAgICAgICAgPGgxPkNvbnRhY3Q8L2gxPlxuICAgICAgICAgICAgPHA+SWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucyBwbGVhc2UgZ2l2ZSB1cyBhIGNhbGwgb3IgeW91IGNhbiBjb250YWN0IHVzIHZpYSBlbWFpbCBhbmQgd2Ugd2lsbCBnZXQgYmFjayB0byB5b3UgYXMgc29vbiBhcyBwb3NzaWJsZS4gV2Ugd2lsbCBhbnN3ZXIgYW55IHF1ZXN0aW9ucyB5b3UgbWF5IGhhdmUgYWJvdXQgd2hhdCBraW5kIG9mIGd1aWRlZCBib2F0IHRvdXJzIHdlIGhhdmUgYXZhaWxhYmxlLCB3aGF0IHlvdSBjYW4gZXhwZWN0IHRvIGVuY291bnRlciB3aGlsZSBvbiB0aGUgdG91ciBhbmQgb2YgY291cnNlIHdoYXQgeW91IGNhbiBhbmQgY2FuIG5vdCBkbyBvbiB3aGlsZSBvbiB0aGUgdG91ciBvZiB0aGUgbGFrZS48L3A+XG4gICAgICAgICAgICA8cD5Db21lIGFuZCBlbmpveSB0aGUgd29uZGVyZnVsIGV4cGVyaWVuY2UgdGhhdCBpcyBDYWRkbyBMYWtlLiBXZSBjYW4ndCB3YWl0IHRvIHNoYXJlIGl0IHdpdGggeW91ITwvcD5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2lkZS1odWdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCd9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2l0ZW0gdGV4dC1sZWZ0J30+XG4gICAgICAgICAgICAgICAgPGgzPlJpY2ggTWNGYXJsYW5kIDxzdHJvbmc+VG91ciBHdWlkZTwvc3Ryb25nPjwvaDM+XG4gICAgICAgICAgICAgICAgPHA+VG91cnMgYXZhaWxhYmxlIDcgZGF5cyBhIHdlZWssIGFueSB0aW1lIGZyb20gc3VucmlzZSB0byBzdW5zZXQuPC9wPlxuICAgICAgICAgICAgICAgIDxwPkJvYXQgdG91cnMgbGFzdCBhcHByb3hpbWF0ZWx5IG9uZSBob3VyLjwvcD5cbiAgICAgICAgICAgICAgICA8cD5NYWtlIHN1cmUgdG8gbGlrZSB1cyBvbiA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2NhZGRvdG91cnMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RmFjZUJvb2s8L2E+PC9wPlxuICAgICAgICAgICAgICAgIDxoMz5BZGRyZXNzPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz40NDkgQ3lwcmVzcyBEcml2ZTwvc3Ryb25nPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+VW5jZXJ0YWluIFRYIDc1NjYxPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPlBob25lOiA8L3N0cm9uZz45MDMtNTcwLTIxNjk8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGg0PkJvb2sgYSBib2F0IHRvdXIgb3Igc2VuZCBhIG1lc3NhZ2U8L2g0PlxuICAgICAgICAgICAgICAgIDxwPkFzayBhYm91dCBib2F0IHRvdXIgcmVzZXJ2YXRpb25zLCBmaXNoaW5nIHRyaXBzLCBhdmFpbGFiaWxpdHkgb2YgZGF0ZXMgb3IgdGltZXMsIG9yIGFueSBvdGhlciBnZW5lcmFsIHF1ZXN0aW9ucy48L3A+XG4gICAgICAgICAgICAgICAgPEZvcm0gXG4gICAgICAgICAgICAgICAgICBvbkZpcnN0TmFtZUNoYW5nZT17dGhpcy5vbkZpcnN0TmFtZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uTGFzdE5hbWVDaGFuZ2U9e3RoaXMub25MYXN0TmFtZUNoYW5nZX0gIFxuICAgICAgICAgICAgICAgICAgb25NZXNzYWdlQ2hhbmdlPXt0aGlzLm9uTWVzc2FnZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uRW1haWxDaGFuZ2U9e3RoaXMub25FbWFpbENoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fVxuICAgICAgICAgICAgICAgICAgc3RhdGU9e3RoaXMuc3RhdGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnaXRlbSd9PlxuICAgICAgICAgICAgICA8Q2xvdWRpbmFyeUNvbnRleHQgY2xvdWROYW1lPVwidHBpZXJjZTM2XCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICAgcHVibGljSWQ9XCJsYWtlLXN1bnNldC0yLmpwZ1wiXG4gICAgICAgICAgICAgICAgICByZXNwb25zaXZlXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cImF1dG9cIlxuICAgICAgICAgICAgICAgICAgY3JvcD1cInNjYWxlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VHJhbnNmb3JtYXRpb24gcXVhbGl0eT1cImF1dG9cIiBmZXRjaEZvcm1hdD1cImF1dG9cIiAvPlxuICAgICAgICAgICAgICAgIDwvSW1hZ2U+XG4gICAgICAgICAgICAgIDwvQ2xvdWRpbmFyeUNvbnRleHQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZSJdfQ== */\n/*@ sourceURL=/Users/wpierce/projects/caddolakebayoutours/pages/contact.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: "jsx-4249051786" + " " + "side-hug with-padding",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Contact"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "If you have any questions please give us a call or you can contact us via email and we will get back to you as soon as possible. We will answer any questions you may have about what kind of guided boat tours we have available, what you can expect to encounter while on the tour and of course what you can and can not do on while on the tour of the lake."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Come and enjoy the wonderful experience that is Caddo Lake. We can't wait to share it with you!")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: "jsx-4249051786" + " " + "side-hug",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4249051786" + " " + 'flex',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4249051786" + " " + 'item text-left',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Rich McFarland ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Tour Guide")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Tours available 7 days a week, any time from sunrise to sunset."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Boat tours last approximately one hour."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Make sure to like us on ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://www.facebook.com/caddotours/",
        target: "_blank",
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "FaceBook")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Address"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "449 Cypress Drive")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Uncertain TX 75661"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Phone: "), "903-570-2169")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Book a boat tour or send a message"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-4249051786",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "Ask about boat tour reservations, fishing trips, availability of dates or times, or any other general questions."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Form__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onFirstNameChange: this.onFirstNameChange,
        onLastNameChange: this.onLastNameChange,
        onMessageChange: this.onMessageChange,
        onEmailChange: this.onEmailChange,
        onSubmit: this.onSubmit,
        state: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4249051786" + " " + 'item',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(cloudinary_react__WEBPACK_IMPORTED_MODULE_14__["CloudinaryContext"], {
        cloudName: "tpierce36",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(cloudinary_react__WEBPACK_IMPORTED_MODULE_14__["Image"], {
        publicId: "lake-sunset-2.jpg",
        responsive: true,
        width: "auto",
        crop: "scale",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(cloudinary_react__WEBPACK_IMPORTED_MODULE_14__["Transformation"], {
        quality: "auto",
        fetchFormat: "auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
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
//# sourceMappingURL=contact.js.62e7ea0817647be15d4e.hot-update.js.map