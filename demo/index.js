import Vue from 'vue';
import vueHeadful from '../src/vue-headful';
import aComponent from './component';

Vue.use(vueHeadful);
Vue.component('a-component', aComponent);

new Vue({
    el: '#app',
    render(createElement) {
        return createElement('a-component');
    },
});
