<template>
  <div>
    <city-header ></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hot="hotCities" :cities="cities" :outCity="outCity"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/AddressList'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      outCity: '',
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      if (res.data.ret && res.data.data) {
        var data = res.data.data
        this.hotCities = data.hotCities
        this.cities = data.cities
        this.outCity = data.city
      }
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style scoped>

</style>
