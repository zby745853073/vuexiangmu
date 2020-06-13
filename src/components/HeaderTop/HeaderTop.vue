<template>
  <header class="header_top">
    <slot name='search'></slot>
    <a class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </a>
    <slot name='login'></slot>
  </header>
</template>

<script>
export default {
  props: {
    title: { type: String }
  }
};
</script>

<style scoped lang='scss'>
// 头部样式
@import "../../common/styles/header.scss";
</style>