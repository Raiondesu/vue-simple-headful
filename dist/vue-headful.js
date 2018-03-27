'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _headful = require('headful');

var _headful2 = _interopRequireDefault(_headful);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  install: function install(Vue, options) {
    var key = (options || {}).key || 'headful';

    Object.defineProperty(Vue.prototype, '$' + key, { get: function get() {
        return _headful2.default;
      } });

    Vue.mixin({
      data: function data() {
        if (!this.$options[key]) return {};
        return { headful: {} };
      },
      created: function created() {
        if (this[key]) {
          var head = typeof this.$options[key] === 'function' ? this.$options[key].bind(this, this)() : this.$options[key];

          this.$set(this, key, head);
          this.$watch(key, _headful2.default, { deep: true, immediate: true });
        }
      }
    });
  },

  get version() {
    return _package2.default.version;
  }
};