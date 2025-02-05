import axios from 'axios'

// 创建基础实例
const mockRequest = axios.create({
    baseURL: '/mock',
    timeout: 5000,
})

mockRequest.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    return Promise.reject(error)
})

export default mockRequest