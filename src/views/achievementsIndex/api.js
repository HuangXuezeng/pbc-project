import fetch from '@/api/fetch'
import qs from 'qs'
//获取绩效信息
//根据工号获取我的绩效
export function getAch (queryData) {
    return fetch({
        url: `/pbcTom/visitor/a01/selectSummary.htm`,
        method: 'post',
        data: qs.stringify(queryData)
    })
}
//获取人员
export function getPerson (queryData) {
return fetch({
    // url: `/biographical/visitor/a01/selectDepartAndPersonByperson.htm`,
    url: `/pbcTom/visitor/a01/selectDepartAndPersonByDepartCodeV2.htm`,
    method: 'post',
    data: qs.stringify(queryData)
    })
}
//获取部门
export function getApart (queryData) {
return fetch({
    url: `/pbcTom/visitor/a01/selectDepartAndPersonBypersonV3.htm`,
    method: 'post',
    data: qs.stringify(queryData)
    })
}
//搜索部门或人员
export function searchApart (queryData) {
return fetch({
    url: `/pbcTom/visitor/a01/selectDepartOrPersonByDepartNameOrperson.htm`,
    method: 'post',
    data: qs.stringify(queryData)
    })
}