import Vue from 'vue'
import VueHeadful from '../../'

Vue.use(VueHeadful, { component: true })

const vm = new Vue();

vm.$headful({})
vm.headful = {};

const comp = Vue.extend({
  headful: (vue) => ({
    title: vue.$el
  })
})

new comp().$headful({})
new comp().headful = {};

