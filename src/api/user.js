/*
**用户请求模块相关
*/
import request from '../utils/request'

export const login = data => {
  return request({
    url: '/app/v1_0/authorizations',
    method: 'POST',
    data
  })
}
