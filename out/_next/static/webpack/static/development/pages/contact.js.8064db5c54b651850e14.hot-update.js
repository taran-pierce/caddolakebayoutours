webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/wpierce/projects/caddolakebayoutours/components/Form.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Form = function Form(props) {
  var onSubmit = props.onSubmit,
      onFirstNameChange = props.onFirstNameChange,
      onLastNameChange = props.onLastNameChange,
      onEmailChange = props.onEmailChange,
      onMessageChange = props.onMessageChange,
      data = props.data;
  var _props$state = props.state,
      sent = _props$state.sent,
      firstName = _props$state.firstName,
      lastName = _props$state.lastName,
      email = _props$state.email,
      message = _props$state.message,
      buttonText = _props$state.buttonText;

  if (!sent) {
    var textData = data.textData;
    console.log('data: ', textData);
    return __jsx("section", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("div", {
      className: "container flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("div", {
      className: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, textData && textData.map(function (text) {
      return text.titles && text.titles.map(function (title, index) {
        return __jsx("div", {
          key: index,
          dangerouslySetInnerHTML: {
            __html: title
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        });
      });
    }), textData && textData.map(function (text) {
      return text.paragraphs && text.paragraphs.map(function (paragraph, index) {
        return __jsx("p", {
          key: index,
          dangerouslySetInnerHTML: {
            __html: paragraph
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        });
      });
    }), textData && textData.map(function (text) {
      return text.lists && text.lists.map(function (list, index) {
        return __jsx("ul", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, list.items.map(function (item, index) {
          return __jsx("li", {
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, item.title && __jsx("h4", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          }, item.title), item.paragraphs.map(function (paragraph, index) {
            return __jsx("p", {
              key: index,
              dangerouslySetInnerHTML: {
                __html: paragraph
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            });
          }));
        }));
      });
    }), __jsx("form", {
      className: "contact-form",
      onSubmit: onSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("fieldset", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "first_name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
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
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })), __jsx("fieldset", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "last_name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
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
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })), __jsx("fieldset", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
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
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    })), __jsx("fieldset", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "message",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Message"), __jsx("textarea", {
      name: "message",
      id: "message",
      onChange: onMessageChange,
      value: message,
      inputMode: "text",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    })), __jsx("div", {
      className: "button-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx("button", {
      type: "submit",
      className: "btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, buttonText)))), __jsx("div", {
      className: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    })));
  } else {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "Message Received!"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, "Thanks for you interest! I will contact you as soon as possible."));
  }
};

Form.propTypes = {
  onFirstNameChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onLastNameChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onMessageChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onEmailChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=contact.js.8064db5c54b651850e14.hot-update.js.map