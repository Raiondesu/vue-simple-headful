import Vue from 'vue';
import headful from 'headful';

const plugin = {
  install (Vue, options?: { key: string, component: boolean }) {
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
          } else {
            Object.keys(this.$props).forEach(p => (p !== key) && this.$watch(p, headful.props[p], { immediate: true }));
          }
        },
      });
    }

    Vue.mixin({
      data() {
        if (!this.$options[key]) return {};
        return { headful: {} };
      },
      created(this: Vue) {
        if (this[key]) {
          const head = typeof this.$options[key] === 'function' ? this.$options[key].bind(this, this)() : this.$options[key];

          this.$set(this, key, head);
          this.$watch(key, headful, { deep: true, immediate: true });
        }
      }
    })
  },
  version: require('./package.json').version
};

if (window && window['Vue']) {
  plugin.install(window['Vue']);
}


declare module 'vue/types/options' {
	interface ComponentOptions<V extends Vue> {
		headful?: {
      (vm?: V): { [key: string]: any };
    } | { [key: string]: any }
  }
}

declare module 'vue/types/vue' {
  interface VueConstructor<V extends Vue = Vue> {
		headful?: {
      (vm?: any): { [key: string]: any };
    } | { [key: string]: any }
  }

  interface Vue {
		$headful?: {
      (vm?: any): { [key: string]: any };
    } | { [key: string]: any }
  }
}


export default plugin;
