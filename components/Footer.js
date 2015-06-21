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

var _jxnblkAvatar = require('jxnblk-avatar');

var _jxnblkAvatar2 = _interopRequireDefault(_jxnblkAvatar);

var Footer = (function (_React$Component) {
  function Footer() {
    _classCallCheck(this, Footer);

    _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).call(this);
    this.renderLink = this.renderLink.bind(this);
  }

  _inherits(Footer, _React$Component);

  _createClass(Footer, [{
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
        'footer',
        { className: 'mt3 py3 border-top' },
        _react2['default'].createElement(
          'div',
          { className: 'sm-flex flex-baseline flex-wrap mxn1' },
          _react2['default'].createElement(
            'a',
            { href: this.props.href,
              className: 'h3 btn btn-narrow btn-link' },
            this.props.title
          ),
          _react2['default'].createElement(
            'div',
            { className: 'sm-flex flex-baseline' },
            this.props.links.map(this.renderLink)
          ),
          _react2['default'].createElement('div', { className: 'flex-auto' }),
          _react2['default'].createElement(
            'a',
            { href: '//jxnblk.com', className: 'btn btn-narrow btn-link' },
            'Made by Jxnblk'
          )
        )
      );
    }
  }]);

  return Footer;
})(_react2['default'].Component);

Footer.propTypes = {
  title: _react2['default'].PropTypes.string,
  href: _react2['default'].PropTypes.string,
  links: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
    text: _react2['default'].PropTypes.string,
    href: _react2['default'].PropTypes.string
  }))
};

exports['default'] = Footer;
module.exports = exports['default'];