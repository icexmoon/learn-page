<script setup>
import Son2Vue from './Son2.vue';
const getMessage = (msg) => {
    console.log("Get message from son: " + msg)
}
</script>
<template>
    <div id="app">
        <Son2Vue @get-message="getMessage"></Son2Vue>
    </div>
</template>