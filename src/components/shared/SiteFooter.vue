<template>
  <footer :class="$style.footer">
    <div>
      <span>Love + netlify + WordPress + Vuejs</span>
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
</style>
