<script setup>
import {ref} from 'vue'
const msg = ref('Hello World!')
import Count from './Count2.vue'
</script>
<template>
    <h1>{{ msg }}</h1>
    <br/>
    <Count/>
</template>
<style>
h1 {
    color: aqua;
}
</style>