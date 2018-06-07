<template>
  <div class="home">
    <LoadingSpinner v-if="ui.isLoading"/>
    <PostList
      v-else
      :posts="posts"
    />
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
        isLoading: false
      }
    }
  },
  computed: {
    ...mapGetters({
      posts: 'post/posts'
    })
  },
  methods: {
    ...mapActions({
      fetchPosts: 'post/fetchPosts'
    })
  },
  async created () {
    this.ui.isLoading = true
    await this.fetchPosts()
    this.ui.isLoading = false
  }
}
</script>
