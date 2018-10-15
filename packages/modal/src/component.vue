<template>
    <transition
        name="dialog-fade"
    >
        <div class="z-dialog__wrapper">
            <div class="z-dialog">
                <div class="z-dialog__header">
                    <slot name="title">
                        <span class="z-dialog__title"></span>
                    </slot>
                    <button
                        type="button"
                        class="z-dialog__headerbtn"
                    >
                    </button>
                </div>

                <div class="z-dialog__body">
                    <slot></slot>
                </div>

                <div ref="testDom" class="z-dialog-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import emitter from "../../../src/mixins/emitter";

export default {
  name: "VModel",

  mixin: [emitter],

  porps: {
    title: {
      type: String,
      default: ""
    },

    modal: {
      type: Boolean,
      default: true
    },

    modalAppendToBody: {
      type: Boolean,
      default: true
    },

    appendToBody: {
      type: Boolean,
      default: false
    },

    lockScroll: {
      type: Boolean,
      default: true
    },

    closeOnClickModal: {
      type: Boolean,
      default: true
    },

    closeOnPressEscape: {
      type: Boolean,
      default: true
    },

    showClose: {
      type: Boolean,
      default: true
    },

    width: String,

    fullscreen: Boolean,

    customClass: {
      type: String,
      default: ""
    },

    top: {
      type: String,
      default: "15vh"
    },

    beforeClose: Function,

    center: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      closed: false
    };
  },

  mounted() {
    let $testDom = this.$refs.testDom;
    console.log($testDom.classList);
    console.log($testDom.className);
  }
};
</script>

