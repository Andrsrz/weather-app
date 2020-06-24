<template>
<div>
	<input type="text" v-model="city"/>
	<button type="button" @click="lookForWeather">Search</button>
	<CurrentWeather v-show="isVisible" />
</div>
</template>

<script>
import { Weather } from '../Weather.js';
import CurrentWeather from './CurrentWeather.vue';

export default {
	name: 'WeatherCom',
	components: {
		CurrentWeather
	},
	data() {
		return {
			myWeather: new Weather(),
			city: '',
			isVisible: false
		}
	},
	methods: {
		lookForWeather(){
			this.myWeather.fetchApi(this.city);
			this.city = '';
			this.isVisisble = true;
		}
	}
}
</script>

<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
