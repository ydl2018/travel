<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <span class="banner-num iconfont">&#xe612;&nbsp;16</span>
      <router-link tag="div" to="/" class="banner-return iconfont">&#xe615;</router-link>
      <img
        class="banner-img"
        :src="bannerImg"
        alt="">
      <div class="banner-info">
        <div class="info-title">广州长隆旅游度假区(AAAAA景区)</div>
        <div class="info-icon">
          视频
          <span class="iconfont">&#xe6bf;</span>
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="gallaryImg" v-show="isShow" @close="closeGallary"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>

import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fadeAnimation/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    gallaryImg: Array,
    bannerImg: String
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    handleBannerClick () {
      this.isShow = true
    },
    closeGallary () {
      this.isShow = false
    }
  },
  activated () {
    this.isShow = false
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/handleoverflow.styl"
  .banner
    overflow hidden
    height: 0
    padding-bottom 55%
    position: relative
    .banner-return
      position: absolute
      left: .2rem
      top: .2rem
      width: .6rem
      height: .6rem
      background: rgba(0,0,0,.5)
      border-radius 50%
      font-size .36rem
      color white
      line-height: .6rem
      text-align: center
    .banner-num
      position: absolute
      left: .2rem
      bottom: .8rem
      width: 1.6rem
      height: .44rem
      font-size .28rem
      font-weight: bold
      color white
      background: rgba(0, 0 0, .5)
      text-align: center
      line-height: .44rem
      border-radius .3rem
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      bottom .2rem
      left: 0
      right: 0
      /*background: #000*/
      .info-title
        padding-left:.2rem
        z-index 1
        fontStyle()
      .info-icon
        position: absolute
        right:.1rem
        bottom: 0
        fontStyle()
  .banner:after
    content ''
    display block
    width: 100%
    position: absolute
    left: 0
    bottom 0
    height: .6rem
    background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
</style>
