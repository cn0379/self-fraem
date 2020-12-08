/*
 * @Author: your name
 * @Date: 2020-11-29 15:58:54
 * @LastEditTime: 2020-11-29 21:37:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \self_fraem\src\api\user.js
 */
import fetch from '@/utils/http'

export const login = (username, password, rememberMe) => {
  return fetch({
    url: 'auth/login',
    method: 'POST',
    data: {
      username,
      password,
      rememberMe
    },
    token: false,
    loading: false
  })
}

export const getInfo = () => {
  return fetch({
    url: 'auth/user',
    loading: false
  })
}