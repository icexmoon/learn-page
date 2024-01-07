<script setup>
import { ref, computed } from 'vue';
const num1 = ref(0)
const num2 = ref(0)
const sum = computed(() => {
    return num1.value + num2.value
})
</script>
<template>
    <input type="number" v-model="num1" style="width: 50px;"/>+<input type="number" v-model="num2" style="width: 50px;"/>={{ sum }}
</template>