import ZButtonGroup from "./src/button-group.vue";

ZButtonGroup.install = function (Vue) {
  Vue.component(ZButtonGroup.name, ZButtonGroup);
};

export default ZButtonGroup;