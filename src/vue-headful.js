import headful from 'headful';

export default function (Vue, options) {
  const key = (options || {}).key || 'headful';

  Object.defineProperty(Vue.prototype, `$${key}`, { get: () => headful });

  Vue.mixin({
    data() {
      if (!this.$options[key]) return {};
      return { headful: {} };
    },
    created() {
      if (this[key]) {
        this.$set(this, key, this.$options[key].bind(this, this)());
        this.$watch(key, headful, { deep: true, immediate: true });
      }
    }
  })
};
