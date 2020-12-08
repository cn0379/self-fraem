import {
  SET_ACTION_ROW,
  SET_FORM_DATA,
  SET_FORM_RULES,
  SET_MODAL_VISIBLE,
  SET_MODAL_TYPE,
  SET_MODAL_DATA,
  SET_MODAL_LOADING,
  SET_RULE_STATE,
} from '@/store/mutation-types'

const state = {
  form: {},   //表单数据
  formRules: {},  //表单校验规则
  selectedRows: [],   //表格选中行
  actionRow: {},    //正在操作列数据
  modalVisible: false,  //false: 隐藏 - true: 显示
  modalType: 0,         //0: insert - 1:update
  modalForm: [],   //模态框表单数据（属性+值）
  modalLoading: false,   //模态框提交按钮loading state
  ruleState: true   //表单数据校验状态(为false时， 拦截insert/update请求)
}

const mutations = {

  [SET_ACTION_ROW](state, row) {
    state.actionRow = row || {}
  },

  [SET_FORM_DATA](state, formData) {
    state.form = { ...formData }
  },

  [SET_FORM_RULES](state, rules) {
    state.formRules = { ...rules }
  },

  [SET_MODAL_VISIBLE](state, visible) {
    state.modalVisible = visible
  },

  [SET_MODAL_TYPE](state, type) {
    state.modalType = type
  },

  [SET_MODAL_DATA](state, data) {
    state.modalForm = data || []
  },

  [SET_MODAL_LOADING](state, loadingState) {
    state.modalLoading = loadingState
  },

  [SET_RULE_STATE](state, ruleState) {
    state.ruleState = ruleState
  }

}

const actions = {
  setActionRow({ commit }, row) {
    commit(SET_ACTION_ROW, row)
  },

  setFormData({ commit }, formData) {
    commit(SET_FORM_DATA, formData)
  },

  openModalLoading({ commit }) {
    commit(SET_MODAL_LOADING, true)
  },

  setRuleState({ commit }, ruleState) {
    //校验失败 loading结束
    if (!ruleState) {
      commit(SET_MODAL_LOADING, false)
    }
    commit(SET_RULE_STATE, ruleState)
  },

  openModal({ commit }, { type, data, row, rules }) {
    commit(SET_MODAL_VISIBLE, true)
    commit(SET_MODAL_TYPE, type)
    commit(SET_MODAL_DATA, data)
    commit(SET_ACTION_ROW, row)
    commit(SET_FORM_RULES, rules)
  },

  closeModal({ commit }) {
    commit(SET_RULE_STATE, true)
    commit(SET_MODAL_LOADING, false)
    commit(SET_MODAL_VISIBLE, false)
    commit(SET_MODAL_DATA, [])
    commit(SET_ACTION_ROW, {})
    commit(SET_FORM_RULES, {})
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}