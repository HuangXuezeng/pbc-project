import fetch from '@/api/fetch'
import qs from 'qs'
//获取部门岗位信息
export function getPostList () {
    return fetch({
      url: `/biographical/visitor/department/selectCount2.htm?grade=2`,
      method: 'post',
      // data: qs.stringify(data)
    })
  }

  export function getPostLists (getDatas) {
    return fetch({
      url: `/biographical/visitor/position/select.htm`,
      method: 'post',
      data: qs.stringify(getDatas)
    })
  }

  //模糊查询获取部门信息
export function searchPostList (contentData) {
  return fetch({
    url: `/biographical/visitor/department/selectCount.htm`,
    method: 'post',
    data: qs.stringify(contentData)
  })
}
//根据工号登录获取我的简历
export function getResumeDetail (a0190) {
  return fetch({
    url: `/biographical/visitor/employee/selectdetail.htm?a0190=${a0190}`,
    method: 'post',
    // data: qs.stringify(data)
    })
  }
