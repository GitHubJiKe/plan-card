'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; // alias example
// alias example
// aliasFields example
// aliasFields ignore module example


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _list = require('./../components/wepy-list.js');

var _list2 = _interopRequireDefault(_list);

var _moduleA = {};

var _moduleA2 = _interopRequireDefault(_moduleA);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

var _moment = require('./../npm/moment/moment.js');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('moduleA ignored: ', _moduleA2.default); // => moduleA ignored: {}

var Index = (_dec = (0, _wepyRedux.connect)({
  num: function num(state) {
    return state.counter.num;
  },
  asyncNum: function asyncNum(state) {
    return state.counter.asyncNum;
  },
  sumNum: function sumNum(state) {
    return state.counter.num + state.counter.asyncNum;
  }
}), _dec(_class = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.$parent.getUserInfo(function (userInfo) {
        if (userInfo) {
          self.userInfo = userInfo;
        }
        self.normalTitle = '标题已被修改';

        self.setTimeoutTitle = '标题三秒后会被修改';
        setTimeout(function () {
          self.setTimeoutTitle = '到三秒了';
          self.$apply();
        }, 3000);

        self.$apply();
      });
      // await wepy.login();
      // this.userInfo = await wepy.getUserInfo();
      // console.log('====================================');
      // console.log(wepy.getUserInfo);
      // console.log('====================================');
    }
  }]);

  return Index;
}(_wepy2.default.page)) || _class);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.config = {
    navigationBarTitleText: '首页'
  };
  this.$repeat = {};
  this.$props = { "counter1": { "xmlns:v-on": "" }, "counter2": { "xmlns:v-bind": "", "v-bind:num.sync": "mynum" }, "group": { "v-bind:grouplist.once": "item", "v-bind:indexa.once": "index" } };
  this.$events = { "counter1": { "v-on:indexEmit": "counterEmit" } };
  this.components = {
    panel: _panel2.default,
    counter1: _counter2.default,
    counter2: _counter2.default,
    list: _list2.default,
    group: _group2.default,
    toast: _wepyComToast2.default
  };
  this.mixins = [_test2.default];
  this.data = {
    mynum: 20,
    userInfo: {
      nickName: '加载中...'
    },
    normalTitle: '原始标题',
    setTimeoutTitle: '标题三秒后会被修改',
    count: 0,
    netrst: '',
    groupList: [{
      id: 1,
      name: '点击改变',
      list: [{
        childid: '1.1',
        childname: '子项，点我改变'
      }, {
        childid: '1.2',
        childname: '子项，点我改变'
      }, {
        childid: '1.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 2,
      name: '点击改变',
      list: [{
        childid: '2.1',
        childname: '子项，点我改变'
      }, {
        childid: '2.2',
        childname: '子项，点我改变'
      }, {
        childid: '2.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 3,
      name: '点击改变',
      list: [{
        childid: '3.1',
        childname: '子项，点我改变'
      }]
    }]
  };
  this.computed = {
    now: function now() {
      return (0, _moment2.default)().format('YYYY-DD-MM');
    }
  };
  this.methods = {
    plus: function plus() {
      this.mynum++;
    },
    toast: function toast() {
      var promise = this.$invoke('toast', 'show', {
        title: '自定义标题',
        img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
      });

      promise.then(function (d) {
        console.log('toast done');
      });
    },
    tap: function tap() {
      console.log('do noting from ' + this.$name);
    },
    communicate: function communicate() {
      console.log(this.$name + ' tap');

      this.$invoke('counter2', 'minus', 45, 6);
      this.$invoke('counter1', 'plus', 45, 6);

      this.$broadcast('index-broadcast', 1, 3, 4);
    },
    request: function request() {
      var self = this;
      var i = 10;
      var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];
      while (i--) {
        _wepy2.default.request({
          url: 'https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i,
          success: function success(d) {
            self.netrst += d.data + '.';
            self.$apply();
          }
        });
      }
    },
    counterEmit: function counterEmit() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(this.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    },
    togoAuthorPage: function togoAuthorPage() {
      this.$navigate('author');
    }
  };
  this.events = {
    indexEmit: function indexEmit() {
      var _ref3;

      var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
};


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJtb2R1bGVBIiwiSW5kZXgiLCJudW0iLCJzdGF0ZSIsImNvdW50ZXIiLCJhc3luY051bSIsInN1bU51bSIsInNlbGYiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsIm5vcm1hbFRpdGxlIiwic2V0VGltZW91dFRpdGxlIiwic2V0VGltZW91dCIsIiRhcHBseSIsIndlcHkiLCJwYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBhbmVsIiwiUGFuZWwiLCJjb3VudGVyMSIsIkNvdW50ZXIiLCJjb3VudGVyMiIsImxpc3QiLCJMaXN0IiwiZ3JvdXAiLCJHcm91cCIsInRvYXN0IiwiVG9hc3QiLCJtaXhpbnMiLCJ0ZXN0TWl4aW4iLCJkYXRhIiwibXludW0iLCJuaWNrTmFtZSIsImNvdW50IiwibmV0cnN0IiwiZ3JvdXBMaXN0IiwiaWQiLCJuYW1lIiwiY2hpbGRpZCIsImNoaWxkbmFtZSIsImNvbXB1dGVkIiwibm93IiwiZm9ybWF0IiwibWV0aG9kcyIsInBsdXMiLCJwcm9taXNlIiwiJGludm9rZSIsInRpdGxlIiwiaW1nIiwidGhlbiIsInRhcCIsIiRuYW1lIiwiY29tbXVuaWNhdGUiLCIkYnJvYWRjYXN0IiwicmVxdWVzdCIsImkiLCJtYXAiLCJ1cmwiLCJzdWNjZXNzIiwiZCIsImNvdW50ZXJFbWl0IiwiJGV2ZW50IiwibGVuZ3RoIiwic291cmNlIiwidG9nb0F1dGhvclBhZ2UiLCIkbmF2aWdhdGUiLCJldmVudHMiLCJpbmRleEVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztrQkFHd0M7QUFDVDtBQUNRO0FBQ1A7OztBQUxoQzs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7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QU1YRyxtQkFBUyxpQkFBU0MsQ0FBVCxFQUFZO0FBQ25CMUQsaUJBQUtpQyxNQUFMLElBQWV5QixFQUFFN0IsSUFBRixHQUFTLEdBQXhCO0FBQ0E3QixpQkFBS08sTUFBTDtBQUNEO0FBVFUsU0FBYjtBQVdEO0FBQ0YsS0F0RE87QUF1RFJvRCxlQXZEUSx5QkF1RGE7QUFBQTs7QUFDbkIsVUFBSUMsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFKO0FBQ0F0RSxjQUFRQyxHQUFSLENBQ0ssS0FBSzBELEtBRFYsaUJBQzJCVSxPQUFPeEIsSUFEbEMsY0FDK0N3QixPQUFPRSxNQUFQLENBQWNaLEtBRDdEO0FBR0QsS0E1RE87QUE2RFJhLGtCQTdEUSw0QkE2RFE7QUFDZCxXQUFLQyxTQUFMLENBQWUsUUFBZjtBQUNEO0FBL0RPLEc7T0FrRVZDLE0sR0FBUztBQUNQQyxlQUFXLHFCQUFhO0FBQUE7O0FBQ3RCLFVBQUlOLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBdEUsY0FBUUMsR0FBUixDQUNLLE9BQUswRCxLQURWLGlCQUMyQlUsT0FBT3hCLElBRGxDLGNBQytDd0IsT0FBT0UsTUFBUCxDQUFjWixLQUQ3RDtBQUdEO0FBTk0sRzs7O2tCQXRKVXhELEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnO1xuaW1wb3J0IFBhbmVsIGZyb20gJ0AvY29tcG9uZW50cy9wYW5lbCc7IC8vIGFsaWFzIGV4YW1wbGVcbmltcG9ydCBDb3VudGVyIGZyb20gJ2NvdW50ZXInOyAvLyBhbGlhcyBleGFtcGxlXG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2xpc3QnOyAvLyBhbGlhc0ZpZWxkcyBleGFtcGxlXG5pbXBvcnQgbW9kdWxlQSBmcm9tICdtb2R1bGUtYSc7IC8vIGFsaWFzRmllbGRzIGlnbm9yZSBtb2R1bGUgZXhhbXBsZVxuaW1wb3J0IEdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvZ3JvdXAnO1xuaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0JztcbmltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuY29uc29sZS5sb2coJ21vZHVsZUEgaWdub3JlZDogJywgbW9kdWxlQSk7IC8vID0+IG1vZHVsZUEgaWdub3JlZDoge31cblxuQGNvbm5lY3Qoe1xuICBudW0oc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY291bnRlci5udW07XG4gIH0sXG4gIGFzeW5jTnVtKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIuYXN5bmNOdW07XG4gIH0sXG4gIHN1bU51bShzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5jb3VudGVyLm51bSArIHN0YXRlLmNvdW50ZXIuYXN5bmNOdW07XG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6aaW6aG1J1xuICB9O1xuXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjb3VudGVyMVwiOntcInhtbG5zOnYtb25cIjpcIlwifSxcImNvdW50ZXIyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpudW0uc3luY1wiOlwibXludW1cIn0sXCJncm91cFwiOntcInYtYmluZDpncm91cGxpc3Qub25jZVwiOlwiaXRlbVwiLFwidi1iaW5kOmluZGV4YS5vbmNlXCI6XCJpbmRleFwifX07XHJcbiRldmVudHMgPSB7XCJjb3VudGVyMVwiOntcInYtb246aW5kZXhFbWl0XCI6XCJjb3VudGVyRW1pdFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHBhbmVsOiBQYW5lbCxcbiAgICBjb3VudGVyMTogQ291bnRlcixcbiAgICBjb3VudGVyMjogQ291bnRlcixcbiAgICBsaXN0OiBMaXN0LFxuICAgIGdyb3VwOiBHcm91cCxcbiAgICB0b2FzdDogVG9hc3RcbiAgfTtcblxuICBtaXhpbnMgPSBbdGVzdE1peGluXTtcblxuICBkYXRhID0ge1xuICAgIG15bnVtOiAyMCxcbiAgICB1c2VySW5mbzoge1xuICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgfSxcbiAgICBub3JtYWxUaXRsZTogJ+WOn+Wni+agh+mimCcsXG4gICAgc2V0VGltZW91dFRpdGxlOiAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5JyxcbiAgICBjb3VudDogMCxcbiAgICBuZXRyc3Q6ICcnLFxuICAgIGdyb3VwTGlzdDogW1xuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZGlkOiAnMS4xJyxcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjInLFxuICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2hpbGRpZDogJzEuMycsXG4gICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZGlkOiAnMi4xJyxcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjInLFxuICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2hpbGRpZDogJzIuMycsXG4gICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZGlkOiAnMy4xJyxcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29tcHV0ZWQgPSB7XG4gICAgbm93KCkge1xuICAgICAgcmV0dXJuIG1vbWVudCgpLmZvcm1hdCgnWVlZWS1ERC1NTScpO1xuICAgIH1cbiAgfTtcblxuICBtZXRob2RzID0ge1xuICAgIHBsdXMoKSB7XG4gICAgICB0aGlzLm15bnVtKys7XG4gICAgfSxcbiAgICB0b2FzdCgpIHtcbiAgICAgIGxldCBwcm9taXNlID0gdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93Jywge1xuICAgICAgICB0aXRsZTogJ+iHquWumuS5ieagh+mimCcsXG4gICAgICAgIGltZzpcbiAgICAgICAgICAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2tpaW5sYW0vd2V0b2FzdC9tYXN0ZXIvaW1hZ2VzL3N0YXIucG5nJ1xuICAgICAgfSk7XG5cbiAgICAgIHByb21pc2UudGhlbihkID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RvYXN0IGRvbmUnKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdGFwKCkge1xuICAgICAgY29uc29sZS5sb2coJ2RvIG5vdGluZyBmcm9tICcgKyB0aGlzLiRuYW1lKTtcbiAgICB9LFxuICAgIGNvbW11bmljYXRlKCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgdGFwJyk7XG5cbiAgICAgIHRoaXMuJGludm9rZSgnY291bnRlcjInLCAnbWludXMnLCA0NSwgNik7XG4gICAgICB0aGlzLiRpbnZva2UoJ2NvdW50ZXIxJywgJ3BsdXMnLCA0NSwgNik7XG5cbiAgICAgIHRoaXMuJGJyb2FkY2FzdCgnaW5kZXgtYnJvYWRjYXN0JywgMSwgMywgNCk7XG4gICAgfSxcbiAgICByZXF1ZXN0KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IGkgPSAxMDtcbiAgICAgIGxldCBtYXAgPSBbXG4gICAgICAgICdNQT09JyxcbiAgICAgICAgJ01Rbz0nLFxuICAgICAgICAnTWc9PScsXG4gICAgICAgICdNdz09JyxcbiAgICAgICAgJ05BPT0nLFxuICAgICAgICAnTlE9PScsXG4gICAgICAgICdOZz09JyxcbiAgICAgICAgJ053PT0nLFxuICAgICAgICAnT0E9PScsXG4gICAgICAgICdPUT09J1xuICAgICAgXTtcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6XG4gICAgICAgICAgICAnaHR0cHM6Ly93d3cubWFkY29kZXIuY24vdGVzdHMvc2xlZXAucGhwP3RpbWU9MSZ0PWNzcyZjPScgK1xuICAgICAgICAgICAgbWFwW2ldICtcbiAgICAgICAgICAgICcmaT0nICtcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgc2VsZi5uZXRyc3QgKz0gZC5kYXRhICsgJy4nO1xuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgY291bnRlckVtaXQoLi4uYXJncykge1xuICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWBcbiAgICAgICk7XG4gICAgfSxcbiAgICB0b2dvQXV0aG9yUGFnZSgpe1xuICAgICAgdGhpcy4kbmF2aWdhdGUoJ2F1dGhvcicpO1xuICAgIH1cbiAgfTtcblxuICBldmVudHMgPSB7XG4gICAgaW5kZXhFbWl0OiAoLi4uYXJncykgPT4ge1xuICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWBcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi4kcGFyZW50LmdldFVzZXJJbmZvKGZ1bmN0aW9uKHVzZXJJbmZvKSB7XG4gICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgc2VsZi51c2VySW5mbyA9IHVzZXJJbmZvO1xuICAgICAgfVxuICAgICAgc2VsZi5ub3JtYWxUaXRsZSA9ICfmoIfpopjlt7Looqvkv67mlLknO1xuXG4gICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+WIsOS4ieenkuS6hic7XG4gICAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgICB9LCAzMDAwKTtcblxuICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICB9KTtcbiAgICAvLyBhd2FpdCB3ZXB5LmxvZ2luKCk7XG4gICAgLy8gdGhpcy51c2VySW5mbyA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKTtcbiAgICAvLyBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Jyk7XG4gICAgLy8gY29uc29sZS5sb2cod2VweS5nZXRVc2VySW5mbyk7XG4gICAgLy8gY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICB9XG59XG4iXX0=