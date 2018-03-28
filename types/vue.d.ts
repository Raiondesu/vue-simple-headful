/**
 * Augment the typings of Vue.js
 */

import Vue, { ComponentOptions } from 'vue'
import { Headful } from './index'

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    headful?: Headful | (() => Headful)
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $headful?: Headful | (() => Headful)
  }
}
