<template>
  <nav :class="$style.nav">
    <a
      v-for="link in links"
      :class="$style.item"
      :href="link.url"
      :key="link.url"
      target="_blank"
      v-text="link.text"></a>
  </nav>
</template>
<script>
import config from './../../utils/config'
export default {
  name: 'NavigationMain',
  computed: {
    links () {
      return config.navigation
    }
  }
}
</script>
<style lang="stylus" module>
.nav
  text-transform uppercase
  color var(--color--primary)
.item
  margin-left 25px
  font-size 14px
  text-decoration none
</style>
