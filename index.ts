import Vue, { PluginObject } from 'vue';

import headful from 'headful';

const plugin: Plugin = {
  install (Vue, options) {
    const key = (options && options.key) || 'headful';

    Object.defineProperty(Vue.prototype, `$${key}`, { get: () => headful });

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

export default plugin;

declare module 'vue/types/options' {
	interface ComponentOptions<
		V extends Vue,
		Data=DefaultData<V>,
		Methods=DefaultMethods<V>,
		Computed=DefaultComputed,
		PropsDef=PropsDefinition<DefaultProps>,
		Props=DefaultProps
	> {
		headful?: (vm?: V) => { [key: string]: any }
  	}
}

// declare module '*.json' {
//   const str: string;
// 	export default str;
// }

interface Plugin extends PluginObject<{ key: string }> {
	version: number
}
