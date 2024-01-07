<script setup>
import { ref, watch } from 'vue';
const computer = ref({
    num1: 0,
    num2: 0,
})
const sum = ref(computer.value.num1 + computer.value.num2)
const history = ref([])
watch(() => computer.value.num1, (newNum1, oldNum1) => {
    history.value.push({
        num1: oldNum1,
        num2: computer.value.num2,
        sum: oldNum1 + computer.value.num2
    })
    sum.value = newNum1 + computer.value.num2
})
</script>
<template>
    <li v-for="his in history">{{ his.num1 }}+{{ his.num2 }}={{ his.sum }}</li>
    <input type="number" v-model="computer.num1" style="width: 50px;" />+<input type="number" v-model="computer.num2"
        style="width: 50px;" />={{ sum }}
</template>