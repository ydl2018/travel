// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'styles/reset.css'
// border.css是为了解决移动端1px在高像素环境下变为2px的问题
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.prototype.bus = new Vue()

// 解决点击事件被延迟300ms的问题
fastclick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
