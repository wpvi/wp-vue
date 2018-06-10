<template>
  <div class="home">
    <SectionIntroduction/>
    <LoadingSpinner
      :class="$style.loadingSpinner"
      v-if="ui.isFirstLoading"/>
    <template v-else>
      <PostList
        :class="$style.postList"
        :posts="posts"/>
      <div
        :class="$style.loadMoreContainer"
        v-if="canLoadMore">
      <span
        v-if="ui.isLoadingMore"
        :class="$style.loadMore">Loading...</span>
        <a
          v-else
          :class="$style.loadMore"
          href="#"
          @click.prevent="loadNextPage">Load More</a>
      </div>
    </template>
  </div>
</template>

<script>
import PostList from './../components/PostList'
import LoadingSpinner from './../components/shared/LoadingSpinner'
import SectionIntroduction from './../components/SectionIntroduction'
import config from './../utils/config'
import {
  mapActions,
  mapGetters
} from 'vuex'
export default {
  name: 'home',
  components: {
    PostList,
    LoadingSpinner,
    SectionIntroduction
  },
  beforeRouteEnter (to, from, next) {
    document.title = `${config.siteInfo.name} - ${config.siteInfo.description}`
    next()
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
.loadingSpinner
  margin-top 30px
.loadMoreContainer
  text-align center
  margin-top 50px
.loadMore
  text-decoration none
.postList
  margin-top 50px
</style>
