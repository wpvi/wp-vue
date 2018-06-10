<template>
  <div class="home">
    <LoadingSpinner v-if="ui.isFirstLoading"/>
    <PostList
      v-else
      :posts="posts"
    />
    <div
      :class="$style.loadMoreContainer"
      v-if="canLoadMore && !ui.isFirstLoading"
    >
      <span
        v-if="ui.isLoadingMore"
        :class="$style.loadMore">Loading...</span>
      <a
        v-else
        :class="$style.loadMore"
        href="#"
        @click.prevent="loadNextPage">Load More</a>
    </div>
  </div>
</template>

<script>
import PostList from './../components/PostList'
import LoadingSpinner from './../components/shared/LoadingSpinner'
import {
  mapActions,
  mapGetters
} from 'vuex'
export default {
  name: 'home',
  components: {
    PostList,
    LoadingSpinner
  },
  data () {
    return {
      ui: {
        isFirstLoading: false,
        isLoadingMore: false
      }
    }
  },
  computed: {
    ...mapGetters({
      posts: 'post/posts',
      canLoadMore: 'post/canLoadMore'
    })
  },
  methods: {
    ...mapActions({
      fetchPosts: 'post/fetchPosts'
    }),
    async loadNextPage () {
      this.ui.isLoadingMore = true
      await this.fetchPosts()
      this.ui.isLoadingMore = false
    }
  },
  async created () {
    this.ui.isFirstLoading = true
    await this.fetchPosts()
    this.ui.isFirstLoading = false
  }
}
</script>

<style lang="stylus" module>
.loadMoreContainer
  text-align center
  margin-top 50px
.loadMore
  text-decoration none
</style>
