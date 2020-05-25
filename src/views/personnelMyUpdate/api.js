import fetch from '@/api/fetch'
import qs from 'qs'
//根据身份证登录获取我的简历
export function getResumeDetail (a0190) {
return fetch({
    url: `/biographical/visitor/employee/selectdetail.htm?a0190=${a0190}`,
    method: 'post',
    // data: qs.stringify(data)
    })
}