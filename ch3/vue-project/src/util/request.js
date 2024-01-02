import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:8080'
});
instance.interceptors.response.use(
    result => {
        return result.data
    },
    error => {
        console.log(error)
        return Promise.reject(error);
    }
)
export default instance