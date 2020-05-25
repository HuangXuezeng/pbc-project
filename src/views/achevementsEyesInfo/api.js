import fetch from '@/api/fetch'
import qs from 'qs'

//根据部门code获取人员
export function getPerson (queryData) {
    return fetch({
        url: `/pbcTom/visitor/a01/selectDepartAndPersonByDepartCode.htm`,
        method: 'post',
        data: qs.stringify(queryData)
        })
}