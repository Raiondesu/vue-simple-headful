import Vue from 'vue';
import vueHeadful from '../src/vue-headful';
import root from './root';

console.log('vue-headful:', 'v' + vueHeadful.version);

Vue.use(vueHeadful);
Vue.component('root', root);

new Vue({
    el: '#app',
    render: h => h('root')
});
