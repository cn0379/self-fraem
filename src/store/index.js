import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import getters from '@/store/getters'
Vue.use(Vuex)

// 自动化导入
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store(
  {
  modules,
  getters,
  plugins: [createPersistedState({
    storage: window.sessionStorage,
    // 指定持久化的模块
    paths: ['user', 'permission']
  })]
})

export default store
