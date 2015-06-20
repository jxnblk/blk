'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var AltHeader = (function (_React$Component) {
  function AltHeader() {
    _classCallCheck(this, AltHeader);

    _get(Object.getPrototypeOf(AltHeader.prototype), 'constructor', this).call(this);
    this.renderLink = this.renderLink.bind(this);
  }

  _inherits(AltHeader, _React$Component);

  _createClass(AltHeader, [{
    key: 'renderLink',
    value: function renderLink(link, i) {
      return _react2['default'].createElement(
        'a',
        { href: link.href,
          key: i,
          className: 'btn btn-narrow btn-link' },
        link.text
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'header',
        { className: 'py3' },
        _react2['default'].createElement(
          'h2',
          { className: 'h4 m0 mxn1' },
          _react2['default'].createElement(
            'a',
            { href: 'http://jxnblk.com',
              className: 'inline-block px1 black' },
            'Jxnblk'
          ),
          '/',
          _react2['default'].createElement(
            'a',
            { href: this.props.href,
              className: 'inline-block px1' },
            this.props.title
          )
        ),
        _react2['default'].createElement(
          'h1',
          { className: 'm0' },
          this.props.pageTitle
        ),
        _react2['default'].createElement(
          'div',
          { className: 'mxn1' },
          this.props.links.map(this.renderLink)
        )
      );
    }
  }]);

  return AltHeader;
})(_react2['default'].Component);

AltHeader.propTypes = {
  title: _react2['default'].PropTypes.string,
  pageTitle: _react2['default'].PropTypes.string,
  href: _react2['default'].PropTypes.string,
  links: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
    text: _react2['default'].PropTypes.string,
    href: _react2['default'].PropTypes.string
  }))
};

AltHeader.defaultProps = {
  links: []
};

exports['default'] = AltHeader;
module.exports = exports['default'];