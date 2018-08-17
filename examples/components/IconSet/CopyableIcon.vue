<template>
    <li 
        class="icon-item"
        :class="justCopied ? 'copied' : ''"
        v-clipboard:copy="text"
        v-clipboard:success="onCopied"   
    >
        <z-icon class="icon" :type="type"/>
        <span class="icon__text">
          {{ type }}
        </span>
    </li>
</template> 

<script>
export default {
  props: {
    type: String,
    isNew: Boolean
  },
  data() {
    return {
      justCopied: false,
      text: `<z-icon type="${this.type}" />`
    };
  },
  methods: {
    onCopied() {
      this.justCopied = true;
      setTimeout(() => {
        this.justCopied = false;
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.icon-item {
  float: left;
  width: 16.66%;
  text-align: center;
  list-style: none;
  cursor: pointer;
  height: 100px;
  color: #555;
  transition: all 0.3s;
  position: relative;
  margin: 3px 0;
  border-radius: 4px;
  background-color: #fff;
  overflow: hidden;
  padding: 10px 0 0;
  .icon {
    display: inline-block;
    font-size: 28px;
    margin: 12px 0 10px;
    transition: all 0.3s;
  }
  .icon__text {
    display: block;
    text-align: center;
    transform: scale(0.83);
    font-family: "Lucida Console", Consolas;
    white-space: nowrap;
  }
  &:hover {
    background-color: #1890ff;
    color: #fff;
    .icon {
      transform: scale(1.4);
    }
  }
  &.copied:hover {
    color: rgba(255, 255, 255, 0.2);
  }

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: "Copied!";
    text-align: center;
    line-height: 110px;
    color: #fff;
    transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    opacity: 0;
  }

  &.copied:after {
    opacity: 1;
    top: -10px;
  }
}
</style>

