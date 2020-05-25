import fetch from '@/api/fetch'
import qs from 'qs'

//根据部门code获取关系人信息
export function getNew (queryData) {
    return fetch({
        // url: `/biographical/visitor/a01/selectNew.htm`,
        url: `/pbcTom/visitor/a832/select.htm`,
        method: 'post',
        data: qs.stringify(queryData)
        })
    }
//根据工号获取对应评论
export function getComment (a0190,typecode) {
return fetch({
    url: `/pbcTom/visitor/discussAppreciate/select.htm`,
    method: 'post',
    // data: qs.stringify(data)
    })
}
//写评论he点赞
export function addComment (queryData) {
    return fetch({
        url: `/pbcTom/visitor/discussAppreciate/add.htm`,
        method: 'post',
        data: qs.stringify(queryData)
        })
    }
//取消点赞
export function deleteComment (queryData) {
return fetch({
    url: `/pbcTom/visitor/discussAppreciate/delete.htm`,
    method: 'post',
    data: qs.stringify(queryData)
    })
}
//发送流程信息（修改）
export function updateMessage (queryData) {
return fetch({
    url: `/pbcTom/visitor/a832/setFlowData.htm`,
    method: 'post',
    data: qs.stringify(queryData)
    })
}
//上传头像
export function uploadPhoto (queryData) {
    // debugger
return fetch({
    url: `/pbcTom/visitor/pbc/imageUpload.htm`,
    headers:{"content-type":"multipart/form-data"},
    method: 'post',
    data: qs.stringify(queryData)
    })
}