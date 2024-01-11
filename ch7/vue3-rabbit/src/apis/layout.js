import http from "../utils/http";

export const getCategorysService =  ()=>{
    return http.get('/home/category/head')
}