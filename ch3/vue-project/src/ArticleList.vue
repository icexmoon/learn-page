<script setup>
import { ref, onMounted } from 'vue'
import { getAllArticlesService, searchService } from '@/api/article.js'
// 创建表格对应的响应式数据
const articles = ref([])
// Vue 实例初始化后加载表格数据
onMounted(async () => {
    articles.value = await getAllArticlesService()
})
// 创建搜索条件对应的响应式数据
const conditions = ref({
    category: '',
    state: ''
})
// 定义搜索绑定事件
const search = async () => {
    articles.value = await searchService({ ...conditions.value })
} 
</script>
<template>
    <div>
        文章分类：<input type="text" v-model="conditions.category" />
        发布状态：<input type="text" v-model="conditions.state" />
        <button @click="search">搜索</button>
        <br />
        <br />
        <table border="1">
            <tr>
                <td>文章标题</td>
                <td>分类</td>
                <td>发表时间</td>
                <td>状态</td>
                <td>操作</td>
            </tr>
            <tr v-for="article in articles">
                <td>{{ article.title }}</td>
                <td>{{ article.category }}</td>
                <td>{{ article.time }}</td>
                <td>{{ article.state }}</td>
                <td>
                    <button>编辑</button>
                    <button>删除</button>
                </td>
            </tr>
        </table>
    </div>
</template>