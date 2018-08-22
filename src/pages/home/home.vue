<template>
    <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
      <div>1</div>
    </div>
</template>
<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
<style>

</style>
