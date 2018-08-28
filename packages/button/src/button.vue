<template>
    <button
        class="z-button" 
        @click="handleClick"
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
      <z-icon class="v-icon-loading" :type="icon" v-if="loading"/>
      <z-icon :type="icon" v-if="icon && !loading" />
      <span v-if="$slots.default">
        <slot></slot>
      </span>
    </button>
</template>

<script>
export default {
  name: "ZButton",

  inject: {
    zForm: {
      default: ""
    },
    zFormItem: {
      default: ""
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
    _zFormItemSize() {
      return (this.zFormItem || {}).zFormItemSize;
    },
    buttonSize() {
      return this.size || this._zFormItemSize || (this.$ELEMENT || {}).size;
    },
    buttonDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>

