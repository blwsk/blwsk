'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inherits2 = require('/Users/kbielawski/.nvm/versions/node/v6.7.0/lib/node_modules/next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var createStore = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var posts;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(window && window.store)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', window.store);

          case 2:
            _context.next = 4;
            return getPosts();

          case 4:
            posts = _context.sent;

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function createStore() {
    return _ref.apply(this, arguments);
  };
}();

var _objectWithoutProperties2 = require('/Users/kbielawski/.nvm/versions/node/v6.7.0/lib/node_modules/next/node_modules/babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('/Users/kbielawski/.nvm/versions/node/v6.7.0/lib/node_modules/next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/kbielawski/.nvm/versions/node/v6.7.0/lib/node_modules/next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('/Users/kbielawski/.nvm/versions/node/v6.7.0/lib/node_modules/next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('/Users/kbielawski/.nvm/versions/node/v6.7.0/lib/node_modules/next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _regenerator = require('/Users/kbielawski/.nvm/versions/node/v6.7.0/lib/node_modules/next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('/Users/kbielawski/.nvm/versions/node/v6.7.0/lib/node_modules/next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('/Users/kbielawski/.nvm/versions/node/v6.7.0/lib/node_modules/next/node_modules/babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _immutable = require('immutable');

var _react = require('/Users/kbielawski/.nvm/versions/node/v6.7.0/lib/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _store = require('../state/store');

var _store2 = _interopRequireDefault(_store);

var _Index = require('../components/Index');

var _Index2 = _interopRequireDefault(_Index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPosts() {
  return new _promise2.default(function (res) {
    return setTimeout(function () {
      res((0, _immutable.List)([(0, _immutable.Map)({ title: 'One' }), (0, _immutable.Map)({ title: 'Two' })]));
    }, 100);
  });
}

function getProps(context) {
  return new _promise2.default(function (res) {
    return setTimeout(function () {
      res({
        blah: 1
      });
    }, 100);
  });
}

var IndexPage = function (_React$Component) {
  (0, _inherits3.default)(IndexPage, _React$Component);
  (0, _createClass3.default)(IndexPage, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_ref3) {
        var req = _ref3.req;
        var store;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (req) {} else {}
                _context2.next = 3;
                return createStore();

              case 3:
                store = _context2.sent;
                return _context2.abrupt('return', {
                  store: store
                });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function IndexPage(props) {
    (0, _classCallCheck3.default)(this, IndexPage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (IndexPage.__proto__ || (0, _getPrototypeOf2.default)(IndexPage)).call(this, props));

    if (props.store && window && !window.store) {
      window.store = props.store;
    }
    return _this;
  }

  (0, _createClass3.default)(IndexPage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          store = _props.store,
          others = (0, _objectWithoutProperties3.default)(_props, ['store']);


      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_Index2.default, others)
      );
    }
  }]);
  return IndexPage;
}(_react2.default.Component);

exports.default = IndexPage;
    if (module.hot) {
      module.hot.accept()
      if (module.hot.status() !== 'idle') {
        var Component = module.exports.default || module.exports
        next.router.update('/', Component)
      }
    }
  