<template>
    <div class="header-fixed"
         v-show="isScrolled"
         :style="opacityStyle"
    >
      <router-link :to="{path:'/'}">
        <div class="iconfont return-back">&#xe615;</div>
      </router-link>
      <p class="header-title">
        {{sightName}}
      </p>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  props: {
    sightName: String
  },
  data () {
    return {
      isScrolled: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScrolled () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.isScrolled = true
      } else {
        this.isScrolled = false
      }
    }
  },
  activated () {
    // 记住要解绑
    window.addEventListener('scroll', this.handleScrolled)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScrolled)
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/veribales.styl"
    .header-fixed
      z-index 1
      width: 100%
      background $bgColor
      height: $headerHeight
      padding:0 .2rem 0 .2rem
      position: fixed
      left: 0
      top: 0
      color: #fff
      .header-title
        height: 0.8rem
        line-height: .8rem
        text-align: center
        font-size .4rem
      .return-back
        position: absolute
        top: .22rem
        left: .2rem
        color: #fff
        font-size: .4rem
</style>
