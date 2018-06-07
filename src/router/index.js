import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

=======
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City'
>>>>>>> a63c5f204053182ebfe975bb992d23bec74e5e52
Vue.use(Router)

export default new Router({
  routes: [{
<<<<<<< HEAD
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
=======
	path: '/',
	name: 'Home',
	component: Home
  },{
  	path: '/city',
  	name: 'City',
  	component: City
>>>>>>> a63c5f204053182ebfe975bb992d23bec74e5e52
  }]
})
