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

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _Campaigns_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Campaigns/ethereum/campaign */ \"./Campaigns/ethereum/campaign.js\");\n\n\nvar _this = undefined;\n\n\n\n\nvar Show = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [\n                \"Welcome to the fisrt Next page 2 \",\n                props.query\n            ]\n        }, void 0, true, {\n            fileName: \"/blockchain/pages/campaigns/show.js\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/blockchain/pages/campaigns/show.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, _this);\n};\n_c = Show;\nShow.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(param) {\n        var query, campaign, summary;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    query = param.query;\n                    console.log(\"query => \", query.address);\n                    campaign = (0,_Campaigns_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(query.address);\n                    return [\n                        4,\n                        campaign.methods.getSummary().call()\n                    ];\n                case 1:\n                    summary = _state.sent();\n                    console.log(\"Summary => \", summary);\n                    return [\n                        2,\n                        {\n                            query: query.address\n                        }\n                    ];\n            }\n        });\n    });\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Show);\nvar _c;\n$RefreshReg$(_c, \"Show\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUEwQjtBQUNtQjtBQUNvQjtBQUdqRSxJQUFNRyxJQUFJLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO0lBQ3BCLHFCQUNJLDhEQUFDSCwwREFBTTtrQkFDSCw0RUFBQ0ksSUFBRTs7Z0JBQUMsbUNBQWlDO2dCQUFDRCxLQUFLLENBQUNFLEtBQUs7Ozs7OztpQkFBTTs7Ozs7YUFDbEQsQ0FDWDtBQUNOLENBQUM7QUFOS0gsS0FBQUEsSUFBSTtBQVFWQSxJQUFJLENBQUNJLGVBQWU7ZUFBRyxvR0FBcUI7WUFBWkQsS0FBSyxFQUczQkUsUUFBUSxFQUNSQyxPQUFPOzs7O29CQUplSCxLQUFLLFNBQUxBLEtBQUs7b0JBQ2pDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEVBQUVMLEtBQUssQ0FBQ00sT0FBTyxDQUFDO29CQUVqQ0osUUFBUSxHQUFHTix3RUFBZ0IsQ0FBQ0ksS0FBSyxDQUFDTSxPQUFPLENBQUMsQ0FBQztvQkFDakM7O3dCQUFNSixRQUFRLENBQUNLLE9BQU8sQ0FBQ0MsVUFBVSxFQUFFLENBQUNDLElBQUksRUFBRTtzQkFBQTs7b0JBQXBETixPQUFPLEdBQUcsYUFBMEM7b0JBRTFEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUVGLE9BQU8sQ0FBQyxDQUFDO29CQUVwQzs7d0JBQU87NEJBQUVILEtBQUssRUFBRUEsS0FBSyxDQUFDTSxPQUFPO3lCQUFDO3NCQUFBOzs7SUFDbEMsQ0FBQzs7OztHQUFBO0FBRUQsK0RBQWVULElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcz9iMGRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBDYW1wYWlnbkluc3RhbmNlIGZyb20gJy4uLy4uL0NhbXBhaWducy9ldGhlcmV1bS9jYW1wYWlnbic7XG5cblxuY29uc3QgU2hvdyA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8aDE+V2VsY29tZSB0byB0aGUgZmlzcnQgTmV4dCBwYWdlIDIge3Byb3BzLnF1ZXJ5fTwvaDE+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59O1xuXG5TaG93LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInF1ZXJ5ID0+IFwiLCBxdWVyeS5hZGRyZXNzKVxuXG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbkluc3RhbmNlKHF1ZXJ5LmFkZHJlc3MpO1xuICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcIlN1bW1hcnkgPT4gXCIsIHN1bW1hcnkpO1xuXG4gICAgcmV0dXJuIHsgcXVlcnk6IHF1ZXJ5LmFkZHJlc3N9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3c7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQ2FtcGFpZ25JbnN0YW5jZSIsIlNob3ciLCJwcm9wcyIsImgxIiwicXVlcnkiLCJnZXRJbml0aWFsUHJvcHMiLCJjYW1wYWlnbiIsInN1bW1hcnkiLCJjb25zb2xlIiwibG9nIiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/show.js\n"));

/***/ })

});