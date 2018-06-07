<template>
  <div id="app" :class="$style.app">
    <SiteHeader :class="$style.header"/>
    <main :class="$style.main">
      <router-view/>
    </main>
    <SiteFooter :class="$style.footer"/>
  </div>
</template>

<script>
import SiteHeader from './components/shared/SiteHeader'
import SiteFooter from './components/shared/SiteFooter'
export default {
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style lang="stylus" module>
  .app
    background-color var(--color--body--background)
    color: var(--color--body);
    display flex
    flex-direction column
    align-items flex-start
    justify-content flex-start
    min-height 100vh
    .main
      flex-grow 1
      width 100%
      padding-top 50px
      padding-bottom 50px
      @extend $container
    .header
    .footer
      width 100%
      flex-grow 0
      flex-shrink 0
</style>
