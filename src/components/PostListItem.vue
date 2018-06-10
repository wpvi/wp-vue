<template>
  <router-link
    tag="article"
    :to="{
      name: 'single',
      params: {
        slug: post.slug
      }
    }"
    :class="$style.article">
    <div
      :class="$style.thumbnail"
      v-if="post.featured_image">
      <img
        :src="post.featured_image"
        :alt="post.title">
    </div>
    <header
      :class="$style.header">
      <h1
        :class="$style.title"
        v-html="post.title"></h1>
    </header>
    <div
      :class="$style.excerpt"
      v-html="post.excerpt"></div>
    <footer :class="$style.footer">
      <div :class="$style.footerInner">
        <PostLikeCount
          :likeCount="post.like_count"
        />
        <time>{{ post.date | formatDate }}</time>
      </div>
    </footer>
  </router-link>
</template>
<script>
import PostLikeCount from './../components/PostLikeCount'
import postStuff from './../stuffs/post'
export default {
  name: 'PostListItem',
  props: {
    post: {
      type: Object,
      default: () => postStuff
    }
  },
  components: {
    PostLikeCount
  }
}
</script>

<style lang="stylus" module>
$padding
  padding-left 20px
  padding-right 20px
.article
  box-shadow 0 20px 20px rgba(0,0,0,.08)
  display flex
  flex-direction column
  cursor pointer
  transition all 250ms cubic-bezier(.02, .01, .47, 1)
  max-height 473px
  &:hover
    box-shadow 0 40px 40px rgba(0,0,0,.16)
    transform translate(0,-20px)
.thumbnail
  background-size cover
  height 200px
  width 100%
  overflow hidden
  flex-grow 0
  flex-shrink 0
.header
  @extend $padding
  margin-top 20px
  flex-grow 0
  flex-shrink 0
.title
  font-size 20px
  font-weight 400
  line-height 23px
  color #1D2129
  margin-bottom 0
.excerpt
  @extend $padding
  margin-top 15px
  flex-grow 1
  overflow hidden
  p
    font-size 14px
    line-height 19px
    max-height 100%
    overflow hidden
    margin 0
.footer
  margin-top 20px
  @extend $padding
  flex-grow 0
  flex-shrink 0
  color: var(--color--gray)
  font-size 13px
  line-height 15px
.footerInner
  padding 15px 0
  border-top 1px solid var(--color--border)
  display flex
  flex-wrap nowrap
  justify-content space-between
  align-items center
.readMore
  text-decoration none
  text-transform uppercase
  color: var(--color--gray)
</style>
