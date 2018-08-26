<template>
<div>
  <div v-for="(item,index) in list"
       :key="index"
  >
    <div class="item border-bottom">
      <span class="item-icon"></span>
      {{item.title}}
    </div>
    <div class="item-children" v-if="item.children">
      <detail-list :list="item.children"></detail-list>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style scoped lang="stylus">
  .item
    line-height: .86rem
    height: .86rem
    padding-left: .3rem
    .item-icon
      display: inline-block
      position: relative
      width: .36rem
      height: .36rem
      top: .12rem
      left: .05rem
      background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
  .item-children
    padding-left: .2rem
</style>
