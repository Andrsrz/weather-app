<template>
<div>
	<div class="search">
		<input type="text" placeholder="Tokyo" v-model="city"/>
		<select name="untis" v-model="units" >
			<option value="metric" selected>°C</option>
			<option value="imperial">°F</option>
		</select>
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
			units: '',
			isVisible: false
		}
	},
	methods: {
		lookForWeather(){
			if(this.city != '' && this.units != ''){
				this.myWeather.fetchApi(this.city, this.units);
				this.city = '';
				this.isVisible = true;
			}else{
				alert("Enter a valid City and the units");
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
