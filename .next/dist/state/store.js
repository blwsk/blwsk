'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getState = exports.dispatch = undefined;

var _redux = require('redux');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducer2.default);

var dispatch = exports.dispatch = store.dispatch;

var getState = exports.getState = store.getState;

exports.default = store;