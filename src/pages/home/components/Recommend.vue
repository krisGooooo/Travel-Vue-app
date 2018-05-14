<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
				<img :src="item.imgUrl" class="item-img">
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeRecommend',
	data () {
		return {
			recommendList:  [{
				id: '0001',
				imgUrl: 'https://imgs.qunarzz.com/p/tts6/1802/8b/dad3719f0a8ae302.jpg_r_240x160x90_cfb17389.jpg',
				title: '纯玩昆大理',
				desc: '浪漫的纯玩昆大理，不容错过'
			},{
				id: '0002',
				imgUrl: 'https://imgs.qunarzz.com/p/tts6/1802/8b/dad3719f0a8ae302.jpg_r_240x160x90_cfb17389.jpg',
				title: '纯玩昆大理',
				desc: '浪漫的纯玩昆大理，不容错过'
			},{
				id: '0003',
				imgUrl: 'https://imgs.qunarzz.com/p/tts6/1802/8b/dad3719f0a8ae302.jpg_r_240x160x90_cfb17389.jpg',
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
	.item
		overflow: hidden
		display: flex
		height: 1.9rem
		.item-img
			width: 1.7rem
			height: 1.7rem
			padding: .1rem
		.item-info
			// flex: 1
			padding: .1rem
			min-width: 0
			.item-title
				line-height: .54rem
				font-size: .32rem
				ellipsis()
			.item-desc
				line-height: .4rem
				color: #ccc
				ellipsis()
			.item-button
				line-height: .44rem
				margin-top: .10rem
				background: #ff9300
				padding: 0 .2rem
				border-radius: .06rem
				color: #fff
</style>