/*
 * @Author: your name
 * @Date: 2020-10-16 22:53:25
 * @LastEditTime: 2020-11-29 16:29:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \self_fraem\src\filters\index.js
 */
// 示例
export const formatDateStr = (str) => {
  if (!str) return ''
  if (str.length === 8) return `${str.substr(0, 4)}-${str.substr(4, 2)}-${str.substr(6, 2)}`
  if (str.length === 12) return `${str.substr(0, 4)}-${str.substr(4, 2)}-${str.substr(6, 2)} ${str.substr(8, 2)}:${str.substr(10, 2)}`
  if (str.length === 14) return `${str.substr(0, 4)}-${str.substr(4, 2)}-${str.substr(6, 2)} ${str.substr(8, 2)}:${str.substr(10, 2)}:${str.substr(12, 2)}`
  return str
}
