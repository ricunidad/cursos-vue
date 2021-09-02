import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

const myCustomModule = {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}

export default myCustomModule