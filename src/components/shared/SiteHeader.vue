<template>
  <header :class="$style.header">
    <div :class="$style.inner">
      <div
        :class="$style.logoContainer"
        @click.prevent="back">
        <HamburgerButton
          :class="$style.back"/>
        <h1 :class="$style.logo" to="/" tag="h1" v-text="siteName"></h1>
      </div>
      <NavigationMain/>
    </div>
  </header>
</template>
<script>
import NavigationMain from './NavigationMain'
import HamburgerButton from './HamburgerButton'
import config from './../../utils/config'
export default {
  name: 'SiteHeader',
  components: {
    NavigationMain,
    HamburgerButton
  },
  computed: {
    siteName () {
      return config.siteInfo.name
    }
  },
  methods: {
    back () {
      if (this.$route.name !== 'home') {
        this.$router.back()
      }
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
  z-index 1000
  +media-breakpoint-down(sm)
    position sticky
.inner
  @extend $container
  height 70px
  display flex
  justify-content space-between
  align-items center
  +media-breakpoint-down(sm)
    padding-right 10px
    height 60px
.logoContainer
  display flex
  justify-content flex-start
  align-items center
  cursor pointer
.logo
  margin-bottom 0
  font-size 16px
  line-height 20px
  color var(--color--body)
  cursor pointer
  font-weight 700
  letter-spacing 2px
  text-transform uppercase
  +media-breakpoint-down(sm)
    font-size 20px
.back
  display none
  height 15px
  width @height
  vertical-align vertical-align
  margin-right 10px
  margin-bottom 1px
  +media-breakpoint-down(sm)
    display block
</style>
