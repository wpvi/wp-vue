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
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="stylus" module>
.postList
  display grid
  grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
  grid-column-gap 40px
  grid-row-gap 50px
</style>
