<template>
  <header :class="$style.header">
    <div :class="$style.inner">
      <router-link :class="$style.logo" to="/" tag="h1" v-text="siteName"></router-link>
      <NavigationMain/>
    </div>
  </header>
</template>
<script>
import NavigationMain from './NavigationMain'
import config from './../../utils/config'
export default {
  name: 'SiteHeader',
  components: {
    NavigationMain
  },
  computed: {
    siteName () {
      return config.siteInfo.name
    }
  }
}
</script>
<style lang="stylus" module>
.header
  width 100%
  background var(--color--header-background)
  box-shadow 0px 2px 40px 0px rgba(0,0,0,0.08)
  position static
  top 0
.inner
  @extend $container
  padding-top 20px
  padding-bottom 20px
  display flex
  justify-content space-between
  align-items center
.logo
  margin-bottom 0
  font-size 16px
  line-height 20px
  color var(--color--body)
  cursor pointer
  font-weight 700
  letter-spacing 2px
  text-transform uppercase
</style>
