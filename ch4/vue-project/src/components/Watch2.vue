<script setup>
import { ref, watch } from 'vue';
const num1 = ref(0)
const num2 = ref(0)
const sum = ref(num1.value + num2.value)
const history = ref([])
watch([num1, num2], ([newNum1, newNum2], [oldNum1, oldNum2]) => {
    history.value.push({
        num1: oldNum1,
        num2: oldNum2,
        sum: oldNum1 + oldNum2
    })
    sum.value = newNum1 + newNum2
})
</script>
<template>
    <li v-for="his in history">{{ his.num1 }}+{{ his.num2 }}={{ his.sum }}</li>
    <input type="number" v-model="num1" style="width: 50px;" />+<input type="number" v-model="num2" style="width: 50px;" />={{ sum }}
</template>