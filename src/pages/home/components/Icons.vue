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
  props: {
    list: Array
  },
  data: function () {
    return {
      swiperOption: {
        auto: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
          pages[page].id = page
        }
        pages[page].push(item)
      })
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
