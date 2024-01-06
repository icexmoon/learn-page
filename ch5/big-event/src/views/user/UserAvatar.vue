<script setup>
import { Plus, Upload } from '@element-plus/icons-vue'
import { ref } from 'vue'
import avatar from '@/assets/default.png'
const uploadRef = ref()

//用户头像地址
let imgUrl = avatar
const uploadSuccess = (result) => {
    imgUrl = 'https://p.qqan.com/up/2020-12/16070652276806379.jpg'
}
import { useTokenStore } from '@/store/token.js'
const tokenStore = useTokenStore()
import { updateUserAvatarService } from '@/api/user.js'
import { ElMessage } from 'element-plus'
import { useUserInfoStore } from "@/store/userInfo.js";
const userInfoStore = useUserInfoStore()
// 从用户信息加载头像
const loadAvatar = ()=>{
    imgUrl = userInfoStore.userInfo.userPic
}
loadAvatar()
const updateAvatar = async () => {
    let result = await updateUserAvatarService(imgUrl)
    //更新成功后更新存储库中的头像
    userInfoStore.userInfo.userPic = imgUrl
    ElMessage.success(result.msg ? result.msg : '更新成功')
}
</script>
<template>
    <el-card class="page-container">
        <template #header>
            <div class="header">
                <span>更换头像</span>
            </div>
        </template>
        <el-row>
            <el-col :span="12">
                <el-upload ref="uploadRef" class="avatar-uploader" :show-file-list="false" :auto-upload="true"
                    action="/api/upload" name="file" :headers="{ 'Authorization': tokenStore.token }"
                    :on-success="uploadSuccess">
                    <img v-if="imgUrl" :src="imgUrl" class="avatar" />
                    <img v-else :src="avatar" width="278" />
                </el-upload>
                <br />
                <el-button type="primary" :icon="Plus" size="large" @click="uploadRef.$el.querySelector('input').click()">
                    选择图片
                </el-button>
                <el-button type="success" :icon="Upload" size="large" @click="updateAvatar">
                    上传头像
                </el-button>
            </el-col>
        </el-row>
    </el-card>
</template>