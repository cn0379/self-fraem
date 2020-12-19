/*
 * @Author: zhangshaolong
 * @Date: 2020-12-09 08:34:19
 * @LastEditTime: 2020-12-18 00:25:53
 */
import BaseForm from '@c/base/BaseForm'
import BaseTable from '@c/base/BaseTable'

import { mapGetters, mapActions } from "vuex";
import { baseQuery, baseInsert, baseUpdate, baseDelete } from "@/api/listApi";

export default {
  components: {
    BaseForm,
    BaseTable
  },
  created() {
    this.setList()
  },
  data() {
    return {
      reqPath: {
        query: '',
        insert: '',
        update: '',
        delete: ''
      },

      //form props
      formBtn: [],
      formData: [],

      //table props
      tableData:[],
      columnData:[],
      pageData: {
        current: 1,
        total: 0,
        pageSize: 10,
        showTotal: t => `共 ${t} 条记录`,
        showQuickJumper: true,
        showSizeChanger: true
      }
    }
  },
  methods:{ 
       //初始查询
       async setList(pageNumber = this.pageData.pageNumber, pageSize = this.pageData.pageSize, formObj = {}) {
        const { resultCode, data } = await baseQuery(
          this.reqPath.query,
          pageNumber,
          pageSize,
          formObj
        );
        if (resultCode === 0) {
          const { records, total, size, current } = data;
          this.tableData = records.map((r, i) => ({
            id: (i + 1) + (current - 1) * size,
            ...r
          }));
          this.pageData = {
            ...this.pageData,
            current,
            total,
            pageSize: size
          };
        }
      }
  }
};
