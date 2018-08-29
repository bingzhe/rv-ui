import ZButton from "./src/button.vue";

ZButton.install = function (Vue) {
  Vue.component(ZButton.name, ZButton);
};

export default ZButton;