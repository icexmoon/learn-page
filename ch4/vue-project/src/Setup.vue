<!-- <script>
export default {
    setup() {
        const message = 'Hello World!'
        const logMessage = () => {
            console.log(message)
        }
        return { message, logMessage }
    }
} -->
<!-- </script> -->
<!-- <script setup>
const message = 'Hello World!'
const logMessage = () => {
    console.log(message)
}
</script>
<template>
    {{ message }}
    <button @click="logMessage">log message</button>
</template> -->
<script>
export default {
    setup() {
        console.log('setup()')
    },
    beforeCreate() {
        console.log('beforeCreate()')
    }
}
</script>