import ZCol from "./src/col";

/* istanbul ignore next */
ZCol.install = function (Vue) {
  Vue.component(ZCol.name, ZCol);
};

export default ZCol;