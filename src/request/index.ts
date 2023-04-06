import axios from 'axios'

// 创建axios实例
const instance = axios.create({
  // 基本请求路径的抽取
  baseURL: 'http://xue.cnkdl.cn:23683',
  // 每次请求的过期时间
  timeout: 20000
})

// 请求拦截器
instance.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

// 响应器拦截
instance.interceptors.response.use(res => {
  return res.data
}, err => {
  return Promise.reject(err)
})

export default instance