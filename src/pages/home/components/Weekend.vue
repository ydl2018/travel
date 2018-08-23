<template>
  <div>
    <div class="hot-span">周末去哪儿</div>
    <div class="item border-bottom" v-for="item of  WeekendList" :key="item.id">
      <div class="item-img">
        <img  :src="item.src"  alt="" class="img">
      </div>
      <div class="item-info">
        <p class="info-title">{{item.title}}</p>
        <p class="info-content">{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data: function () {
    return {
      WeekendList: [{
        id: 10,
        src: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
        title: '吴川第一大帅比',
        content: '英俊潇洒，风花雪月，可带动人'
      }
      ]
    }
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
