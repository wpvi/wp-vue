<template>
  <div class="menu btn-back" :class="{open: showBack}">
    <div class="icon"></div>
  </div>
</template>
<script>
export default {
  name: 'HamburgerButton',
  computed: {
    showBack () {
      return this.$route.name !== 'home'
    }
  }
}
</script>
<style lang="stylus" scoped>
  $accent = #1abc9c;
  .btn-back{
    width: 20px;
    height: 20px;
    transition-duration: 0.5s;
    .icon {
      transition-duration: 0.5s;
      position: absolute;
      height: 3px;
      width: 20px;
      top: 50%;
      transform translateY(-50%)
      background-color: var(--color--primary);

      &:before{
        transition-duration: 0.5s;
        position: absolute;
        width: 20px;
        height: 3px;
        background-color: var(--color--primary);
        content: "";
        top: -7px;
      }

      &:after{
        transition-duration: 0.5s;
        position: absolute;
        width: 20px;
        height: 3px;
        background-color: var(--color--primary);
        content: "";
        top: 7px;
      }
    }

    &.open {
      .icon {
        transition: 0.5s;
        width 0px
        &:before{
          width 20px
          transform: rotateZ(-45deg) scaleX(0.70) translate(-5px, 0px);
        }

        &:after{
          width 20px
          transform: rotateZ(45deg) scaleX(0.70) translate(-5px, 0px);
        }
      }
    }
    &:hover {
      cursor: pointer;
    }
  }
</style>
