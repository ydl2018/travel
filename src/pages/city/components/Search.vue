<template>
  <div>
    <div class="search">
      <input type="text" placeholder="输入城市名或拼音" class="input" v-model="keyword">
    </div>
    <div class="search-content" ref="ul" v-show="keyword">
      <ul >
          <li class="content border-bottom"
              v-for="item in arr"
              :key="item.id"
              @click="handleCityChange(item.name)"
          >
            {{item.name}}
        </li>
        <li class="content border-bottom" v-show="hasNoData">没有查询到任何记录</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      arr: []
    }
  },
  methods: {
    handleCityChange (city) {
      this.changeCity(city)
      this.keyword = ''
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    hasNoData () {
      return this.arr.length === 0
    }
  },
  watch: {
    keyword () {
      this.arr = []
      if (!this.keyword) {
        return
      }
      for (let i in this.cities) {
        this.cities[i].forEach((item) => {
          if (item.name.indexOf(this.keyword) > -1 || item.spell.indexOf(this.keyword) > -1) {
            this.arr.push(item)
          }
        })
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.ul)
  }
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
  .search-content
    z-index 1
    position: absolute
    top:1.58rem
    left: 0
    right: 0
    bottom 0
    background: #ccc
    overflow hidden
    .content
      line-height: .78rem
      height: .78rem
      background: #fff
      padding-left: .2rem
</style>
