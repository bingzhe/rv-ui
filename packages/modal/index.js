import VModel from "./src/component.vue";

VModel.install = function (Vue) {
  Vue.component(VModel.name, VModel);
};

export default VModel;