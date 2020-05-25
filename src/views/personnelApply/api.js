import fetch from '@/api/fetch'
import qs from 'qs'
//获取申请记录
export function getPositionApply (employeeId) {
return fetch({
    url: `/biographical/visitor/position/employee/relation/selectList.htm?employeeId=${employeeId}`,
    method: 'post',
    data: qs.stringify(employeeId)
    })
}