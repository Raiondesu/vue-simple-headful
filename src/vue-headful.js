import headful from 'headful';

export default function (Vue, options) {
  Object.defineProperty(Vue.prototype, '$headful', { get: () => headful });

  const key = (options && options.key) || 'headful';

  Vue.mixin({
    beforeCreate() {
      if (this.$options[key]) {
        if (!this.$options.computed) {
          this.$options.computed = {};
        }
        
        this.$options.computed[key] = this.$options[key].bind(this, this);
      }
    },
    created() {
      if (this[key]) {
        this.$watch(key, headful, { deep: true, immediate: true });
      }
    }
  })
};
