<!--
 * @Author: your name
 * @Date: 2020-10-15 22:57:25
 * @LastEditTime: 2020-12-07 00:11:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \self_fraem\src\App.vue
-->
<template>
  <div id="app">
    <div :class="`btn${item}`" v-for="item in 3" :key="'btn' + item">这是一个按钮</div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
#app {
  width: calc(100% - 80px);
  margin: 0 auto;
}
$btns: (
  btn1: #409eff,
  btn2: #67c23a,
  btn3: #f56c6c,
);

@each $keys, $values in $btns {
  .#{$keys} {
    margin-top: 0.5em;
    @include el-btn($values);
  }
}
</style>
