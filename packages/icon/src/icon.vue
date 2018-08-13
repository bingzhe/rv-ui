<template>
    <i 
      :class="classes"
      v-on="$listeners"
    ></i>
</template>

<script>
export default {
  name: "ZIcon",

  props: {
    prefixCls: {
      default: "anticon",
      type: String
    },
    type: String,
    spin: Boolean
  },

  computed: {
    classes() {
      const { prefixCls, type, spin } = this;
      return {
        [`${prefixCls}`]: true,
        [`${type}`]: type,
        [`${prefixCls}-spin`]: !!spin || type === "loading"
      };
    }
  }
};
</script>

