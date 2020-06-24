<template>
<div>
	<div class="search">
		<input type="text" v-model="city"/>
		<button type="button" @click="lookForWeather">Search</button>
	</div>
	<CurrentWeather v-show="isVisible" :weather="myWeather" />
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
			if(this.city != ''){
				this.myWeather.fetchApi(this.city);
				this.city = '';
				this.isVisible = true;
			}else{
				alert("Enter a valid City");
			}
		}
	}
}
</script>

<style scoped>
.search {
	margin: 10px;
}

.search > * {
	margin: 5px;
}
</style>
