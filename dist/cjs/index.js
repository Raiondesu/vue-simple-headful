"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var headful_1 = require("headful");
var plugin = {
    install: function (Vue, options) {
        var key = (options && options.key) || 'headful';
        Object.defineProperty(Vue.prototype, "$" + key, { get: function () { return headful_1.default; } });
        if (window && !window[key])
            window[key] = headful_1.default;
        if (options && options.component) {
            var name_1 = "Vue" + (key[0].toUpperCase() + key.substr(1));
            Vue.component(name_1, {
                name: name_1,
                props: Object.keys(headful_1.default.props).concat([key]),
                created: function () {
                    var _this = this;
                    if (this[key]) {
                        this.$watch(key, headful_1.default, { deep: true, immediate: true });
                    }
                    else {
                        Object.keys(this.$props).forEach(function (p) { return (p !== key) && _this.$watch(p, headful_1.default.props[p], { immediate: true }); });
                    }
                },
            });
        }
        Vue.mixin({
            data: function () {
                if (!this.$options[key])
                    return {};
                var vm = this;
                var _headful = this.$options[key];
                return _a = {},
                    Object.defineProperty(_a, key, {
                        get: function () { return typeof _headful === 'function' ? _headful.bind(vm, vm)() : _headful; },
                        enumerable: true,
                        configurable: true
                    }),
                    _a;
                var _a;
            },
            created: function () {
                if (this[key]) {
                    this.$watch(key, headful_1.default, { deep: true, immediate: true });
                }
            }
        });
    }
};
if (window && window['Vue']) {
    plugin.install(window['Vue']);
}
exports.default = plugin;
//# sourceMappingURL=index.js.map