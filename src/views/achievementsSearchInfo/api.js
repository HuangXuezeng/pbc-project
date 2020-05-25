import fetch from '@/api/fetch'
import qs from 'qs'

//搜索人员
export function searchApart (queryData) {
    return fetch({
        url: `/pbcTom/visitor/a832/selectByPage2.htm`,
        method: 'post',
        data: qs.stringify(queryData)
        })
    }