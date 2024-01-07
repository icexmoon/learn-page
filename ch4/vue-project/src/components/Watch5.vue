<script setup>
import { ref, watch } from 'vue'
const count = ref(0)
const increase = () => {
    count.value++
}
watch(count, (newVal, oldVal) => {
    console.log("count发生改变，newVal：" + newVal + " oldVal：" + oldVal)
}, { immediate: true })
</script>
<template>
    <button @click="increase">{{ count }}</button>
</template>