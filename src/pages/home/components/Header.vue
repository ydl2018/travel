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
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
    <span class="iconfont">&#xe632;</span>
      输入你想要去的地方
    </div>
    <div class="header-right">{{this.city}}</div>
</div>
</template>
<script>
export default{
  name: 'HomeHeader',
  props: {
    city: String
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
         width:1.24rem
         float:right
         position: relative
         padding-left :.2rem
    .header-right::after
      content:""
      position: absolute
      top:.34rem
      left: .85rem
      width: 0
      height: 0
      border-top:.16rem solid #fff
      border-bottom:.10rem solid transparent
      border-left:.16rem solid transparent
      border-right:.16rem solid transparent
</style>
