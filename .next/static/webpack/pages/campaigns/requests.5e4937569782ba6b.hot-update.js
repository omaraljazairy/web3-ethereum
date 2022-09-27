"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/requests",{

/***/ "./pages/campaigns/requests/index.js":
/*!*******************************************!*\
  !*** ./pages/campaigns/requests/index.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Campaigns_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Campaigns/ethereum/campaign */ \"./Campaigns/ethereum/campaign.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\nvar RequestIndex = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Request list \",\n                    props.address,\n                    \" - \",\n                    props.requestsCount\n                ]\n            }, void 0, true, {\n                fileName: \"/blockchain/pages/campaigns/requests/index.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                route: \"/campaigns/\".concat(props.address, \"/requests/new\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        content: \"Create new request\",\n                        primary: true\n                    }, void 0, false, {\n                        fileName: \"/blockchain/pages/campaigns/requests/index.js\",\n                        lineNumber: 15,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/blockchain/pages/campaigns/requests/index.js\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/blockchain/pages/campaigns/requests/index.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/blockchain/pages/campaigns/requests/index.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, _this);\n};\n_c = RequestIndex;\nRequestIndex.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function(param) {\n        var query, address, campaign, requestsCount;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    query = param.query;\n                    address = query.address;\n                    console.log(\"address => \", address);\n                    campaign = (0,_Campaigns_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(address);\n                    return [\n                        4,\n                        campaign.methods.getRequestCount().call()\n                    ];\n                case 1:\n                    requestsCount = _state.sent();\n                    console.log(\"requestsCount => \", requestsCount);\n                    return [\n                        2,\n                        {\n                            address: address,\n                            requestsCount: requestsCount\n                        }\n                    ];\n            }\n        });\n    });\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestIndex);\nvar _c;\n$RefreshReg$(_c, \"RequestIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBMEI7QUFDc0I7QUFDTDtBQUNKO0FBQzZCO0FBR3BFLElBQU1LLFlBQVksR0FBRyxTQUFDQyxLQUFLLEVBQUs7SUFFNUIscUJBQ0ksOERBQUNMLDBEQUFNOzswQkFDSCw4REFBQ00sSUFBRTs7b0JBQUMsZUFBYTtvQkFBQ0QsS0FBSyxDQUFDRSxPQUFPO29CQUFDLEtBQUc7b0JBQUNGLEtBQUssQ0FBQ0csYUFBYTs7Ozs7O3FCQUFNOzBCQUM3RCw4REFBQ04seUNBQUk7Z0JBQUNPLEtBQUssRUFBRSxhQUFZLENBQWdCLE1BQWEsQ0FBM0JKLEtBQUssQ0FBQ0UsT0FBTyxFQUFDLGVBQWEsQ0FBQzswQkFDbkQsNEVBQUNHLEdBQUM7OEJBQ0UsNEVBQUNULHFEQUFNO3dCQUFDVSxPQUFPLEVBQUMsb0JBQW9CO3dCQUFDQyxPQUFPOzs7Ozs2QkFBVTs7Ozs7eUJBQ3REOzs7OztxQkFDRDs7Ozs7O2FBQ0YsQ0FDWDtBQUNOLENBQUM7QUFaS1IsS0FBQUEsWUFBWTtBQWNsQkEsWUFBWSxDQUFDUyxlQUFlO2VBQUcsb0dBQXFCO1lBQVpDLEtBQUssRUFDbENQLE9BQU8sRUFHUlEsUUFBUSxFQUNSUCxhQUFhOzs7O29CQUxpQk0sS0FBSyxTQUFMQSxLQUFLO29CQUNuQyxPQUFRLEdBQUlBLEtBQUssQ0FBaEJQLE9BQU8sQ0FBVTtvQkFDeEJTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsRUFBRVYsT0FBTyxDQUFDLENBQUM7b0JBRTlCUSxRQUFRLEdBQUdaLHdFQUFnQixDQUFDSSxPQUFPLENBQUMsQ0FBQztvQkFDckI7O3dCQUFNUSxRQUFRLENBQUNHLE9BQU8sQ0FBQ0MsZUFBZSxFQUFFLENBQUNDLElBQUksRUFBRTtzQkFBQTs7b0JBQS9EWixhQUFhLEdBQUcsYUFBK0M7b0JBRXJFUSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRVQsYUFBYSxDQUFDLENBQUM7b0JBRWhEOzt3QkFBTzs0QkFBRUQsT0FBTyxFQUFQQSxPQUFPOzRCQUFFQyxhQUFhLEVBQWJBLGFBQWE7eUJBQUU7c0JBQUM7OztJQUN0QyxDQUFDOzs7O0dBQUE7QUFFRCwrREFBZUosWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcz9kNjg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMnO1xuaW1wb3J0IENhbXBhaWduSW5zdGFuY2UgZnJvbSAnLi4vLi4vLi4vQ2FtcGFpZ25zL2V0aGVyZXVtL2NhbXBhaWduJztcblxuXG5jb25zdCBSZXF1ZXN0SW5kZXggPSAocHJvcHMpID0+IHtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGgzPlJlcXVlc3QgbGlzdCB7cHJvcHMuYWRkcmVzc30gLSB7cHJvcHMucmVxdWVzdHNDb3VudH08L2gzPlxuICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7cHJvcHMuYWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29udGVudD1cIkNyZWF0ZSBuZXcgcmVxdWVzdFwiIHByaW1hcnk+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0xheW91dD5cbiAgICApO1xufVxuXG5SZXF1ZXN0SW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xuICAgIGNvbnN0IHthZGRyZXNzfSA9IHF1ZXJ5O1xuICAgIGNvbnNvbGUubG9nKFwiYWRkcmVzcyA9PiBcIiwgYWRkcmVzcyk7XG5cbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduSW5zdGFuY2UoYWRkcmVzcyk7XG4gICAgY29uc3QgcmVxdWVzdHNDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0UmVxdWVzdENvdW50KCkuY2FsbCgpO1xuXG4gICAgY29uc29sZS5sb2coXCJyZXF1ZXN0c0NvdW50ID0+IFwiLCByZXF1ZXN0c0NvdW50KTtcblxuICAgIHJldHVybiB7IGFkZHJlc3MsIHJlcXVlc3RzQ291bnQgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEluZGV4OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkJ1dHRvbiIsIkxpbmsiLCJDYW1wYWlnbkluc3RhbmNlIiwiUmVxdWVzdEluZGV4IiwicHJvcHMiLCJoMyIsImFkZHJlc3MiLCJyZXF1ZXN0c0NvdW50Iiwicm91dGUiLCJhIiwiY29udGVudCIsInByaW1hcnkiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImNhbXBhaWduIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0Q291bnQiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/requests/index.js\n"));

/***/ })

});