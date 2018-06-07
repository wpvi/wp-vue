<template>
  <div :class="$style.container">
    <div :class="$style.spinner">
      <div :class="$style.inner"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    color: {
      type: String,
      default: '#41b883'
    }
  }
}
</script>

<style lang="stylus" module>
  .container
    @extend $centered-flex
  .spinner
    width 50px
    height @width
    position relative
    border 4px solid var(--color--body)
    animation loader 2s infinite ease
  .inner
    vertical-align top
    display inline-block
    width 100%
    background-color var(--color--body)
    animation loader-inner 2s infinite ease-in
  @keyframes loader {
    0% {
      transform rotate(0deg)
    }
    25% {
      transform rotate(180deg)
    }
    50% {
      transform rotate(180deg)
    }
    75% {
      transform rotate(360deg)
    }
    100% {
      transform rotate(360deg)
    }
  }
  @keyframes loader-inner {
    0% {
      height 0%
    }
    25% {
      height 0%
    }
    50% {
      height 100%
    }
    75% {
      height 100%
    }
    100% {
      height 0%
    }
  }
</style>
