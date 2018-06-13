'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Author = function (_wepy$page) {
  _inherits(Author, _wepy$page);

  function Author() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Author);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Author.__proto__ || Object.getPrototypeOf(Author)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '作者'
    }, _this.components = {}, _this.data = {
      name: 'Peter',
      age: 25,
      asyncText: ''
    }, _this.methods = {
      showToast: function showToast() {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Author, [{
    key: 'testAsync',
    value: function testAsync() {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('it is ok async');
        }, 3000);
      });
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.testAsync();

              case 2:
                this.asyncText = _context.sent;

                this.$apply();

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Author;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Author , 'pages/author'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvci5qcyJdLCJuYW1lcyI6WyJBdXRob3IiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJuYW1lIiwiYWdlIiwiYXN5bmNUZXh0IiwibWV0aG9kcyIsInNob3dUb2FzdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInRlc3RBc3luYyIsIiRhcHBseSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLFUsR0FBYSxFLFFBR2JDLEksR0FBTztBQUNMQyxZQUFNLE9BREQ7QUFFTEMsV0FBSyxFQUZBO0FBR0xDLGlCQUFXO0FBSE4sSyxRQU1QQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSSxDQUVYO0FBSE8sSzs7Ozs7Z0NBTUU7QUFDVixhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLG1CQUFXLFlBQU07QUFDZkYsa0JBQVEsZ0JBQVI7QUFDRCxTQUZELEVBRUcsSUFGSDtBQUdELE9BSk0sQ0FBUDtBQUtEOzs7Ozs7Ozs7O3VCQUd3QixLQUFLRyxTQUFMLEU7OztBQUF2QixxQkFBS1AsUzs7QUFDTCxxQkFBS1EsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTlCZ0NDLGVBQUtDLEk7O2tCQUFwQmpCLE0iLCJmaWxlIjoiYXV0aG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhvciBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5L2c6ICFJ1xuICB9O1xuXG4gIGNvbXBvbmVudHMgPSB7XG4gIH07XG5cbiAgZGF0YSA9IHtcbiAgICBuYW1lOiAnUGV0ZXInLFxuICAgIGFnZTogMjUsXG4gICAgYXN5bmNUZXh0OiAnJ1xuICB9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgc2hvd1RvYXN0KCkge1xuICAgICAgXG4gICAgfVxuICB9O1xuXG4gIHRlc3RBc3luYygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoJ2l0IGlzIG9rIGFzeW5jJyk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICB0aGlzLmFzeW5jVGV4dCA9IGF3YWl0IHRoaXMudGVzdEFzeW5jKCk7XG4gICAgdGhpcy4kYXBwbHkoKTtcbiAgfVxufVxuIl19