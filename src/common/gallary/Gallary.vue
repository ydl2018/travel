<template>
<div class="container" @click="handleGallaryClick">
<div class="wrapper">
  <swiper  :options="swiperOptions">
    <swiper-slide v-for="(item,index) of imgs" :key="index">
      <img class="swiper-img"
           :src="item"
           alt="没有显示吗">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return [
        ]
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // 当检测到组件或者组件爸爸检测到dom变化时，自动刷新一次
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="stylus">
  .container >>> .swiper-container
    overflow inherit
  .container
    z-index 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    display flex
    align-items center
    .wrapper
      width: 100%
      padding-bottom 100%
      height: 0
      position: relative
    .wrapper img
      width: 100%
    .swiper-pagination
      top:6.7rem
      color: #fff
</style>
