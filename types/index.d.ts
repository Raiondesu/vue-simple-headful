import './vue'
import { PluginObject } from 'vue/types/plugin'

export interface Headful {
  [key: string]: any
}

export interface Plugin extends PluginObject<{ key?: string, component?: boolean }> {
  version: string
}

declare const plugin: Plugin;

export default plugin;
