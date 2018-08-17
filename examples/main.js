import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

//zv-ui
import ZVUI from "../src/index.js";
import "../packages/theme-chalk/lib/index.css";
Vue.use(ZVUI);

//copied
import VueClipboard from "vue-clipboard2";
Vue.use(VueClipboard);

//example components
import DemoBlock from "./components/demo-block.vue";
Vue.component("demo-block", DemoBlock);

import "./assets/scss/index.scss";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
