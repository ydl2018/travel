<template>
<div class="header">
    <div class="header-left">
      <!--iconfont引入步骤：
      首先在iconfont官网下载icon，
      然后引入字体与css文件，
      接着修改css文件中的url地址（具体看你当前的字体文件在哪里）
      紧接着在根目录上导入该css
      最后在模板上引用class
      注意：如果将iconfont.css中的映射删除了，就需要自己到官网复制地址
      -->
      <span class="iconfont">&#xe615;</span>
    </div>
    <div class="header-input">
    <span class="iconfont">&#xe632;</span>
      输入你想要去的地方
    </div>
  <router-link :to="{path:'/city'}">
    <div class="header-right">
        {{city}}
      <span class="iconfont">&#xe62d;</span>
    </div>
  </router-link>
</div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
export default{
  name: 'HomeHeader',
  computed: {
    // 将state中的city进行查询，然后同名的方式映射到当前的计算属性'city'中
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>
<style type="text/stylus" lang="stylus" scoped >
  /*@import "../../.././assets/styles/veribales.styl"*/
  //此处记得要在@前面写上~区别于别的import
  //修改webpack数据配置，要重启服务器
  /*@import "~@/assets/styles/veribales.styl"*/
  @import "~styles/veribales.styl"
    .header
      display:flex
      height: $headerHeight
      line-height:.86rem
      background:$bgColor
      color: #fff
      .header-left
        width:.64rem
        float:left
        text-align: center
        font-size .4rem
      .header-input
        flex:1
        background: #fff
        height:.64rem
        line-height :.64rem
        margin-top:.12rem
        margin-left: .2rem
        border-radius .1rem
        color :#ccc
        padding-left .3rem
      .header-right
        min-width:1.04rem
        padding: 0 .1rem
        float:right
        padding-left :.2rem
        color: #fff
        position: relative
</style>
