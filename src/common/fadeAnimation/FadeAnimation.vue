<template>
    <transition>
      <slot></slot>
    </transition>
</template>

<script>
export default {
  name: 'FadeAnimation'
}
</script>

<style scoped lang="stylus">
  .v-enter,.v-leave-to
    opacity 0
  .v-leave-active,.v-enter-active
    transition opacity 0.5s
</style>
