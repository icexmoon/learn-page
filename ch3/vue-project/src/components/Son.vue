<script setup>
const props = defineProps({
    message: String,
    count: Number
})
console.log(props.message)
</script>
<template>
    <div>{{ message }}</div>
    <br/>
    <div>{{ count }}</div>
</template>