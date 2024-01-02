<script>
export default {
    data() { //定义响应式数据
        return {
            num: 0
        }
    },
    methods: { // 定义 Vue 方法
        count() {
            this.num++;
        }
    },
    mounted(){ // 定义钩子函数
        console.log("Vue 实例已加载...")
    }
}
</script>
<template>
    <button @click="count">count:{{ num }}</button>
</template>