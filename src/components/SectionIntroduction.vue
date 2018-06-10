<template>
  <section :class="$style.section">
    <h1 :class="$style.title" v-text="sectionIntro.title"></h1>
    <div :class="$style.content">
      <p v-html="sectionIntro.content"></p>
    </div>
  </section>
</template>
<script>
import config from './../utils/config'
export default {
  name: 'SectionIntroduction',
  computed: {
    sectionIntro: () => config.sectionIntro
  }
}
</script>
<style lang="stylus" module>
.section
  max-width 500px
.title
  font-weight 600
  font-size 25px
  margin-bottom 10px
.content
  p
    font-size 15px
    line-height 23px
    margin 0
</style>
