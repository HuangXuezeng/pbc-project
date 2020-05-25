const mutations = {
  save_userId (state, userId,userName) {
    state.userId = userId
    state.userName = userName    
  },
  save_userName (state, name) {
    state.name = name    
  },
  save_corpId (state,corpId) {
    state.corpId = corpId
  },
  save_agentid (state,agentid) {
    state.agentid = agentid
  },
  getemployeeId (state,employeeId) {
    state.employeeId = employeeId
    localStorage.setItem('employeeIds',state.employeeId)
  },
  getpositionIds (state,positionIds) {
    state.positionIds = positionIds
  }
}

export default mutations