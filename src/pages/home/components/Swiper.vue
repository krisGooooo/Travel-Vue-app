<template>
<<<<<<< HEAD
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
=======
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="showSwiper">
	    <swiper-slide v-for="item of list" :key="item.id">
	    	<img class="swiper-img" :src="item.imgUrl">
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</div>
>>>>>>> a63c5f204053182ebfe975bb992d23bec74e5e52
</template>

<script>
export default {
<<<<<<< HEAD
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
=======
	name: 'HomeSwiper',
	props: {
		list: Array
	},
	data () {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true
			}
		}
	},
	computed: {
		showSwiper () {
			return this.list.length
		}
	}
>>>>>>> a63c5f204053182ebfe975bb992d23bec74e5e52
}
</script>

<style lang="stylus" scoped>
<<<<<<< HEAD
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
=======
	.wrapper >>> .swiper-pagination-bullet-active
			background: #fff
	.wrapper
		overflow: hidden
		width: 100%
		height: 0
		padding-bottom: 26.7%
		background: #eee
		.swiper-img
			width: 100%
</style>
>>>>>>> a63c5f204053182ebfe975bb992d23bec74e5e52
