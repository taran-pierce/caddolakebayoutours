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
    return __jsx("section", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-783783900" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "783783900",
      __self: this
    }, "fieldset.jsx-783783900{border:none;padding:0;margin:0;}input.jsx-783783900,textarea.jsx-783783900{border:1px solid #cacaca;border-radius:5px;padding:.5rem;margin-top:.2rem;margin-bottom:.5rem;width:80vw;}button.jsx-783783900{border:1px solid #cacaca;border-radius:5px;padding:1rem;margin-bottom:.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2NhZGRvbGFrZWJheW91dG91cnMvY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVvQixBQUd5QixBQU1hLEFBU0EsWUFkZixVQUNELEdBS1MsQUFTQSxNQWJwQixZQUtnQixBQVNELGFBQ08sQ0FUSCxpQkFDRyxFQVN0QixrQkFSYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2NhZGRvbGFrZWJheW91dG91cnMvY29tcG9uZW50cy9Gb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBGb3JtID0gKCBwcm9wcyApID0+IHtcbiAgY29uc3QgeyBvblN1Ym1pdCwgb25GaXJzdE5hbWVDaGFuZ2UsIG9uTGFzdE5hbWVDaGFuZ2UsIG9uRW1haWxDaGFuZ2UsIG9uTWVzc2FnZUNoYW5nZSB9ID0gcHJvcHNcbiAgY29uc3QgeyBzZW50LCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgbWVzc2FnZSwgYnV0dG9uVGV4dCB9ID0gcHJvcHMuc3RhdGVcblxuICBpZiAoICFzZW50ICkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb250YWluZXJgfT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGZpZWxkc2V0IHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBpbnB1dCwgdGV4dGFyZWEge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLjJyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybVwiIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdF9uYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpcnN0TmFtZUNoYW5nZX0gXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgIG5hbWU9XCJmaXJzdF9uYW1lXCIgXG4gICAgICAgICAgICAgIGlkPVwiZmlyc3RfbmFtZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmaXJzdE5hbWV9XG4gICAgICAgICAgICAgIGlucHV0TW9kZT17YHRleHRgfVxuICAgICAgICAgICAgICByZXF1aXJlZCAvPlxuICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0X25hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICBuYW1lPVwibGFzdF9uYW1lXCIgXG4gICAgICAgICAgICAgIGlkPVwibGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uTGFzdE5hbWVDaGFuZ2V9XG4gICAgICAgICAgICAgIHZhbHVlPXtsYXN0TmFtZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICBpbnB1dE1vZGU9e2B0ZXh0YH0gIFxuICAgICAgICAgICAgICByZXF1aXJlZCAvPlxuICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRW1haWxDaGFuZ2V9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieW91ckBlbWFpbC5jb21cIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9IFxuICAgICAgICAgICAgICBpbnB1dE1vZGU9e2BlbWFpbGB9XG4gICAgICAgICAgICAgIHJlcXVpcmVkIC8+XG4gICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBcbiAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIiBcbiAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uTWVzc2FnZUNoYW5nZX1cbiAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgICAgIGlucHV0TW9kZT17YHRleHRgfVxuICAgICAgICAgICAgICByZXF1aXJlZD5cbiAgICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi13cmFwcGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG5cIj57YnV0dG9uVGV4dH08L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoND5NZXNzYWdlIFJlY2VpdmVkITwvaDQ+XG4gICAgICAgIDxwPlRoYW5rcyBmb3IgeW91IGludGVyZXN0ISBJIHdpbGwgY29udGFjdCB5b3UgYXMgc29vbiBhcyBwb3NzaWJsZS48L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuRm9ybS5wcm9wVHlwZXMgPSB7XG4gIG9uRmlyc3ROYW1lQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25MYXN0TmFtZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTWVzc2FnZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRW1haWxDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMsXG4gIHN0YXRlOiBQcm9wVHlwZXMuYW55LFxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtIl19 */\n/*@ sourceURL=/Users/wpierce/projects/caddolakebayoutours/components/Form.js */"), __jsx("form", {
      onSubmit: onSubmit,
      className: "jsx-783783900" + " " + "contact-form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("fieldset", {
      className: "jsx-783783900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "first_name",
      className: "jsx-783783900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
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
        lineNumber: 37
      },
      __self: this
    })), __jsx("fieldset", {
      className: "jsx-783783900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "last_name",
      className: "jsx-783783900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
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
        lineNumber: 49
      },
      __self: this
    })), __jsx("fieldset", {
      className: "jsx-783783900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "email",
      className: "jsx-783783900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
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
        lineNumber: 61
      },
      __self: this
    })), __jsx("fieldset", {
      className: "jsx-783783900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "message",
      className: "jsx-783783900",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
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
        lineNumber: 73
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-783783900" + " " + "button-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("button", {
      type: "submit",
      className: "jsx-783783900" + " " + "btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, buttonText)))));
  } else {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "Message Received!"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
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
//# sourceMappingURL=contact.js.23554d3a780c03aeb0be.hot-update.js.map