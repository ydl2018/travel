<template>
<div class="icons">
  <swiper :options="swiperOption">
    <swiper-slide v-for="page in pages" :key="page.id">
  <div class="icon" v-for="item of page" :key="item.id">
    <div class="icon-img">
      <img :src="item.src" alt="">
    </div>
    <div class="keywords">{{item.text}}</div>
  </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data: function () {
    return {
      swiperOption: {},
      iconList: [
        {
          id: 1,
          src: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          text: '景点门票'
        },

        {
          id: 2,
          src: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          text: '广州必游'
        },
        {
          id: 3,
          src: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          text: '动植物园'
        },
        {
          id: 4,
          src: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
          text: '游乐场'
        },
        {
          id: 5,
          src: 'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
          text: '两江夜游'
        },
        {
          id: 6,
          src: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
          text: '夏日玩水'
        },
        {
          id: 7,
          src: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
          text: '城市观光'
        },
        {
          id: 8,
          src: 'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png',
          text: '汽车票'
        },
        {
          id: 9,
          src: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
          text: '玩转长隆'
        },
        {
          id: 10,
          src: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
          text: '全部玩乐'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
          pages[page].id = page
        }
        pages[page].push(item)
      })
      console.log(pages)
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/veribales.styl"
  @import "~styles/handleoverflow.styl"
.icons
  height: 0
  padding-bottom:50%
  overflow hidden
  background: #fff
  .icon
    width: 25%
    height: 0
    padding-bottom 25%
    float: left
    position: relative
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom:.44rem
      padding .1rem
      box-sizing border-box
    .icon-img img
        display block
        margin: 0 auto
        height  100%
    .keywords
        position: absolute
        bottom: 0
        left: 0
        right: 0
        height .44rem
        line-height .44rem
        text-align: center
        color $fontSizeColor
        textOverFlow()
</style>
