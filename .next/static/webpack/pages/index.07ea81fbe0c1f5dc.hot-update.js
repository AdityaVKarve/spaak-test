"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { sags } = param;\n    // Group the sags by `statusid`\n    const grouped = sags.reduce((acc, sag)=>{\n        acc[sag.statusid] = acc[sag.statusid] || [];\n        acc[sag.statusid].push(sag);\n        return acc;\n    }, {});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-100 flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"bg-white shadow-md p-4 sticky top-0 z-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-4xl font-bold text-orange-600\",\n                    children: \"Aditya's Kanban Board\"\n                }, void 0, false, {\n                    fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 overflow-y-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-6 p-6 overflow-x-auto\",\n                    children: Object.entries(grouped).map((param)=>/*#__PURE__*/ {\n                        let [statusid, items] = param;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-shrink-0 w-64 bg-orange-500 text-white p-4 rounded-lg shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-semibold mb-4\",\n                                    children: [\n                                        \"Status \",\n                                        statusid\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col gap-4\",\n                                    children: items.map((sag)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MinimizableCard, {\n                                            sag: sag\n                                        }, sag.id, false, {\n                                            fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 19\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, statusid, true, {\n                            fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nfunction MinimizableCard(param) {\n    let { sag } = param;\n    _s();\n    console.log(sag);\n    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white text-black p-4 rounded-lg shadow-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-lg font-bold\",\n                        children: sag.titelkort\n                    }, void 0, false, {\n                        fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-gray-500\",\n                        onClick: ()=>setIsExpanded(!isExpanded),\n                        children: isExpanded ? \"▲\" : \"▼\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            isExpanded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 space-y-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"font-semibold\",\n                                children: \"Title\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: sag.titel\n                            }, void 0, false, {\n                                fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"font-semibold\",\n                                children: \"Resume\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: sag.resume\n                            }, void 0, false, {\n                                fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"font-semibold\",\n                                children: \"Created At\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: new Date(sag.createdAt).toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"font-semibold\",\n                                children: \"Updated At\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: new Date(sag.updatedAt).toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aditya/spaak-test/src/pages/index.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(MinimizableCard, \"FPNvbbHVlWWR4LKxxNntSxiIS38=\");\n_c1 = MinimizableCard;\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"MinimizableCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2lDOztBQXVCbEIsU0FBU0MsS0FBSyxLQUF5QjtRQUF6QixFQUFFQyxJQUFJLEVBQW1CLEdBQXpCO0lBQzNCLCtCQUErQjtJQUMvQixNQUFNQyxVQUFpQ0QsS0FBS0UsTUFBTSxDQUFDLENBQUNDLEtBQTRCQztRQUM5RUQsR0FBRyxDQUFDQyxJQUFJQyxRQUFRLENBQUMsR0FBR0YsR0FBRyxDQUFDQyxJQUFJQyxRQUFRLENBQUMsSUFBSSxFQUFFO1FBQzNDRixHQUFHLENBQUNDLElBQUlDLFFBQVEsQ0FBQyxDQUFDQyxJQUFJLENBQUNGO1FBQ3ZCLE9BQU9EO0lBQ1QsR0FBRyxDQUFDO0lBRUoscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDQztnQkFBT0QsV0FBVTswQkFDaEIsNEVBQUNFO29CQUFHRixXQUFVOzhCQUFxQzs7Ozs7Ozs7Ozs7MEJBSXJELDhEQUFDRDtnQkFBSUMsV0FBVTswQkFFYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1pHLE9BQU9DLE9BQU8sQ0FBQ1gsU0FBU1ksR0FBRyxDQUFDOzRCQUFDLENBQUNSLFVBQVVTLE1BQU07K0JBQzdDLDhEQUFDUDs0QkFFQ0MsV0FBVTs7OENBRVYsOERBQUNPO29DQUFHUCxXQUFVOzt3Q0FBNkI7d0NBQVFIOzs7Ozs7OzhDQUNuRCw4REFBQ0U7b0NBQUlDLFdBQVU7OENBQ1pNLE1BQU1ELEdBQUcsQ0FBQyxDQUFDVCxvQkFDViw4REFBQ1k7NENBQTZCWixLQUFLQTsyQ0FBYkEsSUFBSWEsRUFBRTs7Ozs7Ozs7Ozs7MkJBTjNCWjs7Ozs7b0JBU0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpCO0tBcEN3Qk47QUFzQ3hCLFNBQVNpQixnQkFBZ0IsS0FBcUI7UUFBckIsRUFBRVosR0FBRyxFQUFnQixHQUFyQjs7SUFDdkJjLFFBQVFDLEdBQUcsQ0FBQ2Y7SUFDWixNQUFNLENBQUNnQixZQUFZQyxjQUFjLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUU3QyxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2M7d0JBQUdkLFdBQVU7a0NBQXFCSixJQUFJbUIsU0FBUzs7Ozs7O2tDQUNoRCw4REFBQ0M7d0JBQ0NoQixXQUFVO3dCQUNWaUIsU0FBUyxJQUFNSixjQUFjLENBQUNEO2tDQUU3QkEsYUFBYSxNQUFNOzs7Ozs7Ozs7Ozs7WUFLdkJBLDRCQUNDLDhEQUFDYjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEOzswQ0FDQyw4REFBQ21CO2dDQUFHbEIsV0FBVTswQ0FBZ0I7Ozs7OzswQ0FDOUIsOERBQUNtQjswQ0FBR3ZCLElBQUl3QixLQUFLOzs7Ozs7Ozs7Ozs7a0NBRWYsOERBQUNyQjs7MENBQ0MsOERBQUNtQjtnQ0FBR2xCLFdBQVU7MENBQWdCOzs7Ozs7MENBQzlCLDhEQUFDbUI7MENBQUd2QixJQUFJeUIsTUFBTTs7Ozs7Ozs7Ozs7O2tDQUVoQiw4REFBQ3RCOzswQ0FDQyw4REFBQ21CO2dDQUFHbEIsV0FBVTswQ0FBZ0I7Ozs7OzswQ0FDOUIsOERBQUNtQjswQ0FBRyxJQUFJRyxLQUFLMUIsSUFBSTJCLFNBQVMsRUFBRUMsa0JBQWtCOzs7Ozs7Ozs7Ozs7a0NBRWhELDhEQUFDekI7OzBDQUNDLDhEQUFDbUI7Z0NBQUdsQixXQUFVOzBDQUFnQjs7Ozs7OzBDQUM5Qiw4REFBQ21COzBDQUFHLElBQUlHLEtBQUsxQixJQUFJNkIsU0FBUyxFQUFFRCxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0xRDtHQXhDU2hCO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgU2FnIHtcbiAgaWQ6IG51bWJlcjtcbiAgc3RhdHVzaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgdGl0bGVDYXJkOiBzdHJpbmc7XG4gIHJlc3VtZTogc3RyaW5nO1xuICBjcmVhdGVkQXQ6IHN0cmluZztcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2FncycpO1xuICBjb25zdCBzYWdzOiBTYWdbXSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc2FncyxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHNhZ3MgfTogeyBzYWdzOiBTYWdbXSB9KSB7XG4gIC8vIEdyb3VwIHRoZSBzYWdzIGJ5IGBzdGF0dXNpZGBcbiAgY29uc3QgZ3JvdXBlZDogUmVjb3JkPG51bWJlciwgU2FnW10+ID0gc2Fncy5yZWR1Y2UoKGFjYzogUmVjb3JkPG51bWJlciwgU2FnW10+LCBzYWcpID0+IHtcbiAgICBhY2Nbc2FnLnN0YXR1c2lkXSA9IGFjY1tzYWcuc3RhdHVzaWRdIHx8IFtdO1xuICAgIGFjY1tzYWcuc3RhdHVzaWRdLnB1c2goc2FnKTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMCBmbGV4IGZsZXgtY29sXCI+XG4gICAgICB7LyogRml4ZWQgSGVhZGVyICovfVxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctbWQgcC00IHN0aWNreSB0b3AtMCB6LTEwXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1vcmFuZ2UtNjAwXCI+QWRpdHlhJ3MgS2FuYmFuIEJvYXJkPC9oMT5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICB7LyogU2Nyb2xsYWJsZSBDb250ZW50ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgIHsvKiBTY3JvbGxhYmxlIFN3aW1sYW5lcyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02IHAtNiBvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoZ3JvdXBlZCkubWFwKChbc3RhdHVzaWQsIGl0ZW1zXSkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e3N0YXR1c2lkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHctNjQgYmctb3JhbmdlLTUwMCB0ZXh0LXdoaXRlIHAtNCByb3VuZGVkLWxnIHNoYWRvdy1tZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNFwiPlN0YXR1cyB7c3RhdHVzaWR9PC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoc2FnKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8TWluaW1pemFibGVDYXJkIGtleT17c2FnLmlkfSBzYWc9e3NhZ30gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTWluaW1pemFibGVDYXJkKHsgc2FnIH06IHsgc2FnOiBTYWcgfSkge1xuICBjb25zb2xlLmxvZyhzYWcpO1xuICBjb25zdCBbaXNFeHBhbmRlZCwgc2V0SXNFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtYmxhY2sgcC00IHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XG4gICAgICB7LyogQWx3YXlzIFZpc2libGUgVGl0bGUgQ2FyZCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPntzYWcudGl0ZWxrb3J0fTwvaDM+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0V4cGFuZGVkKCFpc0V4cGFuZGVkKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpc0V4cGFuZGVkID8gJ+KWsicgOiAn4pa8J31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEV4cGFuZGFibGUgRGV0YWlscyAqL31cbiAgICAgIHtpc0V4cGFuZGVkICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHNwYWNlLXktMlwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlRpdGxlPC9oND5cbiAgICAgICAgICAgIDxwPntzYWcudGl0ZWx9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlJlc3VtZTwvaDQ+XG4gICAgICAgICAgICA8cD57c2FnLnJlc3VtZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+Q3JlYXRlZCBBdDwvaDQ+XG4gICAgICAgICAgICA8cD57bmV3IERhdGUoc2FnLmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlVwZGF0ZWQgQXQ8L2g0PlxuICAgICAgICAgICAgPHA+e25ldyBEYXRlKHNhZy51cGRhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG9tZSIsInNhZ3MiLCJncm91cGVkIiwicmVkdWNlIiwiYWNjIiwic2FnIiwic3RhdHVzaWQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaDEiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiaXRlbXMiLCJoMiIsIk1pbmltaXphYmxlQ2FyZCIsImlkIiwiY29uc29sZSIsImxvZyIsImlzRXhwYW5kZWQiLCJzZXRJc0V4cGFuZGVkIiwiaDMiLCJ0aXRlbGtvcnQiLCJidXR0b24iLCJvbkNsaWNrIiwiaDQiLCJwIiwidGl0ZWwiLCJyZXN1bWUiLCJEYXRlIiwiY3JlYXRlZEF0IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidXBkYXRlZEF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});