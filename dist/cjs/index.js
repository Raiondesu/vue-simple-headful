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
    }
};
if (window && window['Vue']) {
    plugin.install(window['Vue']);
}
exports.default = plugin;
//# sourceMappingURL=index.js.map