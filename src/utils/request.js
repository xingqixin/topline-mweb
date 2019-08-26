import axios from 'axios'
// 创建一个axios实例
const request = axios.create({
  // 登录的所有的请求路径都是以他开头的
  baseURL: 'http://ttapi.research.itcast.cn'
})

// 添加请求拦截器 axios中直接查找响应拦截器的代码
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么 如果响应对象中有data,则直接返回这个data数据
//   如果没有响应对象中没有data 则不作任何处理,直接返回原来的数据
  return response.data.data || response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
export default request
