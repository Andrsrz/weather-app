<template>
<div class="weather-container">
	<div class="weather top">
		<div class="info-city">
			<span>
				<h1>{{ weather.city }}, {{ weather.country }}</h1>
			</span>
			<span>
				<h1>{{ weather.temp }} {{ weather.unit }}</h1>
				<h4>Feels like {{ weather.feels }} {{ weather.unit }}</h4>
			</span>
		</div>
		<div class="icon">
			<span>
				<img v-bind:src="weather.iconUrl" />
			</span>
		</div>
	</div>
	<div class="weather bottom">
		<div class="extra-info">
			<span>
				<h3>
					Max : {{ weather.tempMax }} {{ weather.unit }}
					<br>
					Min : {{ weather.tempMin }} {{ weather.unit }}
				</h3>
			</span>
		</div>
		<div>
			<span>
				<h2>{{ weather.weather }}</h2>
				<h4>{{ weather.description }}</h4>
			</span>
		</div>
	</div>
	<button type="button" title="Change Units" @click="changeUnits">
		<span class="fas fa-exchange-alt"></span>
	</button>
</div>
</template>

<script>
export default {
	name: 'CurrentWeather',
	props: {
		weather: Object
	},
	methods: {
		changeUnits(){
			if(this.weather.unit == '°C'){
				this.weather.fetchApi(this.weather.city, 'imperial');
			}else{
				this.weather.unit = '°C';
				this.weather.fetchApi(this.weather.city, 'metric');
			}
		}
	}
}
</script>

<style scoped>
.weather-container {
	width: 35%;
	margin: auto;
	text-align: center;
	border-radius: 5px;
	border: 2px solid #333;
	padding: 10px;
	background-color: #98B4D4;
}

.weather {
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
}

.weather {
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
}

@media all and (max-width: 1500px){
	.weather-container {
		width: 50%;
	}
}

@media all and (max-width: 800px){
	.weather-container {
		width: 75%;
	}
}
</style>
