'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configStore;

var _redux = require('./../npm/redux/lib/index.js');

var _reduxPromise = require('./../npm/redux-promise/lib/index.js');

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reducers = require('./reducers/index.js');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configStore() {
  return (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxPromise2.default));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbmZpZ1N0b3JlIiwicm9vdFJlZHVjZXIiLCJwcm9taXNlTWlkZGxld2FyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBSXdCQSxXOztBQUp4Qjs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFZSxTQUFTQSxXQUFULEdBQXVCO0FBQ3BDLFNBQU8sd0JBQVlDLGtCQUFaLEVBQXlCLDRCQUFnQkMsc0JBQWhCLENBQXpCLENBQVA7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcHJvbWlzZU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtcHJvbWlzZSc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ1N0b3JlKCkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZShwcm9taXNlTWlkZGxld2FyZSkpO1xufSJdfQ==