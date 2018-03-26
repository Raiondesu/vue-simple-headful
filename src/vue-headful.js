import headful from 'headful';
import pkg from '../package.json';

export default {
  install (Vue, options) {
    const key = (options || {}).key || 'headful';

    Object.defineProperty(Vue.prototype, `$${key}`, { get: () => headful });

    Vue.mixin({
      data() {
        if (!this.$options[key]) return {};
        return { headful: {} };
      },
      created() {
        if (this[key]) {
          const head = typeof this.$options[key] === 'function' ? this.$options[key].bind(this, this)() : this.$options[key];
          
          this.$set(this, key, head);
          this.$watch(key, headful, { deep: true, immediate: true });
        }
      }
    })
  },
  get version() {
    return pkg.version;
  }
};
