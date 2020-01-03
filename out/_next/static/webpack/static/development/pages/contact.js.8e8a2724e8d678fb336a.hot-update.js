webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/wpierce/projects/caddolakebayoutours/components/Form.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Form = function Form(props) {
  var onSubmit = props.onSubmit,
      onFirstNameChange = props.onFirstNameChange,
      onLastNameChange = props.onLastNameChange,
      onEmailChange = props.onEmailChange,
      onMessageChange = props.onMessageChange;
  var _props$state = props.state,
      sent = _props$state.sent,
      firstName = _props$state.firstName,
      lastName = _props$state.lastName,
      email = _props$state.email,
      message = _props$state.message,
      buttonText = _props$state.buttonText;

  if (!sent) {
    return __jsx("div", {
      className: "jsx-783783900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "783783900",
      __self: this
    }, "fieldset.jsx-783783900{border:none;padding:0;margin:0;}input.jsx-783783900,textarea.jsx-783783900{border:1px solid #cacaca;border-radius:5px;padding:.5rem;margin-top:.2rem;margin-bottom:.5rem;width:80vw;}button.jsx-783783900{border:1px solid #cacaca;border-radius:5px;padding:1rem;margin-bottom:.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2NhZGRvbGFrZWJheW91dG91cnMvY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNvQixBQUd5QixBQU1hLEFBU0EsWUFkZixVQUNELEdBS1MsQUFTQSxNQWJwQixZQUtnQixBQVNELGFBQ08sQ0FUSCxpQkFDRyxFQVN0QixrQkFSYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2NhZGRvbGFrZWJheW91dG91cnMvY29tcG9uZW50cy9Gb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBGb3JtID0gKCBwcm9wcyApID0+IHtcbiAgY29uc3QgeyBvblN1Ym1pdCwgb25GaXJzdE5hbWVDaGFuZ2UsIG9uTGFzdE5hbWVDaGFuZ2UsIG9uRW1haWxDaGFuZ2UsIG9uTWVzc2FnZUNoYW5nZSB9ID0gcHJvcHNcbiAgY29uc3QgeyBzZW50LCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgbWVzc2FnZSwgYnV0dG9uVGV4dCB9ID0gcHJvcHMuc3RhdGVcblxuICBpZiAoICFzZW50ICkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZmllbGRzZXQge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGlucHV0LCB0ZXh0YXJlYSB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAuMnJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtXCIgb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0X25hbWVcIj5GaXJzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRmlyc3ROYW1lQ2hhbmdlfSBcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgbmFtZT1cImZpcnN0X25hbWVcIiBcbiAgICAgICAgICAgICAgaWQ9XCJmaXJzdF9uYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2ZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgaW5wdXRNb2RlPXtgdGV4dGB9XG4gICAgICAgICAgICAgIHJlcXVpcmVkIC8+XG4gICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3RfbmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgIG5hbWU9XCJsYXN0X25hbWVcIiBcbiAgICAgICAgICAgICAgaWQ9XCJsYXN0X25hbWVcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25MYXN0TmFtZUNoYW5nZX1cbiAgICAgICAgICAgICAgdmFsdWU9e2xhc3ROYW1lfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgIGlucHV0TW9kZT17YHRleHRgfSAgXG4gICAgICAgICAgICAgIHJlcXVpcmVkIC8+XG4gICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCIgXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25FbWFpbENoYW5nZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VyQGVtYWlsLmNvbVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH0gXG4gICAgICAgICAgICAgIGlucHV0TW9kZT17YGVtYWlsYH1cbiAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cbiAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiIFxuICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25NZXNzYWdlQ2hhbmdlfVxuICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICAgICAgaW5wdXRNb2RlPXtgdGV4dGB9XG4gICAgICAgICAgICAgIHJlcXVpcmVkPlxuICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0blwiPntidXR0b25UZXh0fTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoND5NZXNzYWdlIFJlY2VpdmVkITwvaDQ+XG4gICAgICAgIDxwPlRoYW5rcyBmb3IgeW91IGludGVyZXN0ISBJIHdpbGwgY29udGFjdCB5b3UgYXMgc29vbiBhcyBwb3NzaWJsZS48L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuRm9ybS5wcm9wVHlwZXMgPSB7XG4gIG9uRmlyc3ROYW1lQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25MYXN0TmFtZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTWVzc2FnZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRW1haWxDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMsXG4gIHN0YXRlOiBQcm9wVHlwZXMuYW55LFxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtIl19 */\n/*@ sourceURL=/Users/wpierce/projects/caddolakebayoutours/components/Form.js */"), __jsx("form", {
      onSubmit: onSubmit,
      className: "jsx-783783900" + " " + "contact-form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("fieldset", {
      className: "jsx-783783900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "first_name",
      className: "jsx-783783900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "First Name"), __jsx("input", {
      onChange: onFirstNameChange,
      type: "text",
      name: "first_name",
      id: "first_name",
      placeholder: "First Name",
      value: firstName,
      inputMode: "text",
      required: true,
      className: "jsx-783783900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    })), __jsx("fieldset", {
      className: "jsx-783783900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "last_name",
      className: "jsx-783783900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Last Name"), __jsx("input", {
      type: "text",
      name: "last_name",
      id: "last_name",
      onChange: onLastNameChange,
      value: lastName,
      placeholder: "Last Name",
      inputMode: "text",
      required: true,
      className: "jsx-783783900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })), __jsx("fieldset", {
      className: "jsx-783783900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "email",
      className: "jsx-783783900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Email"), __jsx("input", {
      type: "email",
      name: "email",
      id: "email",
      onChange: onEmailChange,
      placeholder: "your@email.com",
      value: email,
      inputMode: "email",
      required: true,
      className: "jsx-783783900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    })), __jsx("fieldset", {
      className: "jsx-783783900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "message",
      className: "jsx-783783900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Message"), __jsx("textarea", {
      name: "message",
      id: "message",
      onChange: onMessageChange,
      value: message,
      inputMode: "text",
      required: true,
      className: "jsx-783783900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-783783900" + " " + "button-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx("button", {
      type: "submit",
      className: "jsx-783783900" + " " + "btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, buttonText))));
  } else {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "Message Received!"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "Thanks for you interest! I will contact you as soon as possible."));
  }
};

Form.propTypes = {
  onFirstNameChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onLastNameChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onMessageChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onEmailChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  state: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=contact.js.8e8a2724e8d678fb336a.hot-update.js.map