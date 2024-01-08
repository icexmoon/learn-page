<script setup>
import { inject } from 'vue';

const topMsg = inject('top-msg')
const topCount = inject('top-count')
const topIncrease = inject('top-increase')
</script>
<template>
    {{ topMsg }}
    <br/>
    {{ topCount }}
    <br/>
    <button @click="topIncrease">increase</button>
</template>