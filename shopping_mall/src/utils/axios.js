import axios from "axios";
// 设置axios基础路径
const request= axios.create({
    // API 请求的默认前缀
    baseURL: 'http://47.98.128.191:8002',
    retry: 1, //重新请求次数
    retryDelay: 1000, //重新请求的间隔
    timeout: 1000*60*300,
})
//请求拦截器
//响应拦截器
request.interceptors.response.use(res=>{
    // 处理后端返回的数据
    return res.data
})
export default request