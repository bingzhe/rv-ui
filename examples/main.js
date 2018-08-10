import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import DemoBlock from './components/demo-block.vue';
Vue.component('demo-block', DemoBlock);

import './assets/scss/index.scss';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
