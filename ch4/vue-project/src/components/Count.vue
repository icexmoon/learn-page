<!-- <script setup>
let count = 0
const increase = () => {
    count++
}
</script>
<template>
    <button @click="increase">{{ count }}</button>
</template> -->
<!-- <script setup>
import {reactive} from 'vue'
const counter = reactive({
    num: 0
})
const increase = ()=>{
    counter.num++
}
</script>
<template>
    <button @click="increase">{{ counter.num }}</button>
</template> -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
const increase = () => {
    count.value++
}
</script>
<template>
    <button @click="increase">{{ count }}</button>
</template>