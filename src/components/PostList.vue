<template>
  <section
    :class="$style.postList"
  >
    <PostListItem
      v-for="post in posts"
      :key="post.ID"
      :post="post"
    />
  </section>
</template>
<script>
import PostListItem from './PostListItem'
export default {
  name: 'PostList',
  components: {
    PostListItem
  },
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="stylus" module>
.postList
  display grid
  grid-template-columns  1fr 1fr 1fr
  grid-auto-columns minmax(max-content, 1fr)
  grid-column-gap 50px
  grid-row-gap 50px
</style>
