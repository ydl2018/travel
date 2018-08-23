<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id" >
        <img class="swiper-img"  :src="item.src"  alt="没有显示吗">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: ['list'],
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length !== 0
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
