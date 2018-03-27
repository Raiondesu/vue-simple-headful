"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var headful_1 = require("headful");
var plugin = {
    install: function (Vue, options) {
        var key = (options && options.key) || 'headful';
        Object.defineProperty(Vue.prototype, "$" + key, { get: function () { return headful_1.default; } });
        if (window && !window[key])
            window[key] = headful_1.default;
        Vue.mixin({
            data: function () {
                if (!this.$options[key])
                    return {};
                return { headful: {} };
            },
            created: function () {
                if (this[key]) {
                    var head = typeof this.$options[key] === 'function' ? this.$options[key].bind(this, this)() : this.$options[key];
                    this.$set(this, key, head);
                    this.$watch(key, headful_1.default, { deep: true, immediate: true });
                }
            }
        });
    },
    version: require('./package.json').version
};
if (window && window['Vue']) {
    plugin.install(window['Vue']);
}
exports.default = plugin;
//# sourceMappingURL=index.js.map