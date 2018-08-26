<template>
  <div>
    <detail-banner :bannerImg="bannerImg" :gallaryImg="gallaryImgs"></detail-banner>
    <detail-header  :sightName="sightName"></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [],
      sightName: '',
      bannerImg: '',
      gallaryImgs: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json?id=' + this.$route.params.id).then(this.handleDetailInfo)
    },
    handleDetailInfo (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.list = data.categoryList
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  activated () {
    this.getDetailInfo()
  }
}
</script>

<style scoped lang="stylus">
.content
  height: 50rem
</style>
