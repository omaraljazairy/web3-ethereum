"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/show",{

/***/ "./components/DefaultForm.js":
/*!***********************************!*\
  !*** ./components/DefaultForm.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"./components/Button.js\");\n/* harmony import */ var _Campaigns_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Campaigns/ethereum/campaign */ \"./Campaigns/ethereum/campaign.js\");\n/* harmony import */ var _Campaigns_ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Campaigns/ethereum/web3 */ \"./Campaigns/ethereum/web3.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar DefaultForm = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), value = ref[0], setValue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var onSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(event) {\n            var campaign, accounts, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        event.preventDefault();\n                        console.log(\"event => \", event);\n                        console.log(\"event value => \", value);\n                        console.log(\"props => \", props.address);\n                        campaign = (0,_Campaigns_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(props.address);\n                        console.log(\"campaign => \", campaign);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            _Campaigns_ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getAccounts()\n                        ];\n                    case 2:\n                        accounts = _state.sent();\n                        console.log(\"accounts => \", accounts);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.error(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function onSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form, {\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Amount to Contribution\"\n                    }, void 0, false, {\n                        fileName: \"/blockchain/components/DefaultForm.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                        label: \"Ether\",\n                        labelPosition: \"right\",\n                        placeholder: \"contribution\",\n                        value: value,\n                        onChange: function(event) {\n                            return setValue(event.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/blockchain/components/DefaultForm.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/blockchain/components/DefaultForm.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                loading: loading,\n                text: \"Contribute\",\n                floated: \"left\"\n            }, void 0, false, {\n                fileName: \"/blockchain/components/DefaultForm.js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/blockchain/components/DefaultForm.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(DefaultForm, \"LjTeG6EEli3Sv/iwhJV2XSUlq9s=\");\n_c = DefaultForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DefaultForm);\nvar _c;\n$RefreshReg$(_c, \"DefaultForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RlZmF1bHRGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQXdDO0FBQ1E7QUFDWDtBQUN5QjtBQUNoQjtBQUU5QyxJQUFNTyxXQUFXLEdBQUcsU0FBQ0MsS0FBSyxFQUFLOztJQUMzQixJQUEwQlAsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUEvQlEsS0FBSyxHQUFjUixHQUFZLEdBQTFCLEVBQUVTLFFBQVEsR0FBSVQsR0FBWSxHQUFoQjtJQUN0QixJQUE4QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF0Q1UsT0FBTyxHQUFnQlYsSUFBZSxHQUEvQixFQUFFVyxVQUFVLEdBQUlYLElBQWUsR0FBbkI7SUFFMUIsSUFBTVksUUFBUTttQkFBRyw2RkFBT0MsS0FBSyxFQUFLO2dCQUt4QkMsUUFBUSxFQUdKQyxRQUFRLEVBRVRDLEtBQUs7Ozs7d0JBVGRILEtBQUssQ0FBQ0ksY0FBYyxFQUFFLENBQUM7d0JBQ3ZCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEVBQUVOLEtBQUssQ0FBQyxDQUFDO3dCQUNoQ0ssT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLEVBQUVYLEtBQUssQ0FBQyxDQUFDO3dCQUN0Q1UsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxFQUFFWixLQUFLLENBQUNhLE9BQU8sQ0FBQyxDQUFDO3dCQUNsQ04sUUFBUSxHQUFHVix3RUFBZ0IsQ0FBQ0csS0FBSyxDQUFDYSxPQUFPLENBQUMsQ0FBQzt3QkFDakRGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsRUFBRUwsUUFBUSxDQUFDLENBQUM7Ozs7Ozs7Ozt3QkFFakI7OzRCQUFNVCxnRkFBb0IsRUFBRTswQkFBQTs7d0JBQXZDVSxRQUFRLEdBQUcsYUFBNEI7d0JBQzdDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLEVBQUVKLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7d0JBQ2pDQyxLQUFLO3dCQUNWRSxPQUFPLENBQUNGLEtBQUssQ0FBQ0EsS0FBSyxDQUFDOzs7Ozs7Ozs7OztRQUU1QixDQUFDO3dCQWJLSixRQUFRLENBQVVDLEtBQUs7OztPQWE1QjtJQUVELHFCQUNBLDhEQUFDWixtREFBSTtRQUFDVyxRQUFRLEVBQUVBLFFBQVE7OzBCQUNwQiw4REFBQ1gseURBQVU7O2tDQUNYLDhEQUFDdUIsT0FBSztrQ0FBQyx3QkFBc0I7Ozs7OzZCQUFRO2tDQUNyQyw4REFBQ3RCLG9EQUFLO3dCQUNGc0IsS0FBSyxFQUFDLE9BQU87d0JBQ2JDLGFBQWEsRUFBQyxPQUFPO3dCQUNyQkMsV0FBVyxFQUFDLGNBQWM7d0JBQzFCbEIsS0FBSyxFQUFFQSxLQUFLO3dCQUNabUIsUUFBUSxFQUFFZCxTQUFBQSxLQUFLO21DQUFJSixRQUFRLENBQUNJLEtBQUssQ0FBQ2UsTUFBTSxDQUFDcEIsS0FBSyxDQUFDO3lCQUFBOzs7Ozs2QkFDakQ7Ozs7OztxQkFDVzswQkFDYiw4REFBQ0wsK0NBQWE7Z0JBQUNPLE9BQU8sRUFBRUEsT0FBTztnQkFBRW1CLElBQUksRUFBQyxZQUFZO2dCQUFDQyxPQUFPLEVBQUMsTUFBTTs7Ozs7cUJBQUU7Ozs7OzthQUNoRSxDQUNMO0FBQ04sQ0FBQztHQWxDS3hCLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQW9DakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0RlZmF1bHRGb3JtLmpzPzU1YTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgRXhhbXBsZUJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgQ2FtcGFpZ25JbnN0YW5jZSBmcm9tICcuLi9DYW1wYWlnbnMvZXRoZXJldW0vY2FtcGFpZ24nO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vQ2FtcGFpZ25zL2V0aGVyZXVtL3dlYjMnO1xuXG5jb25zdCBEZWZhdWx0Rm9ybSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXZlbnQgPT4gXCIsIGV2ZW50KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJldmVudCB2YWx1ZSA9PiBcIiwgdmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInByb3BzID0+IFwiLCBwcm9wcy5hZGRyZXNzKTtcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbkluc3RhbmNlKHByb3BzLmFkZHJlc3MpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNhbXBhaWduID0+IFwiLCBjYW1wYWlnbik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFjY291bnRzID0+IFwiLCBhY2NvdW50cyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgPGxhYmVsPkFtb3VudCB0byBDb250cmlidXRpb248L2xhYmVsPlxuICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICBsYWJlbD1cIkV0aGVyXCIgXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIiBcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdjb250cmlidXRpb24nXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8RXhhbXBsZUJ1dHRvbiBsb2FkaW5nPXtsb2FkaW5nfSB0ZXh0PVwiQ29udHJpYnV0ZVwiIGZsb2F0ZWQ9XCJsZWZ0XCIvPlxuICAgIDwvRm9ybT5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0Rm9ybTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJJbnB1dCIsIkV4YW1wbGVCdXR0b24iLCJDYW1wYWlnbkluc3RhbmNlIiwid2ViMyIsIkRlZmF1bHRGb3JtIiwicHJvcHMiLCJ2YWx1ZSIsInNldFZhbHVlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwiY2FtcGFpZ24iLCJhY2NvdW50cyIsImVycm9yIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiRmllbGQiLCJsYWJlbCIsImxhYmVsUG9zaXRpb24iLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidGV4dCIsImZsb2F0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DefaultForm.js\n"));

/***/ })

});