/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const [darkMode, setDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const toggleDarkMode = ()=>{\n        setDarkMode(!darkMode);\n    };\n    const toggleMenu = ()=>{\n        setMenuOpen(!menuOpen);\n    };\n    const handleLinkClick = (href)=>{\n        setMenuOpen(false);\n        router.push(href);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: darkMode ? 'dark' : 'light',\n        style: {\n            minHeight: '100vh',\n            display: 'flex',\n            flexDirection: 'column'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"AppGest\"\n                    }, void 0, false, {\n                        fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"menu-hamburger\",\n                        onClick: toggleMenu,\n                        children: \"☰\"\n                    }, void 0, false, {\n                        fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    menuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"menu\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"tile-list\",\n                            style: {\n                                display: 'grid',\n                                gridTemplateColumns: 'repeat(3, 1fr)',\n                                gridGap: 0\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"tile tile1\",\n                                    onClick: ()=>handleLinkClick('/seconnecter'),\n                                    style: {\n                                        gridColumn: 'span 2'\n                                    },\n                                    children: \"Se connecter\"\n                                }, void 0, false, {\n                                    fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"tile tile2\",\n                                    onClick: ()=>handleLinkClick('/logistique'),\n                                    style: {\n                                        gridColumn: 'span 1'\n                                    },\n                                    children: \"Logistique\"\n                                }, void 0, false, {\n                                    fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"tile tile3\",\n                                    onClick: ()=>handleLinkClick('/tracabilite'),\n                                    style: {\n                                        gridColumn: 'span 1'\n                                    },\n                                    children: \"Tra\\xe7abilit\\xe9\"\n                                }, void 0, false, {\n                                    fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"tile tile4\",\n                                    onClick: ()=>handleLinkClick('/production'),\n                                    style: {\n                                        gridColumn: 'span 1'\n                                    },\n                                    children: \"Production\"\n                                }, void 0, false, {\n                                    fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"tile tile5\",\n                                    onClick: ()=>handleLinkClick('/mediation'),\n                                    style: {\n                                        gridColumn: 'span 1'\n                                    },\n                                    children: \"M\\xe9diation\"\n                                }, void 0, false, {\n                                    fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"tile tile6\",\n                                    onClick: ()=>handleLinkClick('/sav'),\n                                    style: {\n                                        gridColumn: 'span 1'\n                                    },\n                                    children: \"SAV\"\n                                }, void 0, false, {\n                                    fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"tile tile7\",\n                                    onClick: ()=>handleLinkClick('/dons'),\n                                    style: {\n                                        gridColumn: 'span 1'\n                                    },\n                                    children: \"Dons\"\n                                }, void 0, false, {\n                                    fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"tile tile8\",\n                                    onClick: ()=>handleLinkClick('/bilans'),\n                                    style: {\n                                        gridColumn: 'span 1'\n                                    },\n                                    children: \"Bilans\"\n                                }, void 0, false, {\n                                    fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"tile tile9\",\n                                    onClick: ()=>handleLinkClick('/stocks'),\n                                    style: {\n                                        gridColumn: 'span 1'\n                                    },\n                                    children: \"Stocks\"\n                                }, void 0, false, {\n                                    fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"tile tile10\",\n                                    onClick: ()=>handleLinkClick('/admin'),\n                                    style: {\n                                        gridColumn: 'span 1'\n                                    },\n                                    children: \"Acc\\xe8s admin\"\n                                }, void 0, false, {\n                                    fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"tile tile11\",\n                                    onClick: ()=>handleLinkClick('/'),\n                                    style: {\n                                        gridColumn: 'span 1'\n                                    },\n                                    children: \"Accueil\"\n                                }, void 0, false, {\n                                    fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                style: {\n                    flex: 1\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"toggle-dark-mode\",\n                        onClick: toggleDarkMode,\n                        children: darkMode ? 'Light Mode' : 'Dark Mode'\n                    }, void 0, false, {\n                        fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"@n0r3f\"\n                    }, void 0, false, {\n                        fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/n0r3f/D\\xe9veloppement/appgest/src/pages/_app.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OzBCQUUxQiw4REFBQzJCOztrQ0FDQyw4REFBQ1I7d0JBQU9QLFdBQVU7d0JBQW1CUSxTQUFTZDtrQ0FDM0NMLFdBQVcsZUFBZTs7Ozs7O2tDQUU3Qiw4REFBQzJCO2tDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZDtBQUVBLGlFQUFlOUIsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiL2hvbWUvbjByM2YvRMOpdmVsb3BwZW1lbnQvYXBwZ2VzdC9zcmMvcGFnZXMvX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbZGFya01vZGUsIHNldERhcmtNb2RlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgdG9nZ2xlRGFya01vZGUgPSAoKSA9PiB7XG4gICAgc2V0RGFya01vZGUoIWRhcmtNb2RlKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgIHNldE1lbnVPcGVuKCFtZW51T3Blbik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTGlua0NsaWNrID0gKGhyZWYpID0+IHtcbiAgICBzZXRNZW51T3BlbihmYWxzZSk7XG4gICAgcm91dGVyLnB1c2goaHJlZik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17ZGFya01vZGUgPyAnZGFyaycgOiAnbGlnaHQnfSBzdHlsZT17eyBtaW5IZWlnaHQ6ICcxMDB2aCcsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8aDE+QXBwR2VzdDwvaDE+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWVudS1oYW1idXJnZXJcIiBvbkNsaWNrPXt0b2dnbGVNZW51fT7imLA8L2J1dHRvbj5cbiAgICAgICAge21lbnVPcGVuICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlsZS1saXN0XCIgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KDMsIDFmciknLCBncmlkR2FwOiAwIH19PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0aWxlIHRpbGUxXCIgb25DbGljaz17KCkgPT4gaGFuZGxlTGlua0NsaWNrKCcvc2Vjb25uZWN0ZXInKX0gc3R5bGU9e3sgZ3JpZENvbHVtbjogJ3NwYW4gMicgfX0+U2UgY29ubmVjdGVyPC9hPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0aWxlIHRpbGUyXCIgb25DbGljaz17KCkgPT4gaGFuZGxlTGlua0NsaWNrKCcvbG9naXN0aXF1ZScpfSBzdHlsZT17eyBncmlkQ29sdW1uOiAnc3BhbiAxJyB9fT5Mb2dpc3RpcXVlPC9hPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0aWxlIHRpbGUzXCIgb25DbGljaz17KCkgPT4gaGFuZGxlTGlua0NsaWNrKCcvdHJhY2FiaWxpdGUnKX0gc3R5bGU9e3sgZ3JpZENvbHVtbjogJ3NwYW4gMScgfX0+VHJhw6dhYmlsaXTDqTwvYT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGlsZSB0aWxlNFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxpbmtDbGljaygnL3Byb2R1Y3Rpb24nKX0gc3R5bGU9e3sgZ3JpZENvbHVtbjogJ3NwYW4gMScgfX0+UHJvZHVjdGlvbjwvYT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGlsZSB0aWxlNVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxpbmtDbGljaygnL21lZGlhdGlvbicpfSBzdHlsZT17eyBncmlkQ29sdW1uOiAnc3BhbiAxJyB9fT5Nw6lkaWF0aW9uPC9hPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0aWxlIHRpbGU2XCIgb25DbGljaz17KCkgPT4gaGFuZGxlTGlua0NsaWNrKCcvc2F2Jyl9IHN0eWxlPXt7IGdyaWRDb2x1bW46ICdzcGFuIDEnIH19PlNBVjwvYT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGlsZSB0aWxlN1wiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxpbmtDbGljaygnL2RvbnMnKX0gc3R5bGU9e3sgZ3JpZENvbHVtbjogJ3NwYW4gMScgfX0+RG9uczwvYT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGlsZSB0aWxlOFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxpbmtDbGljaygnL2JpbGFucycpfSBzdHlsZT17eyBncmlkQ29sdW1uOiAnc3BhbiAxJyB9fT5CaWxhbnM8L2E+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRpbGUgdGlsZTlcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMaW5rQ2xpY2soJy9zdG9ja3MnKX0gc3R5bGU9e3sgZ3JpZENvbHVtbjogJ3NwYW4gMScgfX0+U3RvY2tzPC9hPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0aWxlIHRpbGUxMFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxpbmtDbGljaygnL2FkbWluJyl9IHN0eWxlPXt7IGdyaWRDb2x1bW46ICdzcGFuIDEnIH19PkFjY8OocyBhZG1pbjwvYT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGlsZSB0aWxlMTFcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMaW5rQ2xpY2soJy8nKX0gc3R5bGU9e3sgZ3JpZENvbHVtbjogJ3NwYW4gMScgfX0+QWNjdWVpbDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbiBzdHlsZT17eyBmbGV4OiAxIH19PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRvZ2dsZS1kYXJrLW1vZGVcIiBvbkNsaWNrPXt0b2dnbGVEYXJrTW9kZX0+XG4gICAgICAgICAge2RhcmtNb2RlID8gJ0xpZ2h0IE1vZGUnIDogJ0RhcmsgTW9kZSd9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8c3Bhbj5AbjByM2Y8L3NwYW4+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMaW5rIiwidXNlUm91dGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkYXJrTW9kZSIsInNldERhcmtNb2RlIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsInJvdXRlciIsInRvZ2dsZURhcmtNb2RlIiwidG9nZ2xlTWVudSIsImhhbmRsZUxpbmtDbGljayIsImhyZWYiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImhlYWRlciIsImgxIiwiYnV0dG9uIiwib25DbGljayIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkR2FwIiwiYSIsImdyaWRDb2x1bW4iLCJtYWluIiwiZmxleCIsImZvb3RlciIsInNwYW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();