<template>
  <div class="header">
    <span style="width: 200px;">{{ dateArr[0] }}</span>
    <div class="header-main">
      <h1 style="margin:0">数据大屏驾驶舱</h1>
    </div>
    <div class="header-btn" @click="$router.push('/page1')">
      业务中心
    </div>
    <span style="width: 200px;"> {{dateArr[2]}} {{dateArr[1]}}</span>
  </div>
</template>
<script>
import { formatDate } from '@/utils/date'
export default {
  name: "Header",
  data () {
    return {
      dateArr: []
    }
  },
  created () {
    this.initDateTime();
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },
  methods: {
    initDateTime () {
      this.dateArr = formatDate(new Date());
      let timmer = setInterval(() => {
        this.timmer = timmer;
        this.dateArr = formatDate(new Date());
      }, 1000);
    }
  }
};
</script>
<style scoped lang="less">
.header {
  padding: 0 30px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url("~@/assets/img/bigdata-head-bg.png") no-repeat;
  background-size: 100% 100%;
  h1 {
    font-size: 36px;
    font-weight: 600;
    color: #fff;
    font-family: "Audiowide";
    text-shadow: 0 0 50px #8df;
    letter-spacing: 3px;
  }

  .ant-dropdown-link {
    font-size: 20px;
    font-weight: 600;
    color: skyblue;
    text-shadow: 0 0 50px #8df;
  }

  span {
    font-size: 18px;
    color: #fff;
    font-family: "consolas";
    text-shadow: 0 0 50px #8df;
    letter-spacing: 1px;
  }
}

.header-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 5px 0;
}

.header-btn {
  position: absolute;
  top: 40px;
  right: 500px;
  width: 130px;
  height: 45px;
  border: 1px solid #1e8e9b;
  letter-spacing: 2px;
  line-height: 45px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  font-family: "Audiowide";
  box-shadow: 0 0 20px #8df;
  cursor: pointer;
  transition: all 0.3s;

  &:hover{
    text-shadow: 0 0 50px #8df;
    box-shadow: 0 0 5px #8df;
  }

}
</style>