<template>
  <nav :class="$style.nav">
    <a
      href="#"
      :class="$style.item"
    >Item</a>
  </nav>
</template>
<script>
export default {
  name: 'NavigationMain'
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
