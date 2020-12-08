/*
 * @Author: your name
 * @Date: 2020-11-22 13:46:42
 * @LastEditTime: 2020-11-29 22:00:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \self_fraem\src\router\constantRouter.js
 */
import DataLayout from '@/layouts/screen/index'

/**
 * 
 * 静态路由
 * 无需权限校验
 * 
 **/
const constantRoutes = [
  {
    path: '/',
    redirect: '/screen'
  },
  {
    path: '/screen',
    name: 'screen',
    component: DataLayout,
    redirect: '/screen/master',
    meta: {
      title: '数据大屏'
    },
    // children: [
    //   {
    //     path: 'master',
    //     name: 'master',
    //     component: () => import('@/views/screen/master'),
    //     meta: {
    //       title: '主屏'
    //     }
    //   }
    // ]
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('@/views/login/index'),
  //   meta: {
  //       title: '登陆',
  //       requiresAuth: false
  //   }
  // },
]

export default constantRoutes