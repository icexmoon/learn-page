<script setup>
const message = 'Hello World!'
const logMessage = () => {
    console.log(message)
}
defineExpose({
    message,
    logMessage
})
</script>
<template></template>