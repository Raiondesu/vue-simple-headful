import headful from 'headful';
import './types/vue';
const plugin = {
    install(Vue, options) {
        const key = (options && options.key) || 'headful';
        Object.defineProperty(Vue.prototype, `$${key}`, { get: () => headful });
        if (window && !window[key])
            window[key] = headful;
        if (options && options.component) {
            const name = `Vue${key[0].toUpperCase() + key.substr(1)}`;
            Vue.component(name, {
                name,
                props: [...Object.keys(headful.props), key],
                created() {
                    if (this[key]) {
                        this.$watch(key, headful, { deep: true, immediate: true });
                    }
                    else {
                        Object.keys(this.$props).forEach(p => (p !== key) && this.$watch(p, headful.props[p], { immediate: true }));
                    }
                },
            });
        }
        Vue.mixin({
            data() {
                if (!this.$options[key])
                    return {};
                const vm = this;
                const _headful = this.$options[key];
                return {
                    get [key]() { return typeof _headful === 'function' ? _headful.bind(vm, vm)() : _headful; }
                };
            },
            created() {
                if (this[key]) {
                    this.$watch(key, headful, { deep: true, immediate: true });
                }
            }
        });
    }
};
if (window && window['Vue']) {
    plugin.install(window['Vue']);
}
export default plugin;
//# sourceMappingURL=index.js.map