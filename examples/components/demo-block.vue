<template>
    <!-- <div class="docs-demo-wrapper">
        <div :style="{height: isExpand?'auto':'0'}" class="demo-container">
            <div span="14">
                <div class="docs-demo docs-demo--expand">
                    <div class="highlight-wrapper">
                        <slot name="highlight"></slot>
                    </div>
                </div>
            </div>
        </div>
        <span class="docs-trans docs-demo__triangle" @click="toggle">
            {{ isExpand ? '隐藏代码' : '显示代码'}}
        </span>
    </div> -->

    <div 
      class="demo-block"
      :class="[blockClass, {'hover':hovering}]"
      @mouseenter="hovering = true"
      @mouseleave="hovering = false"
    >
      <slot name="source"></slot>
      <div class="meta" ref="meta">
        <div class="description" v-if="$slots.default">
          <slot></slot>
        </div>
        <slot name="highlight"></slot>
      </div>
      <div
        class="demo-block-control"
        ref="control"
        :class="{'is-fixed': fixedControl}"
        @click="isExpanded = !isExpanded"
      >
        <transition name="arrow-slide">
          <z-icon :type="iconClass"></z-icon>
        </transition>
        <transition name="text-slide">
          <span v-show="hovering">{{ controlText }}</span>
        </transition>
      </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      isExpand: false,

      hovering: false,
      isExpanded: false,
      fixedControl: false,
      scrollParent: null
    };
  },
  computed: {
    blockClass() {
      return "";
    },
    iconClass() {
      return this.isExpanded ? "caret-up" : "caret-down";
    },
    controlText() {
      return this.isExpanded ? "显示代码" : "隐藏代码";
    },
    codeArea() {
      return this.$el.getElementsByClassName("meta")[0];
    }
  },
  watch: {
    isExpanded(val) {
      this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : "0";
      if (!val) {
        this.fixedControl = false;
        this.$refs.control.style.left = "0";
        this.removeScrollHandler();
        return;
      }
      setTimeout(() => {
        this.scrollParent = document.querySelector(
          ".page-component__scroll > .el-scrollbar__wrap"
        );
        this.scrollParent &&
          this.scrollParent.addEventListener("scroll", this.scrollHandler);
        this.scrollHandler();
      }, 200);
    }
  },
  mounted() {
    this.$nextTick(() => {
      let highlight = this.$el.getElementsByClassName("highlight")[0];
      if (this.$el.getElementsByClassName("description").length === 0) {
        highlight.style.width = "100%";
        highlight.borderRight = "none";
      }
    });
  },
  beforeDestroy() {
    this.removeScrollHandler();
  },
  methods: {
    toggle() {
      this.isExpand = !this.isExpand;
    },
    scrollHandler() {
      const { top, bottom, left } = this.$refs.meta.getBoundingClientRect();
      this.fixedControl =
        bottom > document.documentElement.clientHeight &&
        top + 44 <= document.documentElement.clientHeight;
      this.$refs.control.style.left = this.fixedControl ? `${left}px` : "0";
    },
    removeScrollHandler() {
      this.scrollParent &&
        this.scrollParent.removeEventListener("scroll", this.scrollHandler);
    }
  }
};
</script>

<style lang="scss">
// .demo-container {
//   transition: max-height 0.3s ease;
//   overflow: hidden;
// }
// .docs-demo {
//   width: 100%;
//   height: auto;
//   box-sizing: border-box;
//   font-size: 14px;
//   background-color: #f7f7f7;
//   border: 1px solid #e2ecf4;
//   border-top: none;
//   pre code {
//     font-family: Consolas, Menlo, Courier, monospace;
//     line-height: 22px;
//     border: none;
//   }
// }
// .docs-trans {
//   width: 100%;
//   text-align: center;
//   display: inline-block;
//   color: #c5d9e8;
//   font-size: 12px;
//   padding: 10px 0;
//   background-color: #fafbfc;
// }

// .docs-demo__code,
// .highlight-wrapper,
// .docs-demo__meta {
//   padding: 0 20px;
//   overflow-y: auto;
// }

// .docs-demo__code {
//   border-bottom: 1px solid #eee;
// }
// .docs-demo.docs-demo--expand .docs-demo__meta {
//   border-bottom: 1px dashed #e9e9e9;
// }

// .docs-demo.docs-demo--expand .docs-demo__triangle {
//   transform: rotate(180deg);
// }

// .highlight-wrapper {
//   display: none;

//   p,
//   pre {
//     margin: 0;
//   }

//   .hljs {
//     padding: 0;
//   }
// }

// .docs-demo.docs-demo--expand .highlight-wrapper {
//   display: block;
// }

// .docs-demo__code__mobi {
//   height: 620px;
//   margin: 20px 0;
// }

// .docs-demo__code__mobi__header {
//   border-radius: 4px 4px 0 0;
//   background: -webkit-linear-gradient(rgba(55, 55, 55, 0.98), #545456);
//   background: linear-gradient(rgba(55, 55, 55, 0.98), #545456);
//   text-align: center;
//   padding: 8px;

//   img {
//     width: 100%;
//   }

//   .url-box {
//     height: 28px;
//     line-height: 28px;
//     color: #fff;
//     padding: 0 3px;
//     background-color: #a2a2a2;
//     margin: 10px auto 0;
//     border-radius: 4px;
//     white-space: nowrap;
//     overflow-x: auto;
//   }
// }

// .docs-demo__code__mobi__content {
//   iframe {
//     width: 100%;
//     border: 0;
//     height: 548px;
//   }
// }
.demo-block {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;

  &.hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }
  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }
  .source {
    padding: 24px;
  }
  .meta {
    background-color: #fafafa;
    border-top: solid 1px #eaeefb;
    overflow: hidden;
    height: 0;
    transition: height 0.2s;
  }
  .description {
    padding: 20px;
    box-sizing: border-box;
    border: solid 1px #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px;
    background-color: #fff;

    p {
      margin: 0;
      line-height: 26px;
    }

    code {
      color: #5e6d82;
      background-color: #e6effb;
      margin: 0 4px;
      display: inline-block;
      padding: 1px 5px;
      font-size: 12px;
      border-radius: 3px;
      height: 18px;
      line-height: 18px;
    }
  }
  .demo-block-control {
    border-top: solid 1px #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;

    &.is-fixed {
      position: fixed;
      bottom: 0;
      width: 868px;
    }

    i {
      font-size: 16px;
      line-height: 44px;
      transition: 0.3s;
      &.hovering {
        transform: translateX(-40px);
      }
    }

    > span {
      position: absolute;
      transform: translateX(-30px);
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      display: inline-block;
    }

    &:hover {
      color: #409eff;
      background-color: #f9fafc;
    }

    & .text-slide-enter,
    & .text-slide-leave-active {
      opacity: 0;
      transform: translateX(10px);
    }

    .control-button {
      line-height: 26px;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 14px;
      padding-left: 5px;
      padding-right: 25px;
    }
  }
}
</style>

