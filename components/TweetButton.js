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

var TweetButton = (function (_React$Component) {
  function TweetButton() {
    _classCallCheck(this, TweetButton);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(TweetButton, _React$Component);

  _createClass(TweetButton, [{
    key: 'render',
    value: function render() {
      var text = this.props.text;
      var url = this.props.url || null;
      var script = {
        __html: '!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "twitter-wjs");'
      };

      return _react2['default'].createElement(
        'div',
        { className: 'inline-block' },
        _react2['default'].createElement(
          'a',
          { href: 'https://twitter.com/share',
            className: 'twitter-share-button',
            'data-text': text,
            'data-url': url,
            'data-via': 'jxnblk',
            'data-size': 'large' },
          'Tweet'
        ),
        _react2['default'].createElement('script', { dangerouslySetInnerHTML: script })
      );
    }
  }]);

  return TweetButton;
})(_react2['default'].Component);

TweetButton.propTypes = {
  text: _react2['default'].PropTypes.string
};

exports['default'] = TweetButton;
module.exports = exports['default'];