import { defineStore } from 'pinia'
import { ref } from 'vue'

// pinia 中的 token 定义
export const useTokenStore = defineStore('token', () => {
    const token = ref('')
    const updateToken = (newTokenVal) => {
        token.value = newTokenVal
    }
    const removeToken = () => {
        token.value = ''
    }
    return { token, updateToken, removeToken }
}, { persist: true })