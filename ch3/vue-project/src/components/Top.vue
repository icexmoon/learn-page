<script setup>
import { provide, ref } from 'vue';
import MiddleVue from './Middle.vue';
provide('top-msg', 'Hello World!')
const count = ref(0)
provide('top-count', count)
setTimeout(() => {
    count.value = 100
}, 3000)
const increase = () => {
    count.value++
}
provide('top-increase', increase)
</script>
<template>
    <MiddleVue></MiddleVue>
</template>