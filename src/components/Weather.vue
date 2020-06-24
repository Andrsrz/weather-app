<template>
<div>
	<input type="text" v-model="city"/>
	<button type="button" @click="lookForWeather">Search</button>
	<h1></h1>
</div>
</template>

<script>
import { Weather } from '../Weather.js';

export default {
	name: 'WeatherCom',
	data() {
		return {
			city: ''
		}
	},
	methods: {
		lookForWeather(){
			let weather = new Weather();
			weather.fetchApi(this.city);
			this.city = '';
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
