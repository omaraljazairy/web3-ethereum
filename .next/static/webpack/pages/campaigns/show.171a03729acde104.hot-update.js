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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"./components/Button.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar DefaultForm = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), value = ref[0], setValue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var onSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(event) {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                event.preventDefault();\n                console.log(\"event => \", event);\n                console.log(\"event value => \", value);\n                console.log(\"props => \", props);\n                return [\n                    2\n                ];\n            });\n        });\n        return function onSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form, {\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Field, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Amount to Contribution\"\n                    }, void 0, false, {\n                        fileName: \"/blockchain/components/DefaultForm.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        label: \"Ether\",\n                        labelPosition: \"right\",\n                        placeholder: \"contribution\",\n                        value: value,\n                        onChange: function(event) {\n                            return setValue(event.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/blockchain/components/DefaultForm.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/blockchain/components/DefaultForm.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                loading: loading,\n                text: \"Contribute\",\n                floated: \"left\"\n            }, void 0, false, {\n                fileName: \"/blockchain/components/DefaultForm.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/blockchain/components/DefaultForm.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_s(DefaultForm, \"LjTeG6EEli3Sv/iwhJV2XSUlq9s=\");\n_c = DefaultForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DefaultForm);\nvar _c;\n$RefreshReg$(_c, \"DefaultForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RlZmF1bHRGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztBQUF3QztBQUNRO0FBQ1g7QUFFckMsSUFBTUssV0FBVyxHQUFHLFNBQUNDLEtBQUssRUFBSzs7SUFDM0IsSUFBMEJMLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBL0JNLEtBQUssR0FBY04sR0FBWSxHQUExQixFQUFFTyxRQUFRLEdBQUlQLEdBQVksR0FBaEI7SUFDdEIsSUFBOEJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBdENRLE9BQU8sR0FBZ0JSLElBQWUsR0FBL0IsRUFBRVMsVUFBVSxHQUFJVCxJQUFlLEdBQW5CO0lBRTFCLElBQU1VLFFBQVE7bUJBQUcsNkZBQU9DLEtBQUssRUFBSzs7Z0JBQzlCQSxLQUFLLENBQUNDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxFQUFFSCxLQUFLLENBQUMsQ0FBQztnQkFDaENFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixFQUFFUixLQUFLLENBQUMsQ0FBQztnQkFDdENPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsRUFBRVQsS0FBSyxDQUFDLENBQUM7Ozs7O1FBQ3BDLENBQUM7d0JBTEtLLFFBQVEsQ0FBVUMsS0FBSzs7O09BSzVCO0lBRUQscUJBQ0EsOERBQUNWLG1EQUFJO1FBQUNTLFFBQVEsRUFBRUEsUUFBUTs7MEJBQ3BCLDhEQUFDVCx5REFBVTs7a0NBQ1gsOERBQUNlLE9BQUs7a0NBQUMsd0JBQXNCOzs7Ozs2QkFBUTtrQ0FDckMsOERBQUNkLG9EQUFLO3dCQUNGYyxLQUFLLEVBQUMsT0FBTzt3QkFDYkMsYUFBYSxFQUFDLE9BQU87d0JBQ3JCQyxXQUFXLEVBQUMsY0FBYzt3QkFDMUJaLEtBQUssRUFBRUEsS0FBSzt3QkFDWmEsUUFBUSxFQUFFUixTQUFBQSxLQUFLO21DQUFJSixRQUFRLENBQUNJLEtBQUssQ0FBQ1MsTUFBTSxDQUFDZCxLQUFLLENBQUM7eUJBQUE7Ozs7OzZCQUNqRDs7Ozs7O3FCQUNXOzBCQUNiLDhEQUFDSCwrQ0FBYTtnQkFBQ0ssT0FBTyxFQUFFQSxPQUFPO2dCQUFFYSxJQUFJLEVBQUMsWUFBWTtnQkFBQ0MsT0FBTyxFQUFDLE1BQU07Ozs7O3FCQUFFOzs7Ozs7YUFDaEUsQ0FDTDtBQUNOLENBQUM7R0ExQktsQixXQUFXO0FBQVhBLEtBQUFBLFdBQVc7QUE0QmpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWZhdWx0Rm9ybS5qcz81NWExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm0sIElucHV0IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IEV4YW1wbGVCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuXG5jb25zdCBEZWZhdWx0Rm9ybSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXZlbnQgPT4gXCIsIGV2ZW50KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJldmVudCB2YWx1ZSA9PiBcIiwgdmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInByb3BzID0+IFwiLCBwcm9wcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgPGxhYmVsPkFtb3VudCB0byBDb250cmlidXRpb248L2xhYmVsPlxuICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICBsYWJlbD1cIkV0aGVyXCIgXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIiBcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdjb250cmlidXRpb24nXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8RXhhbXBsZUJ1dHRvbiBsb2FkaW5nPXtsb2FkaW5nfSB0ZXh0PVwiQ29udHJpYnV0ZVwiIGZsb2F0ZWQ9XCJsZWZ0XCIvPlxuICAgIDwvRm9ybT5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0Rm9ybTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJJbnB1dCIsIkV4YW1wbGVCdXR0b24iLCJEZWZhdWx0Rm9ybSIsInByb3BzIiwidmFsdWUiLCJzZXRWYWx1ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIkZpZWxkIiwibGFiZWwiLCJsYWJlbFBvc2l0aW9uIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsInRleHQiLCJmbG9hdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DefaultForm.js\n"));

/***/ })

});