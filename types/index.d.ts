import './vue'
import { PluginObject } from 'vue/types/plugin'

export interface Headful {
  [key: string]: any
}

declare const plugin: PluginObject<{ key?: string, component?: boolean }>;

export default plugin;
