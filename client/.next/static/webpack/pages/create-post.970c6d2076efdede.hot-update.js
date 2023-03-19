"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create-post",{

/***/ "./pages/create-post.jsx":
/*!*******************************!*\
  !*** ./pages/create-post.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_FormField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FormField */ \"./components/FormField.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets */ \"./assets/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst createpost = ()=>{\n    _s();\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        prompt: \"\",\n        photo: \"\"\n    });\n    const [generatingImg, setGeneratingImg] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [generatingPrompt, setGeneratingPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleSubmit = ()=>{};\n    const handleChange = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"max-w-7xl mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-extrabold text-[#222328] text-[32px]\",\n                        children: \"Create\"\n                    }, void 0, false, {\n                        fileName: \"/Users/farhatmahi/Documents/ai-image-generator/client/pages/create-post.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-2 text-[#666e75] text-[14px] max-w-[500px]\",\n                        children: \"Create imaginative and visually stunning images through Toolname and share them with the community\"\n                    }, void 0, false, {\n                        fileName: \"/Users/farhatmahi/Documents/ai-image-generator/client/pages/create-post.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/farhatmahi/Documents/ai-image-generator/client/pages/create-post.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"mt-16 max-w-3xl\",\n                onSubmit: handleSubmit,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            label: \"Your name\",\n                            type: \"text\",\n                            name: \"name\",\n                            placeholder: \"John Doe\",\n                            value: form.name,\n                            handleChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/farhatmahi/Documents/ai-image-generator/client/pages/create-post.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormField__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            label: \"Prompt\",\n                            type: \"text\",\n                            name: \"prompt\",\n                            placeholder: \"John Doe\",\n                            value: form.name,\n                            handleChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/farhatmahi/Documents/ai-image-generator/client/pages/create-post.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/farhatmahi/Documents/ai-image-generator/client/pages/create-post.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/farhatmahi/Documents/ai-image-generator/client/pages/create-post.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/farhatmahi/Documents/ai-image-generator/client/pages/create-post.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(createpost, \"9j/yXfJAlVU+IU+GHnKGjVB8hmA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (createpost);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUtcG9zdC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQztBQUNkO0FBQ0c7QUFDUTtBQUU1QyxNQUFNSSxhQUFhLElBQU07O0lBQ3ZCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUMvQk0sTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUVBLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdWLCtDQUFRQSxDQUFDLEtBQUs7SUFDeEQsTUFBTSxDQUFDVyxrQkFBa0JDLG9CQUFvQixHQUFHWiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzlELE1BQU0sQ0FBQ2EsU0FBU0MsV0FBVyxHQUFHZCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTVDLE1BQU1lLGVBQWUsSUFBTSxDQUFDO0lBRTVCLE1BQU1DLGVBQWUsSUFBTSxDQUFDO0lBRTVCLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFVOzswQkFDakIsOERBQUNDOztrQ0FDQyw4REFBQ0M7d0JBQUdGLFdBQVU7a0NBQTRDOzs7Ozs7a0NBQzFELDhEQUFDRzt3QkFBRUgsV0FBVTtrQ0FBZ0Q7Ozs7Ozs7Ozs7OzswQkFLL0QsOERBQUNkO2dCQUFLYyxXQUFVO2dCQUFrQkksVUFBVVA7MEJBQzFDLDRFQUFDSTtvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNuQiw2REFBU0E7NEJBQ1J3QixPQUFNOzRCQUNOQyxNQUFLOzRCQUNMbEIsTUFBSzs0QkFDTG1CLGFBQVk7NEJBQ1pDLE9BQU90QixLQUFLRSxJQUFJOzRCQUNoQlUsY0FBY0E7Ozs7OztzQ0FFaEIsOERBQUNqQiw2REFBU0E7NEJBQ1J3QixPQUFNOzRCQUNOQyxNQUFLOzRCQUNMbEIsTUFBSzs0QkFDTG1CLGFBQVk7NEJBQ1pDLE9BQU90QixLQUFLRSxJQUFJOzRCQUNoQlUsY0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFCO0dBOUNNYjtBQWdETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcmVhdGUtcG9zdC5qc3g/ZDEyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybUZpZWxkIGZyb20gXCJAL2NvbXBvbmVudHMvRm9ybUZpZWxkXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHByZXZpZXcgfSBmcm9tIFwiLi4vYXNzZXRzXCI7XHJcbmltcG9ydCB7IGdldFJhbmRvbVByb21wdHMgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZXBvc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHByb21wdDogXCJcIixcclxuICAgIHBob3RvOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbZ2VuZXJhdGluZ0ltZywgc2V0R2VuZXJhdGluZ0ltZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2dlbmVyYXRpbmdQcm9tcHQsIHNldEdlbmVyYXRpbmdQcm9tcHRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge307XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpID0+IHt9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG9cIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC1bIzIyMjMyOF0gdGV4dC1bMzJweF1cIj5DcmVhdGU8L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1bIzY2NmU3NV0gdGV4dC1bMTRweF0gbWF4LXctWzUwMHB4XVwiPlxyXG4gICAgICAgICAgQ3JlYXRlIGltYWdpbmF0aXZlIGFuZCB2aXN1YWxseSBzdHVubmluZyBpbWFnZXMgdGhyb3VnaCBUb29sbmFtZSBhbmRcclxuICAgICAgICAgIHNoYXJlIHRoZW0gd2l0aCB0aGUgY29tbXVuaXR5XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibXQtMTYgbWF4LXctM3hsXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC01XCI+XHJcbiAgICAgICAgICA8Rm9ybUZpZWxkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiWW91ciBuYW1lXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSm9obiBEb2VcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybS5uYW1lfVxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9ybUZpZWxkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUHJvbXB0XCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicHJvbXB0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKb2huIERvZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtLm5hbWV9XHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVwb3N0O1xyXG4iXSwibmFtZXMiOlsiRm9ybUZpZWxkIiwidXNlU3RhdGUiLCJwcmV2aWV3IiwiZ2V0UmFuZG9tUHJvbXB0cyIsImNyZWF0ZXBvc3QiLCJmb3JtIiwic2V0Rm9ybSIsIm5hbWUiLCJwcm9tcHQiLCJwaG90byIsImdlbmVyYXRpbmdJbWciLCJzZXRHZW5lcmF0aW5nSW1nIiwiZ2VuZXJhdGluZ1Byb21wdCIsInNldEdlbmVyYXRpbmdQcm9tcHQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInAiLCJvblN1Ym1pdCIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/create-post.jsx\n"));

/***/ })

});