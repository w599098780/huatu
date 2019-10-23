
import axios from 'axios'
import qs from 'qs'
//axios.defaults.baseURL = 'http://h5.mysuperlink.cn/'
//请求拦截器
axios.interceptors.request.use(config => {
  // if (localStorage.access_token) {
  //     config.headers.Authorization = 'Bearer ' + localStorage.access_token;
  // }
  if (localStorage.getItem('token')) {
    if (config.url.indexOf('?') != -1) config.url += '&token=' + localStorage.getItem('token')
     else  config.url += '?token=' + localStorage.getItem('token')
  }

  return config
}, err => Promise.reject(err))

//响应拦截器
axios.interceptors.response.use(
  response => response.data,
  err => Promise.reject(err)
)


//封装get请求
export const $fetch = async (url, params = {}) => await axios.get(url, {
  params: qs.stringify(params)
})


//封装post 请求
export const $post = async (url, data = {}) => await axios.post(url, qs.stringify(data))

//封装put 请求
export const $put = async (url, data = {}) => await axios.put(url, qs.stringify(data))

//封装delete 请求
export const $del = async (url, params = {}) => await axios.delete(url, {
  data: qs.stringify(params)
})


//请求参照次模版
//this.$fetch(url,data).then(res=>{})
