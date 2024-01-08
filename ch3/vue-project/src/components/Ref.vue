<script setup>
import { onMounted, ref } from 'vue';
// 定义 Ref 对象
const h1Ref = ref(null)
// 在组件挂载后使用 Ref 对象
onMounted(()=>{
    console.log(h1Ref.value)
})
</script>
<template>
    <!-- 绑定 Ref 对象 -->
    <h1 ref="h1Ref">Hello World!</h1>
</template>