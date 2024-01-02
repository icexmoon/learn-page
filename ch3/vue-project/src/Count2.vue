<script setup>
import { ref, onMounted } from 'vue'
// 定义响应式数据
const num = ref(0)
// 定义 Vue 方法
function count() {
    num.value++;
}
// 定义钩子函数
onMounted(() => {
    console.log("Vue 实例已加载...")
})
</script>
<template>
    <button @click="count">count:{{ num }}</button>
</template>