import request from '@/utils/request.js'

export const registService = (registData) => {
    return request.post("/user/register", registData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    // var params = new URLSearchParams()
    // for(let key in registData){
    //     params.append(key, registData[key])
    // }
    // return request.post("/user/register", params)
}

export const loginService = (loginData) => {
    return request.post("/user/login", loginData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

// 获取个人信息
export const getUserInfoService = () => {
    return request.get('/user/userInfo')
}

// 修改个人信息
export const updateUserInfoService = (userInfoData) => {
    return request.put('/user/update', userInfoData)
}

// 更新用户头像
export const updateUserAvatarService = (avatarUrl) => {
    return request.patch('/user/updateAvatar?avatarUrl=' + avatarUrl)
}