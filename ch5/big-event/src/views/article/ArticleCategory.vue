<script setup>
import {
    Edit,
    Delete
} from '@element-plus/icons-vue'
import { ref } from 'vue'
const categorys = ref([
    {
        "id": 3,
        "categoryName": "美食",
        "categoryAlias": "my",
        "createTime": "2023-09-02 12:06:59",
        "updateTime": "2023-09-02 12:06:59"
    },
    {
        "id": 4,
        "categoryName": "娱乐",
        "categoryAlias": "yl",
        "createTime": "2023-09-02 12:08:16",
        "updateTime": "2023-09-02 12:08:16"
    },
    {
        "id": 5,
        "categoryName": "军事",
        "categoryAlias": "js",
        "createTime": "2023-09-02 12:08:33",
        "updateTime": "2023-09-02 12:08:33"
    }
])
import { getArticleCategoryList, addArticleCategoryService, updateArticleCategoryService, deleteArticleCategoryService } from '@/api/article.js'
const loadArticleCategoryList = async () => {
    let result = await getArticleCategoryList()
    categorys.value = result.data
}
loadArticleCategoryList()

//控制添加分类弹窗
const dialogVisible = ref(false)

//添加分类数据模型
const categoryModel = ref({
    categoryName: '',
    categoryAlias: ''
})
//添加分类表单校验
const rules = {
    categoryName: [
        { required: true, message: '请输入分类名称', trigger: 'blur' },
    ],
    categoryAlias: [
        { required: true, message: '请输入分类别名', trigger: 'blur' },
    ]
}
// 添加文章分类
import { ElMessage, ElMessageBox } from 'element-plus'
const addArticleCategory = async () => {
    let result = await addArticleCategoryService(categoryModel.value)
    // 添加成功后显示提示信息
    ElMessage.success(result.message ? result.message : '添加成功！')
    // 刷新列表信息
    loadArticleCategoryList()
    // 隐藏弹窗
    dialogVisible.value = false
}
const dialogTitle = ref('')
// 显示添加分类弹窗
const showAddDialog = () => {
    dialogTitle.value = '添加分类'
    // 清空数据模型
    categoryModel.value.categoryName = ''
    categoryModel.value.categoryAlias = ''
    // 显示弹窗
    dialogVisible.value = true
}

// 显示编辑分类弹窗
const showEditDialog = (row) => {
    dialogTitle.value = '编辑分类'
    // 加载已有信息
    categoryModel.value.categoryName = row.categoryName
    categoryModel.value.categoryAlias = row.categoryAlias
    categoryModel.value.id = row.id
    dialogVisible.value = true
}
// 编辑分类
const updateArticleCategory = async () => {
    let result = await updateArticleCategoryService(categoryModel.value)
    ElMessage.success(result.message ? result.message : '编辑成功！')
    // 更新分类信息
    loadArticleCategoryList()
    // 隐藏弹窗
    dialogVisible.value = false
}

const dialogConfirmBtnClick = () => {
    if (dialogTitle.value === '添加分类') {
        // 添加分类
        addArticleCategory()
    }
    else {
        // 编辑分类
        updateArticleCategory()
    }
}
// 删除文章分类按钮点击事件
const btnDeleteClick = (row) => {
    // 弹出确认框
    ElMessageBox.confirm(
        '确定是否要删除该文章分类？',
        '提示',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(async () => {
            // 执行删除操作
            await deleteArticleCategoryService(row.id)
            // 重新加载列表页
            loadArticleCategoryList()
            ElMessage({
                type: 'success',
                message: '成功删除',
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '取消删除',
            })
        })
}
</script>
<template>
    <el-card class="page-container">
        <template #header>
            <div class="header">
                <span>文章分类</span>
                <div class="extra">
                    <el-button type="primary" @click="showAddDialog">添加分类</el-button>
                </div>
            </div>
        </template>
        <el-table :data="categorys" style="width: 100%">
            <el-table-column label="序号" width="100" type="index"> </el-table-column>
            <el-table-column label="分类名称" prop="categoryName"></el-table-column>
            <el-table-column label="分类别名" prop="categoryAlias"></el-table-column>
            <el-table-column label="操作" width="100">
                <template #default="{ row }">
                    <el-button :icon="Edit" circle plain type="primary" @click="showEditDialog(row)"></el-button>
                    <el-button :icon="Delete" circle plain type="danger" @click="btnDeleteClick(row)"></el-button>
                </template>
            </el-table-column>
            <template #empty>
                <el-empty description="没有数据" />
            </template>
        </el-table>
    </el-card>
    <!-- 添加分类弹窗 -->
    <el-dialog v-model="dialogVisible" :title="dialogTitle" width="30%">
        <el-form :model="categoryModel" :rules="rules" label-width="100px" style="padding-right: 30px">
            <el-form-item label="分类名称" prop="categoryName">
                <el-input v-model="categoryModel.categoryName" minlength="1" maxlength="10"></el-input>
            </el-form-item>
            <el-form-item label="分类别名" prop="categoryAlias">
                <el-input v-model="categoryModel.categoryAlias" minlength="1" maxlength="15"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogConfirmBtnClick"> 确认 </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<style lang="scss" scoped>
.page-container {
    min-height: 100%;
    box-sizing: border-box;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>