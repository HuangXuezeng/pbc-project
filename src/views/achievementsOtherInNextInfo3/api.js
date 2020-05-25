import fetch from '@/api/fetch'
import qs from 'qs'
//根据部门code获取关系人信息
export function getPerson (queryData) {
return fetch({
    url: `/pbcTom/visitor/a01/selectDepartAndPersonByDepartCode.htm`,
    method: 'post',
    data: qs.stringify(queryData)
    })
}