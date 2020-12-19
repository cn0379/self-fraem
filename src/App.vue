<!--
 * @Author: your name
 * @Date: 2020-10-15 22:57:25
 * @LastEditTime: 2020-12-18 01:09:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \self_fraem\src\App.vue
-->
<template>
  <div id="app">
    <!-- <div :class="`btn${item}`" v-for="item in 3" :key="'btn' + item">这是一个按钮</div>
    <div class="ani-con" >
      <div class="ani" >
         carousel
      </div>
    </div>
     <h3 class="btn" :class="{ 'btn-translate': isAutoplay }">
      <div class="com-name">
        <div
          v-for="(item, index) in 10"
          :key="'per' + index"
        >
          {{ item }}
        </div>
      </div>
    </h3> -->

    <base-form :formData="formData" :form-btn="formBtn" />
    <base-table
      table-size="small"
      :tableData="tableData"
      :column-data="columnData"
    >
      <template v-slot:gender="{ r }">
        <el-tag :type="r === 0 ? '' : 'success'">{{
          r === 1 ? "男" : "女"
         }}</el-tag>
      </template>
    </base-table>
    <router-view />
  </div>
</template>

<script>
import pageMixins from "@/mixins/";

export default {
  components: {},
  mixins: [pageMixins],
  data() {
    return {
      isAutoplay: true,
      reqPath: {
        query: "api/list",
        insert: "api/insert",
        update: "api/update",
        delete: "api/delete",
      },
      formBtn: ["query", "insert", "delete", "reset"],
      formData: [
        { type: "input", data: "name", label: "姓名", value: "" },
        {
          type: "select",
          data: "gender",
          label: "性别",
          value: "",
          options: [
            { value: "男", val: 1 },
            { value: "女", val: 0 },
          ],
        },
        {
          type: "datePicker",
          data: "date",
          label: "日期",
          value: "",
        },
        {
          type: "radio",
          data: "isTotal",
          label: "是否统计",
          value: 0,
          options: [
            { title: "是", val: 1 },
            { title: "否", val: 0 },
          ],
        },
      ],
      columnData: [
        {
          title: "序号",
          dataIndex: "id",
          width: 60,
          align: 'center'
        },
        {
          title: "姓名",
          dataIndex: "name"
        },
        {
          title: "性别",
          dataIndex: "gender",
          slot: true
        },
        {
          title: "年龄",
          dataIndex: "age"
        },
        {
          title: "身份证",
          dataIndex: "idCard"
        },
        {
          title: "住址",
          dataIndex: "address"
        },
        {
          title: "性格",
          dataIndex: "tags",
          slot: true
        }
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/pages/_form.scss";

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

.ani-con {
  transform-style: preserve-3d;
  height: 50px;
  margin-top: 0.5em;
  background-color: aqua;
  border-radius: 5px;
}

// @include scroll(10);

.btn {
  height: 45px;
  overflow: hidden;
}
</style>
