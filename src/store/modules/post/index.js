import actions from './actions'
import getters from './getters'
import mutations from './mutations'
export default {
  namespaced: true,
  state: {
    canLoadMore: true,
    postsPerPage: 9,
    currentPage: 0,
    posts: {}
  },
  mutations,
  getters,
  actions
}
