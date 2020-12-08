import { login, getInfo } from '@/api/userApi'

import {
  SET_NAME,
  SET_AVATAR,
  SET_ROLES,
  SET_TOKEN
} from '@/store/mutation-types'

const state = {
  name: '',
  avatar: '',
  roles: [],
  token: ''
}

const mutations = {
  [SET_NAME](state, name) {
    state.name = (name || '')
  },

  [SET_AVATAR](state, avatar) {
    state.avatar = (avatar || '')
  },

  [SET_ROLES](state, roles) {
    state.roles = (roles || [])
  },

  [SET_TOKEN](state, token) {
    state.token = (token || '')
  }
}

const actions = {

  async login({ commit }, userInfo) {
    const { username, password, isRemember } = userInfo
    const { resultCode, data } = await login(username, password, isRemember)
    if (resultCode === 0) {
      const { token } = data
      commit(SET_TOKEN, token)
      // 登录成功后自动获取用户信息
      // await dispatch('getInfo')
      return data
    } else {
      return null
    }
  },

  async getInfo({ commit }) {
    const { resultCode, data } = await getInfo()
    if (resultCode === 0) {
      const { username, roles } = data
      commit(SET_NAME, username)
      commit(SET_ROLES, roles)
      return data
    } else {
      return null
    }
  },

  logout({ commit }) {
    commit(SET_NAME, '')
    commit(SET_ROLES, [])
    commit(SET_TOKEN, '')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
