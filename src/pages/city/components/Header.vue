<template>
<div class="header">
  <router-link :to="{path:'/'}">
    <div class="iconfont return-back">&#xe615;</div>
  </router-link>
<p class="header-title">
  搜索城市
</p>
</div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style scoped lang="stylus">
  @import "~styles/veribales.styl"
  .header
    background $bgColor
    height: $headerHeight
    padding:0 .2rem 0 .2rem
    position: relative
    .header-title
      height: 0.8rem
      line-height: .8rem
      text-align: center
      font-size .4rem
      color #fff
    .return-back
      position: absolute
      top: .22rem
      left: .2rem
      color: #fff
      font-size: .4rem
</style>
