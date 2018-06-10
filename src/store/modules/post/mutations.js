import mutationTypes from './mutationTypes'
import _foreach from 'lodash/forEach'
import vue from 'vue'
export default {
  [mutationTypes.SET_CURRENT_PAGE] (state, page) {
    state.currentPage = page
  },
  [mutationTypes.ADD_POSTS] (state, posts) {
    _foreach(posts, post => {
      vue.set(state.posts, post.slug, post)
    })
  },
  [mutationTypes.SET_CAN_LOAD_MORE] (state, canLoadMore) {
    state.canLoadMore = canLoadMore
  }
}
