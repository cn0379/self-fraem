import axios from 'axios'
import store from '@/store'
import router from '@/router'

import {
    message
} from 'ant-design-vue'

const SUCCESS = 'success'
const ERROR = 'error'
const LOAD = 'loading'
const ONLY_KEY = 'only_key'
const MSG_FUNC = (type = SUCCESS, content) => {
    message[type]({
        content,
        key: ONLY_KEY
    })
}


//请求统一前缀 (开发时跨域前缀 生产时为真实地址)
axios.defaults.baseURL = process.env.VUE_APP_BASE_API

// 请求拦截器
axios.interceptors.request.use(config => {
    return config;
}, err => {
    return Promise.reject(err);
});

// 响应拦截器
axios.interceptors.response.use(res => {
    const { data } = res
    if(data.resultCode === 401){
        MSG_FUNC(ERROR, 'token超时，请重新登陆!')
        router.replace('/login')
        //清除用户信息、状态信息
        store.dispatch('user/logout')
        store.dispatch('app/clearAppState')
    }
    return res;
}, err => {
    const statusCode = err.response.status
    if (statusCode) {
        switch (statusCode) {
            case 403:
                MSG_FUNC(ERROR, '权限不足!')
                break;
            case 404:
                MSG_FUNC(ERROR, '请求不存在!')
                break;
            case 500:
                MSG_FUNC(ERROR, '服务器错误!')
                break;
        }
    }
    return Promise.reject(err);
});

//请求函数
const fetch = ({
    url,
    method = 'GET',
    data = {},
    headers = {},
    token = true,
    loading = false
} = {}) => {

    if (!url) return MSG_FUNC(ERROR, '缺少请求路径!')
    loading && MSG_FUNC(LOAD, '数据加载中...')
    const options = {
        url,
        method,
        data,
        headers
    }
    if (method.toUpperCase() === 'GET') {
        options['params'] = data
        delete options['data']
    }

    if (token) headers['Authorization'] = store.getters.token

    return new Promise((resolve, reject) => {
        axios(options).then(res => {
            loading && MSG_FUNC(SUCCESS, '数据加载完成')
            resolve(res.data)
        }).catch(err => {
            loading && MSG_FUNC(ERROR, '数据加载失败')
            reject(err)
        })
    })
}

export default fetch