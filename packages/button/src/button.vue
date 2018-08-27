<template>
    <button
        class="z-button" 
        :class="[
            type ? 'z-button--' + type : '',
            buttonSize ? 'z-button--' + buttonSize : '',
            {
                'is-disabled': buttonDisabled,
                'is-loading': loading,
                'is-plain': plain,
                'is-round': round,
                'is-circle': circle,
            }
        ]"
    >
      <z-icon :type="icon" v-if="loading"/>
      <z-icon :type="icon" v-if="icon && !loading" />
      <span v-if="$slots.default">
        <slot></slot>
      </span>
    </button>
</template>

<script>
// import ZIcon from "../../icon/index.js";

export default {
  name: "ZButton",

  components: {
    // ZIcon
  },

  inject: {
    zForm: {
      default: "",
    },
    zFormItem: {
      default: "",
    }
  },
  props: {
    type: {
      type: String,
      default: "dufault"
    },
    size: String,
    icon: {
      type: String,
      default: ""
    },
    nativeType: {
      type: String,
      default: "button"
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },

  computed: {
    buttonSize() {
      return this.size;
    },
    buttonDisabled() {
      return this.disabled;
    }
  }
};
</script>

