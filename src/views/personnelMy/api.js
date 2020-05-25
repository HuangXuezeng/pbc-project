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
//根据手机号登录获取我的简历
export function getResumeDetails (a01274) {
return fetch({
    url: `/biographical/visitor/employee/selectdetail.htm?a01274=${a01274}`,
    method: 'post',
    // data: qs.stringify(data)
    })
}