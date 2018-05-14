<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
				<div class="item-img-wrapper">
					<img :src="item.imgUrl" class="item-img">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeWeekend',
	data () {
		return {
			recommendList:  [{
				id: '0001',
				imgUrl: 'https://imgs.qunarzz.com/p/tts8/1702/e7/a7cf3909d310cf02.jpg_r_240x160x90_abb62fdb.jpg',
				title: '纯玩昆大理',
				desc: '浪漫的纯玩昆大理，不容错过'
			},{
				id: '0002',
				imgUrl: 'https://imgs.qunarzz.com/p/tts8/1702/e7/a7cf3909d310cf02.jpg_r_240x160x90_abb62fdb.jpg',
				title: '纯玩昆大理',
				desc: '浪漫的纯玩昆大理，不容错过'
			},{
				id: '0003',
				imgUrl: 'https://imgs.qunarzz.com/p/tts8/1702/e7/a7cf3909d310cf02.jpg_r_240x160x90_abb62fdb.jpg',
				title: '纯玩昆大理',
				desc: '浪漫的纯玩昆大理，不容错过'
			}]
		}
	}
}	
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.title
		margin-top: .2rem
		line-height: .8rem
		background: #eee
		text-indent: .2rem
	.item-img-wrapper
		overflow: hidden
		height: 0
		padding-bottom: 33.9%
		.item-img
			width: 100%
	.item-info
		// flex: 1
		padding: .1rem
		.item-title
			line-height: .54rem
			font-size: .32rem
			ellipsis()
		.item-desc
			line-height: .4rem
			color: #ccc
			ellipsis()
</style>