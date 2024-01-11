import http from '@/utils/http'

export const getCategoryService = () => {
    return http.get('home/category/head')
}