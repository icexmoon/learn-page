import request from '@/util/request.js'

export function getAllArticlesService() {
    return request.get("/article/getAll")
}

export function searchService(conditions) {
    return request.get("/article/search", { params: conditions })
}