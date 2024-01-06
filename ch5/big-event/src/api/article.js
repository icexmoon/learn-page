import request from '@/utils/request.js'

export const getArticleCategoryList = () => {
    return request.get('/category');
}

export const addArticleCategoryService = (categoryData) => {
    return request.post('/category', categoryData)
}

export const updateArticleCategoryService = (categoryData) => {
    return request.put('/category', categoryData)
}

export const deleteArticleCategoryService = (id) => {
    return request.delete('/category?id=' + id)
}

export const getArticlesService = (params) => {
    return request.get('/article', { params: params })
}

export const addArticleService = (articleData) => {
    return request.post('/article', articleData)
}

export const updateArticleService = (articleData) => {
    return request.put('/article', articleData)
}

export const deleteArticleService = (id) => {
    return request.delete('/article?id=' + id)
}