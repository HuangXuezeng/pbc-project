import fetch from '@/api/fetch'
import qs from 'qs'
//根据工号获取我的绩效
export function getAchInfo (queryData) {
return fetch({
    url: `/pbcTom/visitor/a01/selectA831AndDiscussAppreciate.htm`,
    method: 'post',
    data: qs.stringify(queryData)
    })
}
//根据工号获取对应评论
export function getComment (queryData) {
return fetch({
    // url: `/biographical/visitor/discussAppreciate/select.htm?a0190=3322&typecode=1`,
    url: `/pbcTom/visitor/discussAppreciate/select.htm`,
    method: 'post',
    data: qs.stringify(queryData)
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