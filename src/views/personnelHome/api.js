import fetch from '@/api/fetch'
import qs from 'qs'
//根据工号登录获取我的简历
export function getResumeDetail (a0190) {
return fetch({
    url: `/biographical/visitor/employee/selectdetail.htm?a0190=${a0190}`,
    method: 'post',
    // data: qs.stringify(data)
    })
}
//自动登录获取我的简历
// export function getResumeDetails (postData) {
// return fetch({
//     url: `/biographical/visitor/getUser.htm`,
//     method: 'get',
//     data: qs.stringify(postData)
//     })
// }

