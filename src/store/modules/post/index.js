import actions from './actions'
import getters from './getters'
import mutations from './mutations'
export default {
  namespaced: true,
  state: {
    postsPerPage: 10,
    currentPage: 1,
    posts: []
  },
  mutations,
  getters,
  actions
}
