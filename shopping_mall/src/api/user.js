import request from "../utils/axios"
export const login=(param)=>{
    return request({
        url: 'users/login',
        method: 'post',
        data: param,
      })
}
export const getAccountList=(param)=>{
    return request({
        url: 'users/getAccountList',
        method: 'post',
        data: param,
      })
}