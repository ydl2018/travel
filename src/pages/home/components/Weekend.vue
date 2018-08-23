<template>
  <div>
    <div class="hot-span">周末去哪儿</div>
    <div class="item border-bottom" v-for="item of list" :key="item.id">
      <div class="item-img">
        <img  :src="item.src"  alt="" class="img">
      </div>
      <div class="item-info">
        <p class="info-title">{{item.title}}</p>
        <p class="info-content">{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/handleoverflow.styl"
  .hot-span
    padding .2rem 0 .2rem 0
    text-indent .1rem
    margin-bottom .1rem
    color black
    letter-spacing  .03rem
    background: #eee
    line-height .38rem
  .item-img
    height: 0
    padding-bottom 37.09%
    overflow hidden
    .img
      width: 100%
  .item-info
    padding .1rem
    padding-left:.3rem
    .info-title
      font-size: .32rem
      line-height: .60rem
      textOverFlow()
    .info-content
      line-height: .36rem
      font-size .24rem
      textOverFlow()
</style>
