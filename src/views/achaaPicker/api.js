import fetch from '@/api/fetch'
import qs from 'qs'

//获取目录部门
export function getDepart (queryData) {
    return fetch({
        url: `/pbcTom/visitor/a01/selectDepartAndPersonByDepartCode.htm`,
        method: 'post',
        data: qs.stringify(queryData)
        })
}

//根据部门code获取人员
export function getPerson (queryData) {
    return fetch({
        url: `/pbcTom/visitor/a01/selectDepartAndPersonByDepartCode.htm`,
        method: 'post',
        data: qs.stringify(queryData)
        })
}
//根据部门code获取人员
export function getPeople (queryData) {
    return fetch({
        url: `/pbcTom/visitor/a01/selectDepartAndPersonByDepartCodeV2.htm`,
        method: 'post',
        data: qs.stringify(queryData)
        })
}
//保存选取的人
export function savePeople (queryData) {
    return fetch({
        url: `/pbcTom/visitor/userShareShield/adds.htm`,
        method: 'post',
        // header:('Content-Type' : 'application/json;charset=UTF-8'),
        headers:{"content-type":"application/json;charset=UTF-8"},
        data: JSON.stringify(queryData)
        })
}
//获取分享/屏蔽的人
export function getPeopleList (queryData) {
    return fetch({
        url: `/pbcTom/visitor/userShareShield/selectList.htm`,
        method: 'post',
        data: qs.stringify(queryData)
    })
}
//删除分享/屏蔽的人
export function deletePeople (queryData) {
    return fetch({
        url: `/pbcTom/visitor/userShareShield/delete.htm`,
        method: 'post',
        data: qs.stringify(queryData)
    })
}