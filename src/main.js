// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
=======
import fastClick from 'fastClick'// 解决body click延迟300毫秒运行的问题
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'// 解决浏览器显示不统一的问题
import 'styles/border.css'// 解决某些移动端产生的1像素边框问题
import 'styles/iconfont.css'// 引入iconfont
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
fastClick.attach(document.body)// 绑定document.body
>>>>>>> a63c5f204053182ebfe975bb992d23bec74e5e52
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
