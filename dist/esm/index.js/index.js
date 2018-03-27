import headful from 'headful';
const plugin = {
    install(Vue, options) {
        const key = (options && options.key) || 'headful';
        Object.defineProperty(Vue.prototype, `$${key}`, { get: () => headful });
        if (window && !window[key])
            window[key] = headful;
        Vue.mixin({
            data() {
                if (!this.$options[key])
                    return {};
                return { headful: {} };
            },
            created() {
                if (this[key]) {
                    const head = typeof this.$options[key] === 'function' ? this.$options[key].bind(this, this)() : this.$options[key];
                    this.$set(this, key, head);
                    this.$watch(key, headful, { deep: true, immediate: true });
                }
            }
        });
    },
    version: require('./package.json').version
};
if (window && window['Vue']) {
    plugin.install(window['Vue']);
}
export default plugin;
//# sourceMappingURL=index.js.map