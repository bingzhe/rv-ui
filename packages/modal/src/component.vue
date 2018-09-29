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
export default {
  name: "VModel",

  mounted() {
    let $testDom = this.$refs.testDom;
    console.log($testDom.classList);
    console.log($testDom.className);
  }
};
</script>

