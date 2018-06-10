<template>
  <footer :class="$style.footer">
    <div :class="$style.inner">
      <span>Love + netlify + WordPress + Vuejs</span>
      <span> | </span>
      <a href="https://app.netlify.com/start/deploy?repository=https://github.com/wpvi/wp-vue" target="_blank">Create your own, it's free</a>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'SiteFooter',
  data () {
    return {}
  }
}
</script>
<style lang="stylus" module>
.footer
  background var(--color--footer-background)
  padding 30px
  margin-top 50px
  color var(--color--gray)
  @extend $centered-flex
  flex-direction column
  font-size 13px
.inner
  +media-breakpoint-down(sm)
    display none
</style>
