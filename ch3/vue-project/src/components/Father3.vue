<script setup>
import { onMounted, ref } from 'vue';
import Son3Vue from './Son3.vue';
const sonRef = ref(null)
onMounted(() => {
    console.log(sonRef.value)
    sonRef.value.logMessage()
})
</script>
<template>
    <Son3Vue ref="sonRef" />
</template>