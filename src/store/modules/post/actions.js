import api from '@/services/api'
import mutationType from './mutationTypes'
export default {
  fetchPosts ({ commit, state }) {
    return new Promise(async (resolve, reject) => {
      if (state.currentPage > 1) {
        commit(mutationType.SET_CURRENT_PAGE, state.currentPage + 1)
      }
      const response = await api.getPosts({
        page: state.currentPage
      })
      commit(mutationType.ADD_POSTS, response.data.posts)
      resolve()
    })
  }
}
