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
      event.preventDefault();
      fetch('http://caddo-email-server.herokuapp.com/send/mail', {
        mode: 'no-cors',
        method: 'post',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)
      }).then(function (res) {
        console.log('res from form submit: ', res);
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
      }, "ul.jsx-4249051786{list-style-type:none;padding:0;margin:0 0 1rem 0;}@media(min-width:768px){.flex.jsx-4249051786{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.item.jsx-4249051786{width:50%;}img.jsx-4249051786{display:block;margin:0 auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2NhZGRvbGFrZWJheW91dG91cnMvcGFnZXMvY29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRnNCLEFBR29DLEFBT04sQUFJSCxBQUlJLFVBSGhCLElBSWdCLE9BZk4sT0FnQlYsR0Fma0Isa0JBQ3BCLHlCQUtFIiwiZmlsZSI6Ii9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2NhZGRvbGFrZWJheW91dG91cnMvcGFnZXMvY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8nXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtJ1xuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IHsgSW1hZ2UsIENsb3VkaW5hcnlDb250ZXh0LCBUcmFuc2Zvcm1hdGlvbiB9IGZyb20gJ2Nsb3VkaW5hcnktcmVhY3QnXG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKSB7XG4gICAgc3VwZXIoIHByb3BzIClcbiAgICBcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgc2VudDogZmFsc2UsXG4gICAgICBlcnJvcjogbnVsbCxcbiAgICAgIGJ1dHRvblRleHQ6ICdTZW5kIE1lc3NhZ2UnXG4gICAgfVxuXG4gICAgdGhpcy5vbkZpcnN0TmFtZUNoYW5nZSA9IHRoaXMub25GaXJzdE5hbWVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMub25MYXN0TmFtZUNoYW5nZSA9IHRoaXMub25MYXN0TmFtZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkVtYWlsQ2hhbmdlID0gdGhpcy5vbkVtYWlsQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uTWVzc2FnZUNoYW5nZSA9IHRoaXMub25NZXNzYWdlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpXG4gIH1cblxuICBvbkZpcnN0TmFtZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpcnN0TmFtZTogZS50YXJnZXQudmFsdWUgfSlcbiAgfVxuXG4gIG9uTGFzdE5hbWVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsYXN0TmFtZTogZS50YXJnZXQudmFsdWUgfSlcbiAgfVxuXG4gIG9uTWVzc2FnZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IGUudGFyZ2V0LnZhbHVlIH0pXG4gIH1cblxuICBvbkVtYWlsQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pXG4gIH1cblxuICBvblN1Ym1pdCgpIHtcblxuICAgIGxldCBkYXRhID0ge1xuICAgICAgbmFtZTogYCR7dGhpcy5zdGF0ZS5maXJzdE5hbWV9ICR7dGhpcy5zdGF0ZS5sYXN0TmFtZX1gLFxuICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICBtZXNzYWdlOiB0aGlzLnN0YXRlLm1lc3NhZ2VcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBmZXRjaCgnaHR0cDovL2NhZGRvLWVtYWlsLXNlcnZlci5oZXJva3VhcHAuY29tL3NlbmQvbWFpbCcsIHtcbiAgICAgIG1vZGU6ICduby1jb3JzJyxcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQWNjZXB0JzogJyovKicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgfSkudGhlbiggKCByZXMgKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygncmVzIGZyb20gZm9ybSBzdWJtaXQ6ICcsIHJlcylcbiAgICAgIHJlcy5zdGF0dXMgPT09IDIwMCA/IHRoaXMuc2V0U3RhdGUoeyBzZW50OiB0cnVlIH0pIDogJyc7XG4gICAgICB0aGlzLnJlc2V0Rm9ybSgpXG4gICAgfSlcbiAgfVxuXG4gIHJlc2V0Rm9ybSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICBsYXN0TmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBtZXNzYWdlOiAnJyxcbiAgICAgIGJ1dHRvblRleHQ6ICdTZW5kJyxcbiAgICB9KVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbGF5b3V0YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbWFpbi1jb250YWluZXInfT5cbiAgICAgICAgICA8SGVhZGVyIFxuICAgICAgICAgICAgcGFnZVRpdGxlPXsnQ29udGFjdCB8IENhZGRvIExha2UgQmF5b3UgVG91cnMnfSBcbiAgICAgICAgICAgIGNhbm9uaWNhbD17Jy9jb250YWN0J30gXG4gICAgICAgICAgICBhY3RpdmVUYWI9eydjb250YWN0J31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxIZXJvIGltYWdlUGF0aD17J2NhZGRvLWxha2Utc3dhbXAuanBnJ30gLz5cbiAgICAgICAgICA8c3R5bGUganN4PntgICBcbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAuZmxleCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzaWRlLWh1ZyB3aXRoLXBhZGRpbmdcIj5cbiAgICAgICAgICAgIDxoMT5Db250YWN0PC9oMT5cbiAgICAgICAgICAgIDxwPklmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgcGxlYXNlIGdpdmUgdXMgYSBjYWxsIG9yIHlvdSBjYW4gY29udGFjdCB1cyB2aWEgZW1haWwgYW5kIHdlIHdpbGwgZ2V0IGJhY2sgdG8geW91IGFzIHNvb24gYXMgcG9zc2libGUuIFdlIHdpbGwgYW5zd2VyIGFueSBxdWVzdGlvbnMgeW91IG1heSBoYXZlIGFib3V0IHdoYXQga2luZCBvZiBndWlkZWQgYm9hdCB0b3VycyB3ZSBoYXZlIGF2YWlsYWJsZSwgd2hhdCB5b3UgY2FuIGV4cGVjdCB0byBlbmNvdW50ZXIgd2hpbGUgb24gdGhlIHRvdXIgYW5kIG9mIGNvdXJzZSB3aGF0IHlvdSBjYW4gYW5kIGNhbiBub3QgZG8gb24gd2hpbGUgb24gdGhlIHRvdXIgb2YgdGhlIGxha2UuPC9wPlxuICAgICAgICAgICAgPHA+Q29tZSBhbmQgZW5qb3kgdGhlIHdvbmRlcmZ1bCBleHBlcmllbmNlIHRoYXQgaXMgQ2FkZG8gTGFrZS4gV2UgY2FuJ3Qgd2FpdCB0byBzaGFyZSBpdCB3aXRoIHlvdSE8L3A+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNpZGUtaHVnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXgnfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydpdGVtIHRleHQtbGVmdCd9PlxuICAgICAgICAgICAgICAgIDxoMz5SaWNoIE1jRmFybGFuZCA8c3Ryb25nPlRvdXIgR3VpZGU8L3N0cm9uZz48L2gzPlxuICAgICAgICAgICAgICAgIDxwPlRvdXJzIGF2YWlsYWJsZSA3IGRheXMgYSB3ZWVrLCBhbnkgdGltZSBmcm9tIHN1bnJpc2UgdG8gc3Vuc2V0LjwvcD5cbiAgICAgICAgICAgICAgICA8cD5Cb2F0IHRvdXJzIGxhc3QgYXBwcm94aW1hdGVseSBvbmUgaG91ci48L3A+XG4gICAgICAgICAgICAgICAgPHA+TWFrZSBzdXJlIHRvIGxpa2UgdXMgb24gPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9jYWRkb3RvdXJzL1wiIHRhcmdldD1cIl9ibGFua1wiPkZhY2VCb29rPC9hPjwvcD5cbiAgICAgICAgICAgICAgICA8aDM+QWRkcmVzczwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+NDQ5IEN5cHJlc3MgRHJpdmU8L3N0cm9uZz48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlVuY2VydGFpbiBUWCA3NTY2MTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5QaG9uZTogPC9zdHJvbmc+OTAzLTU3MC0yMTY5PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxoND5Cb29rIGEgYm9hdCB0b3VyIG9yIHNlbmQgYSBtZXNzYWdlPC9oND5cbiAgICAgICAgICAgICAgICA8cD5Bc2sgYWJvdXQgYm9hdCB0b3VyIHJlc2VydmF0aW9ucywgZmlzaGluZyB0cmlwcywgYXZhaWxhYmlsaXR5IG9mIGRhdGVzIG9yIHRpbWVzLCBvciBhbnkgb3RoZXIgZ2VuZXJhbCBxdWVzdGlvbnMuPC9wPlxuICAgICAgICAgICAgICAgIDxGb3JtIFxuICAgICAgICAgICAgICAgICAgb25GaXJzdE5hbWVDaGFuZ2U9e3RoaXMub25GaXJzdE5hbWVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkxhc3ROYW1lQ2hhbmdlPXt0aGlzLm9uTGFzdE5hbWVDaGFuZ2V9ICBcbiAgICAgICAgICAgICAgICAgIG9uTWVzc2FnZUNoYW5nZT17dGhpcy5vbk1lc3NhZ2VDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkVtYWlsQ2hhbmdlPXt0aGlzLm9uRW1haWxDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgIHN0YXRlPXt0aGlzLnN0YXRlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2l0ZW0nfT5cbiAgICAgICAgICAgICAgPENsb3VkaW5hcnlDb250ZXh0IGNsb3VkTmFtZT1cInRwaWVyY2UzNlwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgIHB1YmxpY0lkPVwibGFrZS1zdW5zZXQtMi5qcGdcIlxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZVxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgIGNyb3A9XCJzY2FsZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zZm9ybWF0aW9uIHF1YWxpdHk9XCJhdXRvXCIgZmV0Y2hGb3JtYXQ9XCJhdXRvXCIgLz5cbiAgICAgICAgICAgICAgICA8L0ltYWdlPlxuICAgICAgICAgICAgICA8L0Nsb3VkaW5hcnlDb250ZXh0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2UiXX0= */\n/*@ sourceURL=/Users/wpierce/projects/caddolakebayoutours/pages/contact.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
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
//# sourceMappingURL=contact.js.99cc5edcd756d7e44c24.hot-update.js.map