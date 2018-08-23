import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/test",
      name: "test",
      component: r => require.ensure([], () => r(require("../docs/test.md")))
    },
    {
      path: "/icon",
      name: "icon",
      component: r => require.ensure([], () => r(require("../docs/icon.md")))
    },
    {
      path: "/button",
      name: "button",
      component: r => require.ensure([], () => r(require("../docs/button.md")))
    }
  ]
});
