<!--
 * @Author: zhangshaolong
 * @Date: 2020-12-17 13:08:12
 * @LastEditTime: 2020-12-17 21:26:40
-->

<template>
  <div class="form-wrapper">
    <el-form
      :ref="formRef"
      :inline="inline"
      :model="formObj"
      v-bind="formItemLayout"
      :label-position="labelPosition"
      :rules="hasRules ? formRules : {}"
      :v-loading="loading"
    >
      <el-form-item
        :label="v.label"
        v-for="v in innerFormData"
        :key="v.data"
        :prop="v.data"
      >
        <el-input size="small" v-model="formObj[v.data]" v-if="v.type === 'input'" />
        <el-select
          size="small"
          v-model="formObj[v.data]"
          placeholder=""
          v-if="v.type === 'select'"
        >
          <el-option
            clearable
            v-for="r in v.options"
            :key="r.value"
            :label="r.title"
            :value="r.value"
          >
          </el-option>
        </el-select>
        
        <el-cascader
          size="small"
          placeholder=""
          v-model="formObj[v.data]"
          :options="v.options"
          @change="handleChange"
          v-if="v.type === 'cascader'"
        ></el-cascader>
        <el-radio-group size="small" v-model="formObj[v.data]" v-if="v.type === 'radio'">
          <el-radio-button
            v-for="r in v.options"
            :key="r.val"
            :label="r.val"
            >{{ r.title }}</el-radio-button
          >
        </el-radio-group>
        <el-date-picker
          size="small"
          v-model="formObj[v.data]"
          type="date"
          format="yyyy-MM-dd"
          placeholder="选择日期"
          v-if="v.type === 'datePicker'"
        >
        </el-date-picker>
        <el-upload
          size="small"
          v-if="v.type === 'upload'"
          :action="``"
          :headers="{ Authorization: token }"
          :file-list="fileList"
          :on-change="handleChange($event, v)"
        >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <div class="btn-view">
      <el-button
        size="mini"
        v-if="formBtn.indexOf('query') !== -1"
        type="primary"
        icon="el-icon-search"
        class="form-btn"
        :loading="loading"
        @click="search"
        >查询</el-button
      >
      <el-button
        size="mini"
        v-if="formBtn.indexOf('reset') !== -1"
        icon="el-icon-refresh-left"
        class="form-btn"
        @click="reset"
        >重置</el-button
      >
      <el-button
        size="mini"
        v-if="formBtn.indexOf('insert') !== -1"
        type="primary"
        icon="el-icon-circle-plus-outline"
        class="form-btn form-btn_success"
        @click="$emit('insert')"
        >新增</el-button
      >
      <el-button
        size="mini"
        v-if="formBtn.indexOf('delete') !== -1"
        type="danger"
        icon="el-icon-delete"
        class="form-btn"
        @click="$emit('delete')"
        >删除</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    formRef: {
      type: String,
      default: "baseForm",
    },
    formData: {
      type: Array,
      default: () => [],
    },
    labelPosition: {
      type: String,
      default: "right",
    },
    formBtn: {
      type: Array,
      default: () => [],
    },
    inline: {
      type: Boolean,
      default: true,
    },
    hasRules: Boolean,
  },
  data() {
    return {
      formObj: {},
      loading: false,
      fileList: [],
    };
  },
  created() {
    this.setFormObj();
  },
  computed: {
    innerFormData() {
      return this.formData;
    },
    formItemLayout() {
      return this.layout === "horizontal"
        ? {
            labelCol: { span: 6 },
            wrapperCol: { span: 13 },
          }
        : {};
    },
  },
  methods: {
    //查询
    search() {
      this.loading = true;
      this.setFormData(this.formObj);
      setTimeout(() => {
        this.loading = false;
        this.$emit("search");
      }, 1000);
    },
    //重置查询参数
    reset() {
      this.$refs[this.formRef].resetField();
      this.setFormData(this.formObj);
    },
    //将props转换为formData
    setFormObj() {
      const formObj = {};
      this.formData.forEach((r) => {
        formObj[r.data] = this.getInitialVal(r.value);
      });
      this.formObj = formObj;
    },
    getInitialVal(v) {
      if (v === 0 || v === false || v === undefined) return v;
      return v || "";
    },
    handleChange() {},
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/pages/_form.scss";

</style>