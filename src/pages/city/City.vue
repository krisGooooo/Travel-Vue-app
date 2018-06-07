<template>
<<<<<<< HEAD
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
=======
	<div>
		<city-header></city-header>
		<city-search></city-search>
		<city-list 
			:cities="cities" 
			:hot="hotCities"
			:letter="letter"
		></city-list>
		<city-alphabet 
			:cities="cities"
			@change="handleLetterChange"
		></city-alphabet>
	</div>
>>>>>>> a63c5f204053182ebfe975bb992d23bec74e5e52
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
<<<<<<< HEAD
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
=======
	name: 'City',
	components: {
		CityHeader,
		CitySearch,
		CityList,
		CityAlphabet
	},
	data () {
		return {
			cities: {},
			hotCities: [],
			letter: ''
		}
	},
	methods: {
		getCityInfo () {
			axios.get('/api/city.json')
			  .then(this.handleGetCityInfoSucc)
		},
		handleGetCityInfoSucc (res) {
			res = res.data
			if (res.ret && res.data) {
				const data = res.data
				this.cities = data.cities
				this.hotCities = data.hotCities
			}
		},
		handleLetterChange (letter) {
			this.letter = letter
		}
	},
	mounted () {
		this.getCityInfo()
	}
>>>>>>> a63c5f204053182ebfe975bb992d23bec74e5e52
}
</script>

<style lang="stylus" scoped>
<<<<<<< HEAD

</style>
=======
	
</style>
>>>>>>> a63c5f204053182ebfe975bb992d23bec74e5e52
