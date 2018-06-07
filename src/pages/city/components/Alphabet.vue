<template>
<<<<<<< HEAD
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{item}}
    </li>
  </ul>
=======
	<ul class="list">
		<li 
			class="item" 
			v-for="item of letters" 
			:key="item"
			:ref="item"
			@touchstart="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd"
			@click="handleLetterClick"
		>{{item}}</li>
	</ul>
>>>>>>> a63c5f204053182ebfe975bb992d23bec74e5e52
</template>

<script>
export default {
<<<<<<< HEAD
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
=======
	name: 'CityAlphabet',
	props: {
		cities: Object
	},
	computed: {
		letters () {
			const letters = []
			for (let i in this.cities) {
				letters.push(i)
			}
			return letters
		}
	},
	data () {
		return {
			touchStatus: false
		}
	},
	methods: {
		handleLetterClick (e) {
			this.$emit('change',e.target.innerText)
		},
		handleTouchStart () {
			this.touchStatus = true
		},
		handleTouchMove (e) {
			if (this.touchStatus) {
				const startY = this.$refs['A'][0].offsetTop
				const touchY = e.touches[0].clientY - 79
				const index = Math.floor(touchY - startY)/20
				if (index >= 0 && index < this.letters.length) {
					this.$emit('change',this.letters[index])
				}


			}
		},
		handleTouchEnd () {
			this.touchStatus = false
		}
	}
>>>>>>> a63c5f204053182ebfe975bb992d23bec74e5e52
}
</script>

<style lang="stylus" scoped>
<<<<<<< HEAD
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
=======
	@import '~styles/varibles.styl'
	.list
		display: flex
		flex-direction: column
		justify-content: center
		position: absolute
		top: 1.58rem
		right: 0
		botton: 0
		width: .4rem
		.item
			line-height: .4rem
			text-align: center
			color: $bgColor
</style>
>>>>>>> a63c5f204053182ebfe975bb992d23bec74e5e52
