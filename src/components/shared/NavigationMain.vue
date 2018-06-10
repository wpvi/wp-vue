<template>
  <nav :class="$style.nav">
    <div :class="$style.actions">
      <div
        :class="$style.action"
        @click.prevent="reload">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
      <div
        :class="$style.action"
        @click="toggleMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      </div>
    </div>
    <div
      :class="[$style.links, (canShowMenu ? $style.links__show : '')]"
      v-touch-outside="hideMenu">
      <a
        v-for="link in links"
        :class="$style.link"
        :href="link.url"
        :key="link.url"
        target="_blank"
        rel="noopener"
        v-text="link.text"></a>
    </div>
  </nav>
</template>
<script>
import config from './../../utils/config'
import touchOutside from '../../directives/touch-outside'
export default {
  name: 'NavigationMain',
  computed: {
    links () {
      return config.navigation
    }
  },
  data () {
    return {
      canShowMenu: false
    }
  },
  directives: {
    touchOutside
  },
  methods: {
    reload () {
      location.reload()
    },
    toggleMenu () {
      this.canShowMenu = !this.canShowMenu
    },
    hideMenu () {
      this.canShowMenu = false
    }
  }
}
</script>
<style lang="stylus" module>
.nav
  text-transform uppercase
  color var(--color--primary)
  position relative
.links
  +media-breakpoint-down(sm)
    box-shadow 0px 2px 30px 0px rgba(0,0,0,0.1)
    background #ffffff;
    position absolute
    top 100%
    right 0
    display none
    flex-direction column
&.links__show
  display flex
.link
  margin-left 25px
  font-size 14px
  text-decoration none
  +media-breakpoint-down(sm)
    margin-left 0
    padding 10px 25px 10px 25px
    min-width 150px
    border-top 1px solid var(--color--border)
    &:first-child
      padding-top 15px
      border-top none
    &:last-child
      padding-bottom 15px

.actions
  display none
  justify-content center
  align-items center
  +media-breakpoint-down(sm)
    display flex
.action
  width 30px
  height @width
  vertical-align middle
  padding 0 5px
  svg
    width 100%
    height 100%
</style>
