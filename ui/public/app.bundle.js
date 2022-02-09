/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './src/App.jsx':
      /*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");\n/* harmony import */ var _components_NavigationBar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/NavigationBar.jsx */ "./src/components/NavigationBar.jsx");\n/* harmony import */ var _components_LessonDisplay_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/LessonDisplay.jsx */ "./src/components/LessonDisplay.jsx");\n/* harmony import */ var _utilities_getLessons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/getLessons.js */ "./src/utilities/getLessons.js");\n/* harmony import */ var _utilities_newArticle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities/newArticle.js */ "./src/utilities/newArticle.js");\n/* harmony import */ var _utilities_newLesson_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities/newLesson.js */ "./src/utilities/newLesson.js");\n/* harmony import */ var _utilities_editArticle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities/editArticle.js */ "./src/utilities/editArticle.js");\n/* harmony import */ var _components_AllLessonsDisplay_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/AllLessonsDisplay.jsx */ "./src/components/AllLessonsDisplay.jsx");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n// Browser support imports\n\n // React and bootstrap imports\n\n\n\n // Component imports\n\n\n\n\n\n\n\n\n\nvar App = function App() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      lessons = _useState2[0],\n      setLessons = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),\n      _useState4 = _slicedToArray(_useState3, 2),\n      lessonIdSelect = _useState4[0],\n      setLessonIdSelect = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\'lessons\'),\n      _useState6 = _slicedToArray(_useState5, 2),\n      view = _useState6[0],\n      setView = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\'home\'),\n      _useState8 = _slicedToArray(_useState7, 2),\n      editView = _useState8[0],\n      setEditView = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\'editing\'),\n      _useState10 = _slicedToArray(_useState9, 2),\n      mode = _useState10[0],\n      setMode = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),\n      _useState12 = _slicedToArray(_useState11, 2),\n      articleIdSelect = _useState12[0],\n      setArticleIdSelect = _useState12[1];\n\n  function loadLessons() {\n    return _loadLessons.apply(this, arguments);\n  }\n\n  function _loadLessons() {\n    _loadLessons = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {\n      var lessonList;\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.prev = 0;\n              _context4.next = 3;\n              return (0,_utilities_getLessons_js__WEBPACK_IMPORTED_MODULE_5__["default"])();\n\n            case 3:\n              lessonList = _context4.sent;\n              setLessons(lessonList);\n              _context4.next = 10;\n              break;\n\n            case 7:\n              _context4.prev = 7;\n              _context4.t0 = _context4["catch"](0);\n              console.log(\'Error:\', _context4.t0);\n\n            case 10:\n            case "end":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, null, [[0, 7]]);\n    }));\n    return _loadLessons.apply(this, arguments);\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    loadLessons();\n  }, []);\n\n  var toggleModeChange = function toggleModeChange() {\n    if (mode === \'editing\') {\n      setMode(\'viewing\');\n    } else {\n      setMode(\'editing\');\n    }\n  };\n\n  var handleNewArticle = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(title) {\n      var response, articleId;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return (0,_utilities_newArticle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(title, lessonIdSelect);\n\n            case 3:\n              response = _context.sent;\n              articleId = response.data.addArticle.id;\n              _context.next = 7;\n              return loadLessons();\n\n            case 7:\n              setArticleIdSelect(articleId);\n              setEditView(\'home\');\n              _context.next = 14;\n              break;\n\n            case 11:\n              _context.prev = 11;\n              _context.t0 = _context["catch"](0);\n              console.log(\'Error\', _context.t0);\n\n            case 14:\n            case "end":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 11]]);\n    }));\n\n    return function handleNewArticle(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleNewLesson = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(lessonInputs) {\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              console.log(lessonInputs);\n              _context2.prev = 1;\n              _context2.next = 4;\n              return (0,_utilities_newLesson_js__WEBPACK_IMPORTED_MODULE_7__["default"])(lessonInputs.title, lessonInputs.description);\n\n            case 4:\n              _context2.next = 6;\n              return loadLessons();\n\n            case 6:\n              _context2.next = 11;\n              break;\n\n            case 8:\n              _context2.prev = 8;\n              _context2.t0 = _context2["catch"](1);\n              console.log(_context2.t0);\n\n            case 11:\n            case "end":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[1, 8]]);\n    }));\n\n    return function handleNewLesson(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }(); // editArticle needs article, lessonId, and articleId. REMEMBER when plugging it in.\n\n\n  var handleEditText = /*#__PURE__*/function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(article, lessonId) {\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.prev = 0;\n              _context3.next = 3;\n              return (0,_utilities_editArticle_js__WEBPACK_IMPORTED_MODULE_8__["default"])(article, lessonId);\n\n            case 3:\n              _context3.next = 5;\n              return loadLessons();\n\n            case 5:\n              setEditView(\'home\');\n              _context3.next = 11;\n              break;\n\n            case 8:\n              _context3.prev = 8;\n              _context3.t0 = _context3["catch"](0);\n              console.log(\'Failed to update article, Error:\', _context3.t0);\n\n            case 11:\n            case "end":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[0, 8]]);\n    }));\n\n    return function handleEditText(_x3, _x4) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var getLesson = function getLesson() {\n    var findResult = lessons.find(function (lesson) {\n      return lesson.id === lessonIdSelect;\n    });\n    return findResult;\n  };\n\n  var handleViewLessons = function handleViewLessons() {\n    setView(\'lessons\');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {\n    className: "app"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {\n    id: "app-container"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_NavigationBar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    view: view,\n    handleViewLessons: handleViewLessons,\n    mode: mode,\n    toggleModeChange: toggleModeChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], null, view === \'lessons\' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_AllLessonsDisplay_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {\n    lessons: lessons,\n    mode: mode,\n    handleNewLesson: handleNewLesson,\n    setLessonIdSelect: setLessonIdSelect,\n    setView: setView\n  }) : view === \'lesson\' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_LessonDisplay_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    handleEditText: handleEditText,\n    handleArticleIdSelect: setArticleIdSelect,\n    articleIdSelect: articleIdSelect,\n    handleNewArticle: handleNewArticle,\n    lesson: getLesson(),\n    mode: mode,\n    editView: editView,\n    changeEditView: setEditView\n  }) : console.log(\'invalid view. Code-side error\'))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://class-app/./src/App.jsx?'
        );

        /***/
      },

    /***/ './src/Index.jsx':
      /*!***********************!*\
  !*** ./src/Index.jsx ***!
  \***********************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.jsx */ "./src/App.jsx");\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_0__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById(\'contents\'));\n\nif (false) {}\n\n//# sourceURL=webpack://class-app/./src/Index.jsx?'
        );

        /***/
      },

    /***/ './src/components/AllLessonsDisplay.jsx':
      /*!**********************************************!*\
  !*** ./src/components/AllLessonsDisplay.jsx ***!
  \**********************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");\n/* harmony import */ var _ButtonRenderer_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonRenderer.jsx */ "./src/components/ButtonRenderer.jsx");\n/* harmony import */ var _FormWrapper_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormWrapper.jsx */ "./src/components/FormWrapper.jsx");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nvar initialInputs = {\n  title: \'\',\n  description: \'\'\n};\n\nvar AllLessonsDisplay = function AllLessonsDisplay(_ref) {\n  var setView = _ref.setView,\n      setLessonIdSelect = _ref.setLessonIdSelect,\n      lessons = _ref.lessons,\n      mode = _ref.mode,\n      handleNewLesson = _ref.handleNewLesson;\n  if (!lessons) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading lessons...");\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      isEditing = _useState2[0],\n      setIsEditing = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialInputs),\n      _useState4 = _slicedToArray(_useState3, 2),\n      inputs = _useState4[0],\n      setInputs = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState6 = _slicedToArray(_useState5, 2),\n      currentlySubmitting = _useState6[0],\n      setCurrentlySubmitting = _useState6[1];\n\n  var handleLessonSelect = function handleLessonSelect(id) {\n    setLessonIdSelect(id);\n    setView(\'lesson\');\n  };\n\n  var handleInputChange = function handleInputChange(event) {\n    var _event$target = event.target,\n        name = _event$target.name,\n        value = _event$target.value;\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, _defineProperty({}, name, value)));\n  };\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              setCurrentlySubmitting(true);\n\n              if (!(inputs.title === \'\')) {\n                _context.next = 5;\n                break;\n              }\n\n              console.log(\'Warning: No blank titles.\');\n              return _context.abrupt("return");\n\n            case 5:\n              _context.next = 7;\n              return handleNewLesson(inputs);\n\n            case 7:\n              setCurrentlySubmitting(false);\n              handleEndEdit();\n              setInputs(initialInputs);\n\n            case 10:\n            case "end":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var handleStartEdit = function handleStartEdit() {\n    setIsEditing(true);\n  };\n\n  var handleEndEdit = function handleEndEdit() {\n    setIsEditing(false);\n  };\n\n  if (!lessons) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading...");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    id: "lessons"\n  }, lessons.map(function (lesson) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {\n      onClick: function onClick() {\n        return handleLessonSelect(lesson.id);\n      },\n      className: "lesson-card",\n      key: lesson.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Title, null, lesson.lesson_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Subtitle, {\n      className: "mb-2 text-muted"\n    }, lesson.sections.length, " sections"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Text, null, lesson.lesson_description)));\n  })), mode === \'editing\' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ButtonRenderer_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    buttonName: "New lesson",\n    isContentActive: isEditing,\n    activateContent: handleStartEdit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormWrapper_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    currentlySubmitting: currentlySubmitting,\n    formType: "lesson",\n    formDescription: "Give your lesson a title and a short description. After creating a lesson, you will be able to edit it.",\n    handleSubmit: handleSubmit,\n    handleEndEdit: handleEndEdit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Label, null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Control, {\n    className: "form-control",\n    type: "text",\n    alt: "title",\n    placeholder: "Enter title",\n    value: inputs.title || \'\',\n    name: "title",\n    onChange: handleInputChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Label, null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Control, {\n    className: "form-control",\n    type: "text",\n    alt: "description",\n    placeholder: "Enter description",\n    value: inputs.description || \'\',\n    name: "description",\n    onChange: handleInputChange\n  }))))) : null);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllLessonsDisplay);\n\n//# sourceURL=webpack://class-app/./src/components/AllLessonsDisplay.jsx?'
        );

        /***/
      },

    /***/ './src/components/ArticleDisplay.jsx':
      /*!*******************************************!*\
  !*** ./src/components/ArticleDisplay.jsx ***!
  \*******************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _SectionEditControlBar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionEditControlBar.jsx */ "./src/components/SectionEditControlBar.jsx");\n/* harmony import */ var _ArticleEditor_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArticleEditor.jsx */ "./src/components/ArticleEditor.jsx");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");\n/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Alert */ "./node_modules/react-bootstrap/esm/Alert.js");\n/* harmony import */ var _WarningModal_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WarningModal.jsx */ "./src/components/WarningModal.jsx");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n // mode can be \'editing\' or \'viewing.\'\n\nvar nullAlert = {\n  show: false,\n  variant: null,\n  content: null\n};\n\nvar ArticleDisplay = function ArticleDisplay(_ref) {\n  var childComp = _ref.childComp,\n      isEdit = _ref.isEdit,\n      setIsEdit = _ref.setIsEdit,\n      saveText = _ref.saveText,\n      article = _ref.article,\n      mode = _ref.mode,\n      lessonId = _ref.lessonId;\n  if (!article) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "No articles yet!", childComp);\n  var title = article.title;\n  var content = article.content;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(content),\n      _useState2 = _slicedToArray(_useState, 2),\n      editedContent = _useState2[0],\n      setEditedContent = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(title),\n      _useState4 = _slicedToArray(_useState3, 2),\n      editedTitle = _useState4[0],\n      setEditedTitle = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(nullAlert),\n      _useState6 = _slicedToArray(_useState5, 2),\n      alert = _useState6[0],\n      setAlert = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState8 = _slicedToArray(_useState7, 2),\n      showWarningModal = _useState8[0],\n      setShowWarningModal = _useState8[1];\n\n  var handleModalClose = function handleModalClose() {\n    return setShowWarningModal(false);\n  };\n\n  var handleModalContinue = function handleModalContinue() {\n    setIsEdit(false);\n    setShowWarningModal(false);\n    setEditedContent(content);\n    setEditedTitle(title);\n  }; // update edit content/title when changing to different article\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setEditedContent(content);\n    setEditedTitle(title);\n  }, [content, title]);\n\n  var handleCancel = function handleCancel() {\n    setShowWarningModal(true);\n  };\n\n  var handleContentChange = function handleContentChange(e) {\n    setEditedContent(e.target.value);\n  };\n\n  var handleTitleChange = function handleTitleChange(e) {\n    return [setEditedTitle(e.target.value)];\n  };\n\n  var handleSaveText = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var updatedArticle;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              updatedArticle = {\n                content: editedContent,\n                title: editedTitle,\n                id: article.id\n              };\n              _context.next = 3;\n              return saveText(updatedArticle, lessonId);\n\n            case 3:\n              setIsEdit(false);\n\n            case 4:\n            case "end":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSaveText() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  if (!isEdit) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      className: "bin article"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {\n      className: "article-title"\n    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {\n      className: "article-content"\n    }, content)), mode === \'editing\' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {\n      onClick: function onClick() {\n        return setIsEdit(true);\n      },\n      variant: "primary",\n      className: "nav-btn"\n    }, "Edit title and content")) : null, alert.show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_5__["default"], {\n      variant: alert.variant\n    }, alert.message) : null);\n  } else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_WarningModal_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {\n      title: "Are you sure you want to continue?",\n      body: "Canceling the current edit will cause the current changes to be lost.",\n      closeBtnText: "Continue editing",\n      continueBtnText: "Delete changes",\n      show: showWarningModal,\n      handleContinue: handleModalContinue,\n      handleClose: handleModalClose\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      className: "bin article"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {\n      className: "article-title"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {\n      alt: "article title",\n      onChange: handleTitleChange,\n      value: editedTitle\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ArticleEditor_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {\n      handleContentChange: handleContentChange,\n      content: editedContent\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SectionEditControlBar_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {\n      handleCancel: handleCancel,\n      saveText: handleSaveText,\n      isEdit: isEdit\n    })));\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleDisplay);\n\n//# sourceURL=webpack://class-app/./src/components/ArticleDisplay.jsx?'
        );

        /***/
      },

    /***/ './src/components/ArticleEditor.jsx':
      /*!******************************************!*\
  !*** ./src/components/ArticleEditor.jsx ***!
  \******************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n\n\nvar ArticleEditor = function ArticleEditor(_ref) {\n  var handleContentChange = _ref.handleContentChange,\n      content = _ref.content;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {\n    alt: "Article body",\n    value: content,\n    onChange: handleContentChange,\n    className: "textarea-add-text"\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleEditor);\n\n//# sourceURL=webpack://class-app/./src/components/ArticleEditor.jsx?'
        );

        /***/
      },

    /***/ './src/components/ButtonRenderer.jsx':
      /*!*******************************************!*\
  !*** ./src/components/ButtonRenderer.jsx ***!
  \*******************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");\n\n // Renders a button. On click, will render children.\n\nvar ButtonRenderer = function ButtonRenderer(_ref) {\n  var buttonName = _ref.buttonName,\n      children = _ref.children,\n      isContentActive = _ref.isContentActive,\n      activateContent = _ref.activateContent;\n  return !isContentActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    className: "new-section-btn",\n    onClick: activateContent\n  }, buttonName) : isContentActive ? children : null;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonRenderer);\n\n//# sourceURL=webpack://class-app/./src/components/ButtonRenderer.jsx?'
        );

        /***/
      },

    /***/ './src/components/FormWrapper.jsx':
      /*!****************************************!*\
  !*** ./src/components/FormWrapper.jsx ***!
  \****************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");\n\n\n\n\nvar FormWrapper = function FormWrapper(_ref) {\n  var currentlySubmitting = _ref.currentlySubmitting,\n      formType = _ref.formType,\n      formDescription = _ref.formDescription,\n      children = _ref.children,\n      handleSubmit = _ref.handleSubmit,\n      handleEndEdit = _ref.handleEndEdit;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "bin form-container"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Create new ", formType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, formDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    onSubmit: handleSubmit,\n    className: "bin input-form"\n  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    variant: "success",\n    type: "submit"\n  }, !currentlySubmitting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "Create ", formType) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "Submitting...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    className: "nav-btn",\n    variant: "warning",\n    onClick: handleEndEdit\n  }, "Cancel")));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormWrapper);\n\n//# sourceURL=webpack://class-app/./src/components/FormWrapper.jsx?'
        );

        /***/
      },

    /***/ './src/components/LessonDisplay.jsx':
      /*!******************************************!*\
  !*** ./src/components/LessonDisplay.jsx ***!
  \******************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");\n/* harmony import */ var _SectionNavigation_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionNavigation.jsx */ "./src/components/SectionNavigation.jsx");\n/* harmony import */ var _ArticleDisplay_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArticleDisplay.jsx */ "./src/components/ArticleDisplay.jsx");\n/* harmony import */ var _ButtonRenderer_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ButtonRenderer.jsx */ "./src/components/ButtonRenderer.jsx");\n/* harmony import */ var _FormWrapper_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormWrapper.jsx */ "./src/components/FormWrapper.jsx");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nvar initialInputs = {\n  title: \'\'\n};\n\nvar LessonDisplay = function LessonDisplay(_ref) {\n  var handleEditText = _ref.handleEditText,\n      lesson = _ref.lesson,\n      mode = _ref.mode,\n      articleIdSelect = _ref.articleIdSelect,\n      handleNewArticle = _ref.handleNewArticle,\n      handleArticleIdSelect = _ref.handleArticleIdSelect;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      isArticleEdit = _useState2[0],\n      setIsArticleEdit = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      isEditing = _useState4[0],\n      setIsEditing = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialInputs),\n      _useState6 = _slicedToArray(_useState5, 2),\n      inputs = _useState6[0],\n      setInputs = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState8 = _slicedToArray(_useState7, 2),\n      currentlySubmitting = _useState8[0],\n      setCurrentlySubmitting = _useState8[1]; // loading message\n\n\n  if (lesson === undefined) {\n    return (\n      /*#__PURE__*/\n      // add animated spinner?\n      react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading lesson...")\n    );\n  }\n\n  var getArticleList = function getArticleList(lesson) {\n    return lesson.sections;\n  };\n\n  var getArticle = function getArticle(lesson, articleId) {\n    var articles = getArticleList(lesson);\n    var article = articles.find(function (article) {\n      return article.id === articleId;\n    });\n    return article;\n  }; // Form handling\n\n\n  var handleInputChange = function handleInputChange(event) {\n    var _event$target = event.target,\n        name = _event$target.name,\n        value = _event$target.value;\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, _defineProperty({}, name, value)));\n  };\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              setCurrentlySubmitting(true);\n\n              if (!(inputs.title === \'\')) {\n                _context.next = 5;\n                break;\n              }\n\n              console.log(\'Warning: No blank titles.\');\n              return _context.abrupt("return");\n\n            case 5:\n              _context.next = 7;\n              return handleNewArticle(inputs.title);\n\n            case 7:\n              setCurrentlySubmitting(false);\n              handleEndEdit();\n              setInputs(initialInputs);\n\n            case 10:\n            case "end":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var handleStartEdit = function handleStartEdit() {\n    setIsEditing(true);\n  };\n\n  var handleEndEdit = function handleEndEdit() {\n    setIsEditing(false);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {\n    className: "lesson-title"\n  }, lesson.lesson_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    xs: 2,\n    className: "section-nav"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SectionNavigation_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    isEdit: isArticleEdit,\n    articles: getArticleList(lesson),\n    handleArticleSelect: handleArticleIdSelect\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    id: "article-edit-display",\n    xs: 10\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ArticleDisplay_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    isEdit: isArticleEdit,\n    setIsEdit: setIsArticleEdit,\n    mode: mode,\n    lessonId: lesson.id,\n    saveText: handleEditText,\n    article: getArticle(lesson, articleIdSelect)\n  }), mode === \'editing\' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ButtonRenderer_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    buttonName: "New article",\n    isContentActive: isEditing,\n    activateContent: handleStartEdit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormWrapper_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    currentlySubmitting: currentlySubmitting,\n    formType: "article",\n    formDescription: "To create a new article, give it a title. You will be able to add content to it later.",\n    handleSubmit: handleSubmit,\n    handleEndEdit: handleEndEdit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].Label, null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].Control, {\n    className: "form-control",\n    type: "text",\n    alt: "title",\n    placeholder: "Enter title",\n    value: inputs.title || \'\',\n    name: "title",\n    onChange: handleInputChange\n  }))))) : null));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LessonDisplay);\n\n//# sourceURL=webpack://class-app/./src/components/LessonDisplay.jsx?'
        );

        /***/
      },

    /***/ './src/components/NavigationBar.jsx':
      /*!******************************************!*\
  !*** ./src/components/NavigationBar.jsx ***!
  \******************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");\n\n\n\nvar NavigationBar = function NavigationBar(_ref) {\n  var handleViewLessons = _ref.handleViewLessons,\n      view = _ref.view,\n      toggleModeChange = _ref.toggleModeChange,\n      mode = _ref.mode;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {\n    id: "nav-bar"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("u", null, "student-teacher"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, view !== \'lessons\' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    className: "nav-btn",\n    onClick: handleViewLessons,\n    variant: "primary"\n  }, "View all lessons") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    className: "nav-btn",\n    onClick: toggleModeChange,\n    variant: "dark"\n  }, mode)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationBar);\n\n//# sourceURL=webpack://class-app/./src/components/NavigationBar.jsx?'
        );

        /***/
      },

    /***/ './src/components/SectionEditControlBar.jsx':
      /*!**************************************************!*\
  !*** ./src/components/SectionEditControlBar.jsx ***!
  \**************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar SectionEditControlBar = function SectionEditControlBar(_ref) {\n  var saveText = _ref.saveText,\n      handleCancel = _ref.handleCancel,\n      isEdit = _ref.isEdit;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'Save text\'),\n      _useState2 = _slicedToArray(_useState, 2),\n      saveBtnText = _useState2[0],\n      setSaveBtnText = _useState2[1]; // Resets the save button text when editView changes.\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setSaveBtnText(\'Save text\');\n  }, [isEdit]);\n\n  var handleClick = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setSaveBtnText(\'Saving...\');\n              saveText();\n\n            case 2:\n            case "end":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleClick() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    onClick: handleClick,\n    variant: "success",\n    className: "nav-btn"\n  }, saveBtnText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    onClick: handleCancel,\n    variant: "warning",\n    className: "nav-btn"\n  }, "Cancel edit"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionEditControlBar);\n\n//# sourceURL=webpack://class-app/./src/components/SectionEditControlBar.jsx?'
        );

        /***/
      },

    /***/ './src/components/SectionNavigation.jsx':
      /*!**********************************************!*\
  !*** ./src/components/SectionNavigation.jsx ***!
  \**********************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _WarningModal_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WarningModal.jsx */ "./src/components/WarningModal.jsx");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n // Side bar article nav\n\nvar SectionNavigation = function SectionNavigation(_ref) {\n  var isEdit = _ref.isEdit,\n      articles = _ref.articles,\n      handleArticleSelect = _ref.handleArticleSelect;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      showModal = _useState2[0],\n      setShowModal = _useState2[1]; // State for modal\n\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      articleIdHold = _useState4[0],\n      setArticleIdHold = _useState4[1];\n\n  var handleNavClick = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!isEdit) {\n                _context.next = 4;\n                break;\n              }\n\n              setArticleIdHold(id);\n              setShowModal(true);\n              return _context.abrupt("return");\n\n            case 4:\n              handleArticleSelect(id);\n\n            case 5:\n            case "end":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleNavClick(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var handleArticleNavigation = function handleArticleNavigation() {\n    setShowModal(false);\n    handleArticleSelect(articleIdHold);\n  };\n\n  var handleModalClose = function handleModalClose() {\n    return setShowModal(false);\n  };\n\n  if (!articles) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "No articles yet.");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_WarningModal_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    title: "Are you sure you want to continue?",\n    body: "Navigating to another article will cause unsaved edits to be lost. Click \'Go back\' to return to the current edit.",\n    closeBtnText: "Go back",\n    continueBtnText: "Go to selected article",\n    show: showModal,\n    handleContinue: handleArticleNavigation,\n    handleClose: handleModalClose\n  }), articles.map(function (article) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n      key: article.id,\n      className: "section-nav-button",\n      onClick: function onClick() {\n        return handleNavClick(article.id);\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, article.title));\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionNavigation);\n\n//# sourceURL=webpack://class-app/./src/components/SectionNavigation.jsx?'
        );

        /***/
      },

    /***/ './src/components/WarningModal.jsx':
      /*!*****************************************!*\
  !*** ./src/components/WarningModal.jsx ***!
  \*****************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");\n\n\n\n\nvar WarningModal = function WarningModal(_ref) {\n  var show = _ref.show,\n      handleClose = _ref.handleClose,\n      handleContinue = _ref.handleContinue,\n      title = _ref.title,\n      body = _ref.body,\n      closeBtnText = _ref.closeBtnText,\n      continueBtnText = _ref.continueBtnText;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    show: show,\n    onHide: handleClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].Title, null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].Body, null, body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    variant: "primary",\n    onClick: handleClose\n  }, closeBtnText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    variant: "danger",\n    onClick: handleContinue\n  }, continueBtnText))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WarningModal);\n\n//# sourceURL=webpack://class-app/./src/components/WarningModal.jsx?'
        );

        /***/
      },

    /***/ './src/utilities/editArticle.js':
      /*!**************************************!*\
  !*** ./src/utilities/editArticle.js ***!
  \**************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\nfunction editArticle(_x, _x2) {\n  return _editArticle.apply(this, arguments);\n}\n\nfunction _editArticle() {\n  _editArticle = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(article, lessonId) {\n    var query, response;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = "\\n    mutation {\\n      modifyArticle(\\n        article: {\\n          title: \\"".concat(article.title, "\\"\\n          content: \\"\\"\\"").concat(article.content, "\\"\\"\\"\\n        }\\n        lessonId: ").concat(lessonId, "\\n        articleId: ").concat(article.id, "\\n      ) {\\n        title\\n        content\\n        id\\n      }\\n    }\\n  ");\n            _context.next = 3;\n            return fetch("http://localhost:3000", {\n              method: "POST",\n              headers: {\n                "Content-Type": "application/json"\n              },\n              body: JSON.stringify({\n                query: query\n              })\n            });\n\n          case 3:\n            response = _context.sent;\n            _context.next = 6;\n            return response.json;\n\n          case 6:\n            return _context.abrupt("return", _context.sent);\n\n          case 7:\n          case "end":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _editArticle.apply(this, arguments);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editArticle);\n\n//# sourceURL=webpack://class-app/./src/utilities/editArticle.js?'
        );

        /***/
      },

    /***/ './src/utilities/getLessons.js':
      /*!*************************************!*\
  !*** ./src/utilities/getLessons.js ***!
  \*************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\nvar getLessons = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var query, response, result;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = "\\n    {\\n      lessonList {\\n        id\\n        lesson_title\\n        lesson_description\\n        sections {\\n          id\\n          title\\n          content\\n        }\\n      }\\n    }\\n  ";\n            _context.next = 3;\n            return fetch("http://localhost:3000", {\n              method: "POST",\n              headers: {\n                "Content-Type": "application/json"\n              },\n              body: JSON.stringify({\n                query: query\n              })\n            });\n\n          case 3:\n            response = _context.sent;\n            _context.next = 6;\n            return response.json();\n\n          case 6:\n            result = _context.sent;\n            return _context.abrupt("return", result.data.lessonList);\n\n          case 8:\n          case "end":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getLessons() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLessons);\n\n//# sourceURL=webpack://class-app/./src/utilities/getLessons.js?'
        );

        /***/
      },

    /***/ './src/utilities/newArticle.js':
      /*!*************************************!*\
  !*** ./src/utilities/newArticle.js ***!
  \*************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\nvar newArticle = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(title, lessonId) {\n    var query, response;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = "\\n    mutation {\\n      addArticle(article: {\\n        title:\\"".concat(title, "\\"\\n      }, lessonId: ").concat(lessonId, "){\\n        id\\n      }\\n    }\\n  ");\n            _context.next = 3;\n            return fetch("http://localhost:3000", {\n              method: "POST",\n              headers: {\n                "Content-Type": "application/json"\n              },\n              body: JSON.stringify({\n                query: query\n              })\n            });\n\n          case 3:\n            response = _context.sent;\n            _context.next = 6;\n            return response.json();\n\n          case 6:\n            return _context.abrupt("return", _context.sent);\n\n          case 7:\n          case "end":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function newArticle(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newArticle);\n\n//# sourceURL=webpack://class-app/./src/utilities/newArticle.js?'
        );

        /***/
      },

    /***/ './src/utilities/newLesson.js':
      /*!************************************!*\
  !*** ./src/utilities/newLesson.js ***!
  \************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\nfunction newLesson(_x, _x2) {\n  return _newLesson.apply(this, arguments);\n}\n\nfunction _newLesson() {\n  _newLesson = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(title, description) {\n    var query, id;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = "\\n    mutation {\\n      addLesson(lesson: {\\n        lesson_title: \\"".concat(title, "\\"\\n        lesson_description: \\"").concat(description, "\\"\\n      }) {\\n        id\\n      }\\n    }\\n  ");\n            _context.next = 3;\n            return fetch(\'http://localhost:3000\', {\n              method: \'POST\',\n              headers: {\n                \'Content-Type\': \'application/json\'\n              },\n              body: JSON.stringify({\n                query: query\n              })\n            });\n\n          case 3:\n            id = _context.sent;\n\n          case 4:\n          case "end":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _newLesson.apply(this, arguments);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newLesson);\n\n//# sourceURL=webpack://class-app/./src/utilities/newLesson.js?'
        );

        /***/
      }

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {}
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/chunk loaded */
  /******/ (() => {
    /******/ var deferred = [];
    /******/ __webpack_require__.O = (result, chunkIds, fn, priority) => {
      /******/ if (chunkIds) {
        /******/ priority = priority || 0;
        /******/ for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
          deferred[i] = deferred[i - 1];
        /******/ deferred[i] = [chunkIds, fn, priority];
        /******/ return;
        /******/
      }
      /******/ var notFulfilled = Infinity;
      /******/ for (var i = 0; i < deferred.length; i++) {
        /******/ var [chunkIds, fn, priority] = deferred[i];
        /******/ var fulfilled = true;
        /******/ for (var j = 0; j < chunkIds.length; j++) {
          /******/ if (
            (priority & (1 === 0) || notFulfilled >= priority) &&
            Object.keys(__webpack_require__.O).every((key) =>
              __webpack_require__.O[key](chunkIds[j])
            )
          ) {
            /******/ chunkIds.splice(j--, 1);
            /******/
          } else {
            /******/ fulfilled = false;
            /******/ if (priority < notFulfilled) notFulfilled = priority;
            /******/
          }
          /******/
        }
        /******/ if (fulfilled) {
          /******/ deferred.splice(i--, 1);
          /******/ var r = fn();
          /******/ if (r !== undefined) result = r;
          /******/
        }
        /******/
      }
      /******/ return result;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule ? /******/ () => module['default'] : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === 'object') return globalThis;
      /******/ try {
        /******/ return this || new Function('return this')();
        /******/
      } catch (e) {
        /******/ if (typeof window === 'object') return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ // no baseURI
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ app: 0
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ __webpack_require__.O.j = (chunkId) => installedChunks[chunkId] === 0;
    /******/
    /******/ // install a JSONP callback for chunk loading
    /******/ var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
      /******/ var [chunkIds, moreModules, runtime] = data;
      /******/ // add "moreModules" to the modules object,
      /******/ // then flag all "chunkIds" as loaded and fire callback
      /******/ var moduleId,
        chunkId,
        i = 0;
      /******/ if (chunkIds.some((id) => installedChunks[id] !== 0)) {
        /******/ for (moduleId in moreModules) {
          /******/ if (__webpack_require__.o(moreModules, moduleId)) {
            /******/ __webpack_require__.m[moduleId] = moreModules[moduleId];
            /******/
          }
          /******/
        }
        /******/ if (runtime) var result = runtime(__webpack_require__);
        /******/
      }
      /******/ if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      /******/ for (; i < chunkIds.length; i++) {
        /******/ chunkId = chunkIds[i];
        /******/ if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
          /******/ installedChunks[chunkId][0]();
          /******/
        }
        /******/ installedChunks[chunkId] = 0;
        /******/
      }
      /******/ return __webpack_require__.O(result);
      /******/
    };
    /******/
    /******/ var chunkLoadingGlobal = (self['webpackChunkclass_app'] =
      self['webpackChunkclass_app'] || []);
    /******/ chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    /******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
      null,
      chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
    );
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module depends on other loaded chunks and execution need to be delayed
  /******/ var __webpack_exports__ = __webpack_require__.O(undefined, ['vendor'], () =>
    __webpack_require__('./src/Index.jsx')
  );
  /******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
  /******/
  /******/
})();
