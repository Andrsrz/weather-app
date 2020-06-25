<template>
<div>
	<div class="search">
		<input type="text" placeholder="Tokyo" v-model="city"/>
		<select name="untis" v-model="units" >
			<option value="metric" selected>°C</option>
			<option value="imperial">°F</option>
		</select>
		<button type="button" title="Search" @click="lookForWeather">
			<span class="fas fa-search"></span>
		</button>
	</div>
	<div class="search">
		<button type="button" title="Use Current Location" @click="lookForThisWeather">
			<span class="fas fa-map-marker-alt"></span> Current Location
		</button>
		<h2 class="error">{{ geoError }}</h2>
	</div>
	<CurrentWeather v-show="isVisible" :weather="myWeather" />
	<br><br>
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
			geolocation: [],
			geoError: '',
			isVisible: false
		}
	},
	methods: {
		lookForWeather(){
			if(this.city != '' && this.units != ''){
				this.geoError = '';
				this.myWeather.fetchApi(this.city, this.units, this.geolocation);
				this.city = '';
				this.isVisible = true;
			}else{
				alert("Enter a valid City and the units");
			}
		},
		lookForThisWeather(){
			this.getLocation();
			if(this.geoError != '' && this.geolocation.length > 0){
				this.myWeather.fetchApi('', 'metric', this.geolocation);
				this.isVisible = true;
			}
		},
		getLocation(){
			this.geolocation = [];
			if(navigator.geolocation){
				navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
			}else{
				this.geoError = "Geolocation is not supported by this browser";
			}
		},
		showPosition(position){
			this.geolocation.push(position.coords.latitude);
			this.geolocation.push(position.coords.longitude);
		},
		showError(error){
			switch(error.code) {
				case error.PERMISSION_DENIED:
					this.geoError = "User denied the request for Geolocation."
					break;
				case error.POSITION_UNAVAILABLE:
					this.geoError = "Location information is unavailable."
					break;
				case error.TIMEOUT:
					this.geoError = "The request to get user location timed out."
					break;
				case error.UNKNOWN_ERROR:
					this.geoError = "An unknown error occurred."
					break;
			}
		}
	}
}
</script>

<style scoped>
.error {
	color: red;
}

input {
	padding: 10px;
}

select {
	padding: 4px;
}

button {
	padding: 5px;
}

.search {
	margin: 10px;
}

.search > * {
	margin: 5px;
}
</style>
