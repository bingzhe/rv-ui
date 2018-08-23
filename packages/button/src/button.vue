<template>
    <div
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

    </div>
</template>

<script>
export default {
  name: "ZButton",
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

