"use strict";

require("babel-polyfill");

require("whatwg-fetch");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Hello = _interopRequireDefault(require("./Hello.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Hello, react!"), /*#__PURE__*/_react.default.createElement("p", null, "Test"), /*#__PURE__*/_react.default.createElement("p", null, "Hot refresh?"), /*#__PURE__*/_react.default.createElement(_Hello.default, null));
};

var element = /*#__PURE__*/_react.default.createElement(App, null);

_reactDom.default.render(element, document.getElementById("contents"));

if (module.hot) {
  module.hot.accept();
}