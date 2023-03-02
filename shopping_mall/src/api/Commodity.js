import request from "../utils/axios"
export const findCategroy=(param)=>{
    return request({
        url: 'categroy/findCategroy',
        method: 'get',
        params: param,
      })
}
export const addCategroy=(param)=>{
    return request({
        url: 'categroy/addCategroy',
        method: 'post',
        data: param,
      })
}