<!--
 * @Author: zhangshaolong
 * @Date: 2020-12-17 21:30:34
 * @LastEditTime: 2020-12-18 01:21:42
-->
<template>
    <el-table
    class="table"
    border
    row-key="id"
    :size="tableSize"
    :data="tableData"
  >
    <el-table-column
      :prop="`${v.dataIndex}`"
      v-for="v in columnData"
      :key="v.dataIndex ? v.dataIndex : v.key"
      :label="v.title"
      :width="v.width ? v.width : ''"
      :align="v.align ? v.align : 'center'"
    >3
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created() {
    console.log(this.tableData);
  },
  updated() {
  },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    rowKey: {
      type: String,
      default: "key",
    },
    tableSize: {
      type: String,
      default: "medium",
    },
    columnData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang='scss' scoped>
.table {
  width: calc(100% - 50px);
  margin: 0 auto;
  margin-top: 40px;
}
</style>
