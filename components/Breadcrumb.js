'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Breadcrumb = (function (_React$Component) {
  function Breadcrumb() {
    _classCallCheck(this, Breadcrumb);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Breadcrumb, _React$Component);

  _createClass(Breadcrumb, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'span',
        null,
        '/',
        _react2['default'].createElement(
          'a',
          { href: this.props.href,
            className: 'h5 bold caps compact px1 color-inherit' },
          this.props.text
        )
      );
    }
  }]);

  return Breadcrumb;
})(_react2['default'].Component);

Breadcrumb.propTypes = {
  href: _react2['default'].PropTypes.string,
  text: _react2['default'].PropTypes.string
};

exports['default'] = Breadcrumb;
module.exports = exports['default'];