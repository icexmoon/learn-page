//定制请求的实例

//导入axios  npm install axios
import axios from 'axios';
//定义一个变量,记录公共的前缀  ,  baseURL
// const baseURL = 'http://localhost:8080';
const baseURL = '/api'
const instance = axios.create({ baseURL })

//添加响应拦截器
import { ElMessage } from 'element-plus'
import router from '@/router'
instance.interceptors.response.use(
    result => {
        if (result.data.code === 0) {
            // 接口业务调用成功
            return result.data;
        }
        // 接口业务失败
        let errorMsg = result.data.message ? result.data.message : "业务接口调用出错"
        ElMessage.error(errorMsg)
        return Promise.reject(result)
    },
    err => {
        if (err.response.status === 401){
            //未登录，跳转到登录页
            ElMessage.error("请登录")
            router.push('/login')
        }
        else{
            ElMessage.error('服务异常')
        }
        return Promise.reject(err);//异步的状态转化成失败的状态
    }
)
// 添加请求拦截器，对所有请求都传递 token 作为头信息
import { useTokenStore } from '@/store/token.js'
instance.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        const tokenStore = useTokenStore()
        if (tokenStore.token) {
            config.headers.Authorization = tokenStore.token
        }
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);


export default instance;