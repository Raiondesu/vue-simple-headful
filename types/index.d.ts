import { PluginFunction } from "vue";

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

export default interface Plugin {
	install: PluginFunction<{ key: string }>,
	version: number
}