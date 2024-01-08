<script setup>
const emits = defineEmits(['get-message'])
const sendMessage = () => {
    emits('get-message', 'Hello World!')
}
</script>
<template>
    <button @click="sendMessage">send message to father</button>
</template>