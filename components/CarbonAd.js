"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var CarbonAd = (function (_React$Component) {
  function CarbonAd() {
    _classCallCheck(this, CarbonAd);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(CarbonAd, _React$Component);

  _createClass(CarbonAd, [{
    key: "render",
    value: function render() {
      var css = "\n      #carbonads {\n        display: inline-block;\n        font-size: 14px;\n        line-height: 1.25;\n        text-align: left;\n      }\n      #carbonads a,\n      #carbonads a:hover {\n        text-decoration: none;\n        color: inherit;\n      }\n      #carbonads span { display: block }\n      #carbonads > span::before,\n      #carbonads > span::after {\n        content: '';\n        display: table;\n      }\n      #carbonads > span::after {\n        clear: both;\n      }\n      .carbon-img {\n        float: left;\n        margin-right: .5em;\n      }\n      .carbon-img > img { display: block }\n      .carbon-text { overflow: hidden }\n      .carbon-poweredby {\n        float: left;\n        margin-top: .25em;\n        opacity: 0.5;\n      }\n      @media (min-width: 40em) {\n        #carbonads {\n          max-width: 320px;\n        }\n      }\n    ";

      return _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement("style", { dangerouslySetInnerHTML: { __html: css } }),
        _react2["default"].createElement("script", { async: true, type: "text/javascript", src: "//cdn.carbonads.com/carbon.js?zoneid=1696&serve=CVYD42T&placement=jxnblkcom", id: "_carbonads_js" })
      );
    }
  }]);

  return CarbonAd;
})(_react2["default"].Component);

exports["default"] = CarbonAd;
module.exports = exports["default"];