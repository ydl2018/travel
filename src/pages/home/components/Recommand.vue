<template>
  <div>
    <div class="hot-span">热销推荐</div>
    <div class="item border-bottom" v-for="item of recommandList" :key="item.id">
      <img class="item-img" :src="item.src"  alt="" >
      <div class="item-info">
        <p class="info-title">{{item.title}}</p>
        <p class="info-content">{{item.content}}</p>
        <button class="info-button">了解详情</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommand',
  data: function () {
    return {
      recommandList: [{
        id: 1,
        src: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg',
        title: '吴川第一大帅比',
        content: '英俊潇洒，风花雪月，可带动人'
      },
      {
        id: 2,
        src: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg',
        title: '吴川第一大帅比',
        content: '英俊潇洒，风花雪月，可带动人'
      },
      {
        id: 3,
        src: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg',
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
