import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 创建基础实例
const service = axios.create({
    baseURL: '/api',   // 为每个请求添加上 /api 前缀
    timeout: 10000,  // 超时时间 10秒
})

service.interceptors.request.use((config) => {
    nprogress.start()
    return config;
})

service.interceptors.response.use((response) => {
    nprogress.done()
    return response.data;
}, (error) => {
    nprogress.done()
    return Promise.reject(error)
})

export default service