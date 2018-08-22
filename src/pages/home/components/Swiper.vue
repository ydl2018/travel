<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img"  :src="item.src"  alt="没有显示吗">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: 1,
        src: 'http://img1.qunarzz.com/piao/fusion/1808/5e/514ce60160e62602.jpg_750x200_9b0074e2.jpg'
      },
      {
        id: 2,
        src: 'http://img1.qunarzz.com/piao/fusion/1808/2f/6ab88adea2619c02.jpg_750x200_675e9cf2.jpg'
      }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  //使用.wrapper >>> .swiper-pagination-bullet-active是穿透作用wrapper后所有为.swiper-pagination-bullet-active的样式
  //注意，.swiper-pagination-bullet-active不是该组件里的样式，无法被渲染到别的组件上去
  .wrapper >>> .swiper-pagination-bullet-active
    background: white
  .wrapper
    width: 100%
    height: 0
    overflow hidden
    padding-bottom:26.66%
    background: #eee
    .swiper-img
      width: 100%
</style>
