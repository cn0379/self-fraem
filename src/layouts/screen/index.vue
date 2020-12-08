<!--
 * @Author: your name
 * @Date: 2020-11-29 21:49:47
 * @LastEditTime: 2020-11-29 22:01:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \self_fraem\src\layouts\screen\index.vue
-->
//大屏
<template>
  <div class="dashboard">
    <div ref="dashboardView" class="dashboard-view" style="visibility: hidden">
      <div ref="maxView" class="max-view" style="width:1920px; height:1080px">
        <data-header></data-header>
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import DataHeader from "@/layouts/screen/DataHeader";
export default {
  name: "data_screen",
  components: {
    DataHeader
  },
  mounted() {
    this.init();
    window.onresize = () => {
      this.zoomView();
    }
  },
  destroyed(){
    //节流
    window.onresize = null
  },
  methods: {
    init() {
      this.zoomView();
      this.$refs.dashboardView.style.visibility = "visible";
    },
    zoomView() {
      let maxView = this.$refs.maxView,
        viewWidth = parseInt(maxView.style.width),
        viewHeight = parseInt(maxView.style.height),
        clientRect = maxView.offsetParent.getBoundingClientRect();

      let scale = Math.min(
        clientRect.width / viewWidth,
        clientRect.height / viewHeight
      );
      let left = (clientRect.width - viewWidth * scale) / 2;
      let top = (clientRect.height - viewHeight * scale) / 2;
      maxView.style.left = `${left}px`;
      maxView.style.top = `${top}px`;
      maxView.style.transform = `scale(${scale} , ${scale})`;
    }
  }
};
</script>

<style scoped lang="less">
.dashboard {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  background: url('~@/assets/img/bigdata-bg.jpeg') no-repeat;
  background-size: 100% 100%;
}

.dashboard-view {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: auto;
}

.dashboard-view .max-view {
  position: absolute;
  transform-origin: left top;
  overflow: hidden;
}
</style>