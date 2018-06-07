<template>
  <div :class="containerClassies">
    <svg :class="$style.heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.997 51.997"><path d="M51.911 16.242c-.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906C6.759 1.826.845 7.887.087 16.241c-.06.369-.306 2.311.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014.748-3.166.502-5.108.443-5.477zm-2.39 5.019c-.984 4.172-3.265 7.973-6.59 10.985L25.855 47.481 9.072 32.25c-3.331-3.018-5.611-6.818-6.596-10.99-.708-2.997-.417-4.69-.416-4.701l.015-.101c.65-7.319 5.731-12.632 12.083-12.632 4.687 0 8.813 2.88 10.771 7.515l.921 2.183.921-2.183c1.927-4.564 6.271-7.514 11.069-7.514 6.351 0 11.433 5.313 12.096 12.727.002.016.293 1.71-.415 4.707z"/><path d="M15.999 7.904c-5.514 0-10 4.486-10 10a1 1 0 1 0 2 0c0-4.411 3.589-8 8-8a1 1 0 1 0 0-2z"/></svg>
    <span :class="$style.count" v-text="likeCount"></span>
  </div>
</template>

<script>
export default {
  name: 'PostLikeCount',
  props: {
    likeCount: {
      type: Number,
      default: 0
    }
  },
  computed: {
    containerClassies () {
      let classies = [
        this.$style.container
      ]
      if (this.likeCount > 0) {
        classies.push(this.$style.hasLike)
      }
      return classies
    }
  }
}
</script>
<style lang="stylus" module>
.container
  position relative
.heart
  width auto
  height 20px
  vertical-align middle
  path
    fill var(--color--gray)
.count
  position absolute
  left 50%
  top 50%
  transform translate(-50%, -50%)
  font-size 12px

.hasLike
  .heart path
    fill #e10200
  .count
    color #e10200
</style>
