// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick'// 解决body click延迟300毫秒运行的问题
import 'styles/reset.css'// 解决浏览器显示不统一的问题
import 'styles/border.css'// 解决某些移动端产生的1像素边框问题
import 'styles/iconfont.css'// 引入iconfont

Vue.config.productionTip = false
fastClick.attach(document.body)// 绑定document.body

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
