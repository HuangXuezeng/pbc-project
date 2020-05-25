import fetch from '@/api/fetch'
import qs from 'qs'
//获取规则
export function getResult () {
return fetch({
    url: `/pbcTom/visitor/ruleInformation/select.htm`,
    method: 'post',
    // data: qs.stringify(data)
    })
}