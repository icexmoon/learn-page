import { defineStore } from 'pinia'
import { ref } from 'vue'

// pinia 中的 userInfo 定义
export const useUserInfoStore = defineStore('userInfo', () => {
    const userInfo = ref('')
    const updateUserInfo = (newUserInfo) => {
        userInfo.value = newUserInfo
    }
    const removeUserInfo = () => {
        userInfo.value = {}
    }
    return { userInfo, updateUserInfo, removeUserInfo }
}, { persist: true })