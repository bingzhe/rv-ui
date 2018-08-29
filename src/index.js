import ZIcon from "../packages/icon/index.js";
import ZButton from "../packages/button/index.js";
import ZButtonGroup from "../packages/button-group/index.js";
import ZCol from "../packages/col/index.js";

const components = [
  ZIcon,
  ZButton,
  ZButtonGroup,
  ZCol
];

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

// module.exports = {
//     install,
//     ZIcon
// };

// module.exports.default = module.exports;

export default {
  install,
  ZIcon,
  ZButton,
  ZButtonGroup,
  ZCol
};