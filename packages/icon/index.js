import ZIcon from "./src/icon.vue";

ZIcon.install = function (Vue) {
    Vue.component(ZIcon.name, ZIcon);
};

export default ZIcon;