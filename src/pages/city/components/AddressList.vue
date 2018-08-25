<template>
    <div ref="wrapper" class="list">
      <div>
        <div class="area">
          <div class="title border-topbottom">
            当前城市
          </div>
          <div class="button-list">
            <div class="button">北京</div>
            <div class="button">北京</div>
            <div class="button">北京</div>
            <div class="button">北京</div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">
            热门城市
          </div>
          <div class="button-list">
            <div class="button">北京</div>
          </div>
        </div>
        <div class="area border-topbottom">
          <div class="title">
            A
          </div>
          <ul class="item-list">
            <li class="item border-bottom">大吴川</li>
            <li class="item border-bottom">大吴川</li>
            <li class="item border-bottom">大吴川</li>
            <li class="item border-bottom">大吴川</li>
            <li class="item border-bottom">大吴川</li>
          </ul>
        </div>
        <div class="area border-topbottom">
          <div class="title">
            A
          </div>
          <ul class="item-list">
            <li class="item border-bottom">大吴川</li>
            <li class="item border-bottom">大吴川</li>
            <li class="item border-bottom">大吴川</li>
            <li class="item border-bottom">大吴川</li>
            <li class="item border-bottom">大吴川</li>
          </ul>
        </div>
        <div class="area border-topbottom">
          <div class="title">
            A
          </div>
          <ul class="item-list">
            <li class="item border-bottom">大吴川</li>
            <li class="item border-bottom">大吴川</li>
            <li class="item border-bottom">大吴川</li>
            <li class="item border-bottom">大吴川</li>
            <li class="item border-bottom">大吴川</li>
          </ul>
        </div>
      </div>
      </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    //此处的&代替父级元素
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
   &:before
    border-color #ccc
  .list
    position: absolute
    top: 1.6rem
    left: 0
    bottom: 0
    right: 0
    overflow hidden
    .title
      line-height: .44rem
      background: #eee
      color: #666
      font-size .26rem
      padding: .1rem 0 0 .2rem
    .button-list
      padding: .2rem
      overflow hidden
      .button
        width: 30%
        line-height: .50rem
        height: .50rem
        text-align: center
        float: left
        margin 0 0 .15rem .15rem
        border .02rem solid #ccc
        border-radius .1rem
    .item-list
      .item
        line-height: .78rem
        padding-left  .2rem
</style>
