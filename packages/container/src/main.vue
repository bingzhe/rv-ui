<template>
    <section 
        class="z-container" 
        :class="{'is-vertical': isVertical}"
    >
        <slot></slot>
    </section>
</template>

<script>
export default {
  name: "ZContainer",

  componentName: "ZContainer",

  props: {
    direction: String
  },

  computed: {
    isVertical() {
      if (this.direction === "vertical") {
        return true;
      } else if (this.direction === "horizontal") {
        return false;
      }

      return this.$slots && this.$slots.default
        ? this.$slots.default.some(vnode => {
            const tag = vnode.componentOptions && vonde.componentOptions.tag;
            return tag === "z-header" || tag === "z-footer";
          })
        : false;
    }
  }
};
</script>

