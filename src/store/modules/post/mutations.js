import mutationTypes from './mutationTypes'
export default {
  [mutationTypes.SET_CURRENT_PAGE] (state, page) {
    state.currentPage = page
  },
  [mutationTypes.ADD_POSTS] (state, posts) {
    state.posts = posts
  }
}
