<script setup>
import SonVue from './Son.vue';
import { ref } from 'vue';
const count = ref(0)
const doCount = () => {
    setTimeout(() => {
        if (count.value >= 20) {
            return
        }
        count.value++
        doCount()
    }, 1000)
}
doCount()
</script>
<template>
    <div id="app">
        <SonVue :count="count" message="Hello World!" />
    </div>
</template>