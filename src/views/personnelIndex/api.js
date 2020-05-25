import fetch from '@/api/fetch'
import qs from 'qs'
//根据ID获取岗位详细信息
export function getPostIdList (content) {
    return fetch({
      url: `/biographical/visitor/position/select.htm?content=${content}`,
      method: 'post',
      data: qs.stringify(content)
    })
  }