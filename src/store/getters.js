/*
 * @Author: your name
 * @Date: 2020-11-29 15:41:15
 * @LastEditTime: 2020-11-29 20:58:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \self_fraem\src\store\getters.js
 */
const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  avatar: state => state.user.avatar,
  roles: state => state.user.roles,
  routes: state => state.permission.routes,
  visitedViews: state => state.app.visitedViews,
  scrollView: state => state.app.scrollView,
  collapsed: state => state.app.collapsed,
  actionRow: state => state.page.actionRow,
  form: state => state.page.form,
  formRules: state => state.page.formRules,
  modalVisible: state => state.page.modalVisible,
  modalType: state => state.page.modalType,
  modalForm: state => state.page.modalForm,
  modalLoading: state => state.page.modalLoading,
  ruleState: state => state.page.ruleState
}

export default getters
