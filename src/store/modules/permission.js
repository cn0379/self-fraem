/*
 * @Author: your name
 * @Date: 2020-11-29 21:31:12
 * @LastEditTime: 2020-11-29 22:38:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
//  * @FilePath: \self_fraem\src\store\modules\permission.js
//  */
// import asyncRoutes from '@/router/asyncRouter'
import { SET_ROUTES } from "@/store/mutation-types"

const hasPermission = (route, roles) => {
  if(route.meta && route.meta.roles){
    return roles.some(role => route.meta.roles.includes(role))
  }else{
    return true
  }
}

const filterAsyncRoutes = (routes, roles) => {
  let filterRoutes = []
  routes.forEach(route => {
    if(hasPermission(route, roles)){
      let temp = { ...route }
      if(temp.children){
        //递归过滤子路由权限
        temp.children = filterAsyncRoutes(temp.children, roles)
      }
      filterRoutes.push(temp)
    }
  })
  return filterRoutes
}

const state = {
  routes: []
}

const mutations = {
  [SET_ROUTES](state, routes) {
    state.routes = routes
  }
}

const actions = {
  generateRoutes({ commit }, roles){
    return new Promise(resolve => {
      let accessRoutes = []
      if(roles.includes('admin')){
        accessRoutes = asyncRoutes || []
      }else{
        accessRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit(SET_ROUTES, accessRoutes)
      resolve(accessRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}