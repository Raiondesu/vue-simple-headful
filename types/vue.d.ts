/**
 * Augment the typings of Vue.js
 */

import Vue, { ComponentOptions } from 'vue'
import { Headful } from './index'

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    headful?: Headful | {
      (vm?: V): Headful
    }
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $headful<T extends object>(props: T): void
    headful?: Headful
  }
}
