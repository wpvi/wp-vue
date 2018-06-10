import api from '@/services/api'
import mutationType from './mutationTypes'
export default {
  fetchPosts ({ commit, state }) {
    return new Promise(async (resolve, reject) => {
      const nextPage = state.currentPage === 0 ? 1 : state.currentPage + 1
      const response = await api.getPosts({
        page: nextPage,
        number: state.postsPerPage
      })
      commit(mutationType.ADD_POSTS, response.data.posts)
      if (response.data.posts.length < state.postsPerPage) {
        commit(mutationType.SET_CAN_LOAD_MORE, false)
        resolve()
        return
      }
      commit(mutationType.SET_CURRENT_PAGE, state.currentPage + 1)
      resolve()
    })
  }
}
