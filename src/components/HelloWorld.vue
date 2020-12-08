<!--
 * @Author: your name
 * @Date: 2020-10-15 22:57:25
 * @LastEditTime: 2020-12-04 22:18:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \self_fraem\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
      <div class="item"></div>
      <div class="item"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @for $i from 1 through 3
// {
//     .item-#{$i}
//     {
//         width:(20px * $i);
//         background: blue;
//     }
// }

</style>
