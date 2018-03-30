import { PluginObject } from 'vue'

import installCommon from './common'
import VueHeadful from '../../../'

const plugins: PluginObject<any> = {
  install(Vue, options) {
    installCommon(Vue, options);
    VueHeadful.install(Vue, options);
    // Plugins should be enabled here
  }
}

export default plugins;

export { environment, isDevelopment } from './common'
