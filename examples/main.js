import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import DemoBlock from './components/demo-block.vue';
import ZVUI from '../src/index.js';
console.log(ZVUI);

import '../packages/theme-chalk/lib/index.css';

Vue.component('demo-block', DemoBlock);
Vue.use(ZVUI);

import './assets/scss/index.scss';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
