import fetch from '@/api/fetch'
import qs from 'qs'

//获取目录部门
export function getDepart (queryData) {
    return fetch({
        url: `/pbcTom/visitor/a01/selectDepartAndPersonBypersonV4.htm`,
        method: 'post',
        data: qs.stringify(queryData)
        })
}