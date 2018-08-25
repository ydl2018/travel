<template>
<ul class="list">
  <li
      :ref="key" class="item"
      v-for="(item,key) of cities"
      :key="item.id"
      @click="handleClick"
      @touchmove="handleTouchMove"
  >
    {{key}}
  </li>
</ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      timer: null
    }
  },
  computed: {
    citiesArr () {
      const citiesArr = []
      for (let i in this.cities) {
        citiesArr.push(i)
      }
      return citiesArr
    },
    startY () {
      const startY = this.$refs['A'][0].scrollTop
      return startY
    }
  },
  methods: {
    handleClick (e) {
      this.bus.$emit('sonClick', e.target.innerText)
    },
    handleTouchMove (e) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const endY = e.touches[0].clientY - 158
        const index = Math.floor((endY - this.startY) / 20)
        if (index >= 0 && index < 22) {
          this.bus.$emit('sonClick', this.citiesArr[index])
        }
      }, 16)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/veribales.styl"
.list
  position: absolute
  top: 1.58rem
  bottom: 0
  right: 0
  width: .4rem
  display flex
  flex-direction column
  justify-content center
  .item
    text-align: center
    line-height: .4rem
    color: $bgColor
</style>
