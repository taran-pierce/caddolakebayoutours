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
  var onSubmit = props.onSubmit;
  var sent = props.state.sent;

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
    }, "fieldset.jsx-783783900{border:none;padding:0;margin:0;}input.jsx-783783900,textarea.jsx-783783900{border:1px solid #cacaca;border-radius:5px;padding:.5rem;margin-top:.2rem;margin-bottom:.5rem;width:80vw;}button.jsx-783783900{border:1px solid #cacaca;border-radius:5px;padding:1rem;margin-bottom:.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2NhZGRvbGFrZWJheW91dG91cnMvY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNvQixBQUd5QixBQU1hLEFBU0EsWUFkZixVQUNELEdBS1MsQUFTQSxNQWJwQixZQUtnQixBQVNELGFBQ08sQ0FUSCxpQkFDRyxFQVN0QixrQkFSYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy93cGllcmNlL3Byb2plY3RzL2NhZGRvbGFrZWJheW91dG91cnMvY29tcG9uZW50cy9Gb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBGb3JtID0gKCBwcm9wcyApID0+IHtcbiAgY29uc3QgeyBvblN1Ym1pdCB9ID0gcHJvcHNcbiAgY29uc3QgeyBzZW50IH0gPSBwcm9wcy5zdGF0ZVxuXG4gIGlmICggIXNlbnQgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBmaWVsZHNldCB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgaW5wdXQsIHRleHRhcmVhIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC4ycmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjb250YWN0LWZvcm1cIiBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3RfbmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25GaXJzdE5hbWVDaGFuZ2V9IFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICBuYW1lPVwiZmlyc3RfbmFtZVwiIFxuICAgICAgICAgICAgICBpZD1cImZpcnN0X25hbWVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuc3RhdGUuZmlyc3ROYW1lfVxuICAgICAgICAgICAgICBpbnB1dE1vZGU9e2B0ZXh0YH1cbiAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cbiAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdF9uYW1lXCI+TGFzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgbmFtZT1cImxhc3RfbmFtZVwiIFxuICAgICAgICAgICAgICBpZD1cImxhc3RfbmFtZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkxhc3ROYW1lQ2hhbmdlfVxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuc3RhdGUubGFzdE5hbWV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgaW5wdXRNb2RlPXtgdGV4dGB9ICBcbiAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cbiAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkVtYWlsQ2hhbmdlfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInlvdXJAZW1haWwuY29tXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnN0YXRlLmVtYWlsfSBcbiAgICAgICAgICAgICAgaW5wdXRNb2RlPXtgZW1haWxgfVxuICAgICAgICAgICAgICByZXF1aXJlZCAvPlxuICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCI+TWVzc2FnZTwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCIgXG4gICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbk1lc3NhZ2VDaGFuZ2V9XG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5zdGF0ZS5tZXNzYWdlfVxuICAgICAgICAgICAgICBpbnB1dE1vZGU9e2B0ZXh0YH1cbiAgICAgICAgICAgICAgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24td3JhcHBlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuXCI+eyBwcm9wcy5zdGF0ZS5idXR0b25UZXh0IH08L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDQ+TWVzc2FnZSBSZWNlaXZlZCE8L2g0PlxuICAgICAgICA8cD5UaGFua3MgZm9yIHlvdSBpbnRlcmVzdCEgSSB3aWxsIGNvbnRhY3QgeW91IGFzIHNvb24gYXMgcG9zc2libGUuPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbkZvcm0ucHJvcFR5cGVzID0ge1xuICBvbkZpcnN0TmFtZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTGFzdE5hbWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1lc3NhZ2VDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkVtYWlsQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLFxuICBzdGF0ZTogUHJvcFR5cGVzLmFueSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybSJdfQ== */\n/*@ sourceURL=/Users/wpierce/projects/caddolakebayoutours/components/Form.js */"), __jsx("form", {
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
      onChange: props.onFirstNameChange,
      type: "text",
      name: "first_name",
      id: "first_name",
      placeholder: "First Name",
      value: props.state.firstName,
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
      onChange: props.onLastNameChange,
      value: props.state.lastName,
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
      onChange: props.onEmailChange,
      placeholder: "your@email.com",
      value: props.state.email,
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
      onChange: props.onMessageChange,
      value: props.state.message,
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
    }, props.state.buttonText))));
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
//# sourceMappingURL=contact.js.2fe0feaa5c0f0218d91f.hot-update.js.map