<template>
  <div class="search">
    <input type="text" placeholder="输入城市名或拼音" class="input">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/veribales.styl"
  .search
    background $bgColor
    height: .7rem
    padding:0 .1rem
  .input
    height: .6rem
    display block
    width: 100%
    border-radius .1rem
    padding-left: .1rem
    box-sizing border-box
    text-align: center
    color #666
</style>
