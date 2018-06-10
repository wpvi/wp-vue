<template>
  <article
    :class="$style.article">
    <header>
      <h1
        :class="$style.title"
        v-html="post.title"></h1>
      <time>{{ post.date | formatDate }}</time>
    </header>
    <div :class="$style.featuredImage">
      <img
        :src="post.featured_image"
        :alt="post.title">
    </div>
    <div
      :class="[$style.content, 'content']"
       v-html="post.content">
    </div>
    <footer>

    </footer>
  </article>
</template>

<script>
import postStuff from './../stuffs/post'
export default {
  name: 'PostSingleContent',
  props: {
    post: {
      type: Object,
      default: () => postStuff
    }
  }
}
</script>

<style lang="stylus" module>
.content
  margin-top 30px
.title
  font-weight normal
  line-height 35px
.featuredImage
  margin-top 20px
</style>

<style lang="stylus" scoped>
.content
  /deep/
    .gallery-row
    .gallery-group
      width auto !important
      height auto !important
    .gallery-row
      display grid
      grid-template-columns 1fr 1fr
      background-image attr('')
    .wp-caption
      max-width 100%
    li
      margin-top 10px
      &:first-child
        margin-top 0
    p
      line-height 23px
</style>
