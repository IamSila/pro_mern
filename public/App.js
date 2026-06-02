"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// class issueFilter
var IssueFilter = /*#__PURE__*/function (_React$Component) {
  function IssueFilter() {
    _classCallCheck(this, IssueFilter);
    return _callSuper(this, IssueFilter, arguments);
  }
  _inherits(IssueFilter, _React$Component);
  return _createClass(IssueFilter, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, "This is a placeholder for the IssueFilter");
    }
  }]);
}(_react.default.Component);
var TableRow = /*#__PURE__*/function (_React$Component2) {
  function TableRow() {
    _classCallCheck(this, TableRow);
    return _callSuper(this, TableRow, arguments);
  }
  _inherits(TableRow, _React$Component2);
  return _createClass(TableRow, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "ID"), /*#__PURE__*/_react.default.createElement("th", null, "Title"))));
    }
  }]);
}(_react.default.Component); // class issueTable
var IssueTable = /*#__PURE__*/function (_React$Component3) {
  function IssueTable() {
    _classCallCheck(this, IssueTable);
    return _callSuper(this, IssueTable, arguments);
  }
  _inherits(IssueTable, _React$Component3);
  return _createClass(IssueTable, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, "This is a placeholder for the IssueTable");
    }
  }]);
}(_react.default.Component); // class issueAdd
var IssueAdd = /*#__PURE__*/function (_React$Component4) {
  function IssueAdd() {
    _classCallCheck(this, IssueAdd);
    return _callSuper(this, IssueAdd, arguments);
  }
  _inherits(IssueAdd, _React$Component4);
  return _createClass(IssueAdd, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, "This is a placeholder for the IssueAdd");
    }
  }]);
}(_react.default.Component);
var IssueList = /*#__PURE__*/function (_React$Component5) {
  function IssueList() {
    _classCallCheck(this, IssueList);
    return _callSuper(this, IssueList, arguments);
  }
  _inherits(IssueList, _React$Component5);
  return _createClass(IssueList, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h1", null, "Issue Tracker"), /*#__PURE__*/_react.default.createElement(IssueFilter, null), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement(IssueTable, null), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement(IssueAdd, null), /*#__PURE__*/_react.default.createElement("hr", null));
    }
  }]);
}(_react.default.Component);
var element = /*#__PURE__*/_react.default.createElement(IssueList, null);
ReactDOM.render(element, document.getElementById('contents'));