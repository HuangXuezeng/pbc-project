import fetch from '@/api/fetch'
import qs from 'qs'
//根据ID获取岗位详细信息
export function getPostIdList (positionDetail) {
    return fetch({
      url: `/biographical/visitor/position/selectOne.htm`,
      method: 'post',
      data: qs.stringify(positionDetail)
    })
  }
//申请岗位
export function resumeDetail (PositionEmployeeRelation) {
    return fetch({
      url: `/biographical/visitor/position/employee/relation/add.htm`,
      method: 'post',
      data: qs.stringify(PositionEmployeeRelation)
    })
  }
//申请岗位
export function pushDingText (gongData) {
    return fetch({
      url: `/biographical/visitor/workBydepartmentName2.htm`,
      method: 'post',
      data: qs.stringify(gongData)
    })
  }
//咨询对应部门的hr
export function queryHr (queryData) {
  return fetch({
      url: `/biographical/visitor/selectList.htm`,
      method: 'post',
      data: qs.stringify(queryData)
      })
  }