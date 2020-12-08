/*
 * @Author: your name
 * @Date: 2020-11-29 21:29:42
 * @LastEditTime: 2020-11-29 21:30:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \self_fraem\src\store\modules\app.js
 */
import { 
  ADD_VISITED_VIEW,
  DEL_VISITED_VIEW,
  CLEAR_VISITED_VIEW,
  SET_COLLAPSED 
} from '@/store/mutation-types'

const state = {
  visitedViews: [],
  cachedViews: [],
  collapsed: false
}

const mutations = {
  [ADD_VISITED_VIEW](state, view) {
    if(state.visitedViews.some(r => r.path === view.path)) return
    state.visitedViews.push(view)
  },

  [DEL_VISITED_VIEW](state, view) {
    const index = state.visitedViews.findIndex(({ path }) => path === view.path)
    state.visitedViews.splice(index, 1)
  },

  [CLEAR_VISITED_VIEW](state){
    state.visitedViews = []
  },

  [SET_COLLAPSED](state, isCollapsed){
    state.collapsed = isCollapsed
  }
}

const actions = {
  addVisitedView({ commit }, view){
    commit(ADD_VISITED_VIEW, view)
  },

  delVisitedView({ commit }, view){
    commit(DEL_VISITED_VIEW, view)
  },

  setCollapsed({ commit }, isCollapsed){
    commit(SET_COLLAPSED, isCollapsed)
  },

  clearAppState({ commit }){
    commit(CLEAR_VISITED_VIEW)
    commit(SET_COLLAPSED, false)
  }
}

export default{
  namespaced: true,
  state,
  mutations,
  actions
}