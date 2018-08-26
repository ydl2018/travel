<template>
    <div ref="wrapper" class="list">
      <div>
        <div class="area">
          <div class="title border-topbottom">
            当前城市
          </div>
          <div class="button-list">
            <div class="button"
             @click="handleCityClick(currentCity)"
            >{{currentCity}}</div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">
            热门城市
          </div>
          <div class="button-list" >
            <div class="button"
                 :key="item.id"
                 v-for="item of hot"
                 @click="handleCityClick(item.name)"
            >{{item.name}}</div>
          </div>
        </div>
        <div :ref="key" class="area border-topbottom"
             v-for="(item,key) of cities"
             :key="key"
        >
        <div class="title">
        {{key}}
        </div>
        <ul class="item-list">
        <li  class="item border-bottom"
             v-for="city of item"
             :key="city.id"
             @click="handleCityClick(city.name)">{{city.name}}</li>
        </ul>
        </div>
        </div>
      </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapActions, mapState} from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    outCity: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  data () {
    return {
      nowAbc: ''
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
    this.bus.$on('sonClick', msg => {
    // 判断是否点击的是同一个字符
      if (this.nowAbc !== msg) {
        this.nowAbc = msg
        // 下面形式也可以进行监听，但是练习着用watch属性进行监听
        // this.scroll.scrollToElement(this.$refs[msg][0])
      }
    })
  },
  methods: {
    handleCityClick (city) {
    // 派发一个参数city给actions的changeCity,一般没有异步调用不适用该函数
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapActions(['changeCity'])
  },
  watch: {
    nowAbc () {
      if (this.nowAbc) {
        this.scroll.scrollToElement(this.$refs[this.nowAbc][0])
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    //此处的&代替父级元素
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
   &:before
    border-color #ccc
  .list
    position: absolute
    top: 1.6rem
    left: 0
    bottom: 0
    right: 0
    overflow hidden
    .title
      line-height: .44rem
      background: #eee
      color: #666
      font-size .26rem
      padding: .1rem 0 0 .2rem
    .button-list
      padding: .2rem
      overflow hidden
      .button
        width: 30%
        line-height: .50rem
        height: .50rem
        text-align: center
        float: left
        margin 0 0 .15rem .15rem
        border .02rem solid #ccc
        border-radius .1rem
    .item-list
      .item
        line-height: .78rem
        padding-left  .2rem
</style>
