import Vue from 'vue'
import Router from 'vue-router'

import constantRoutes from '@/router/constantRouter'

Vue.use(Router)

const createRouter = () => new Router({
  base: process.env.VUE_APP_BASE_URL,
  mode: 'history',
  routes: constantRoutes
})

const router = createRouter()

// 重置路由
export const resetRouter = () => {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // 解决多次addRoutes引起的路由重叠
}

export default router
