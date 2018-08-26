<template>
  <div>
    <div class="hot-span">热销推荐</div>
    <router-link
      class="item border-bottom"
      v-for="item of list"
      :key="item.id"
      tag="div"
      :to="'/detail/'+ item.id"
    >
      <img class="item-img" :src="item.src"  alt="" >
      <div class="item-info">
        <p class="info-title">{{item.title}}</p>
        <p class="info-content">{{item.text}}</p>
        <button class="info-button">了解详情</button>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommand',
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
    color orange
    letter-spacing  .05rem
    background: #eee
    line-height .38rem
  .item
    height: 1.9rem
    /*background: #ccc*/
    display flex
    overflow hidden
    .item-img
      height: 1.7rem
      width: 1.7rem
      padding: .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .info-title
        font-size: .32rem
        line-height: .54rem
        textOverFlow()
      .info-content
        padding-top: .1rem
        line-height: .36rem
        font-size .24rem
        color: #ccc
        textOverFlow()
      .info-button
        line-height: .44rem
        color: #fff
        padding .1rem
        background: #ff9300
        border-radius .06rem
        margin-top: .2rem
</style>
