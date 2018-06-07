<template>
  <div>
<<<<<<< HEAD
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
=======
  	<home-header :city="city"></home-header>
  	<home-swiper :list="swiperList"></home-swiper>
  	<home-icons :list="iconList"></home-icons>
>>>>>>> a63c5f204053182ebfe975bb992d23bec74e5e52
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
<<<<<<< HEAD
    HomeHeader,
    HomeSwiper,
    HomeIcons,
=======
  	HomeHeader,
  	HomeSwiper,
  	HomeIcons,
>>>>>>> a63c5f204053182ebfe975bb992d23bec74e5e52
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<<<<<<< HEAD
<style>

</style>
=======
<style></style>
>>>>>>> a63c5f204053182ebfe975bb992d23bec74e5e52
