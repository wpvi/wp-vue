<template>
  <div :class="$style.single">
    <LoadingSpinner v-if="post.ID < 0"/>
    <template v-else>
      <a :class="$style.back" href="#" @click.prevent="$router.back()">&leftarrow; Back</a>
      <PostSingleContent
        :class="$style.content"
        :post="post"/>
      <a :class="$style.back" href="#" @click.prevent="$router.back()">&leftarrow; Back</a>
    </template>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import postStuff from './../stuffs/post'
import api from './../services/api'
import LoadingSpinner from './../components/shared/LoadingSpinner'
import PostSingleContent from './../components/PostSingleContent'
export default {
  name: 'Single',
  props: {
    slug: {
      type: String,
      default: ''
    }
  },
  components: {
    LoadingSpinner,
    PostSingleContent
  },
  data () {
    return {
      post: postStuff
    }
  },
  computed: {
    ...mapGetters({
      posts: 'post/posts'
    })
  },
  beforeRouteEnter (to, from, next) {
    next(vm => vm.fetchPost())
  },
  methods: {
    async fetchPost () {
      if (this.posts.hasOwnProperty(this.slug)) {
        this.post = this.posts[this.slug]
      } else {
        const response = await api.getPostBySlug(this.slug)
        this.post = response.data
      }
      document.title = this.post.title
    }
  }
}
</script>

<style lang="stylus" module>
.single
  max-width 700px
  margin-left auto
  margin-right auto
.content
  margin-top 20px
  +media-breakpoint-down(sm)
    margin-top 0
.back
  text-decoration none
  text-transform uppercase
  +media-breakpoint-down(sm)
    display none
</style>
