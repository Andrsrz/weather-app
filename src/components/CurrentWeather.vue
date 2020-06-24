<template>
<div class="weather-container">
	<div class="weather top">
		<div class="info-city">
			<span>
				<h1>{{ weather.city }}, {{ weather.country }}</h1>
			</span>
			<span>
				<h1>{{ weather.temp }} {{ weather.unit }}</h1>
				<h3>Feels like {{ weather.feels }} {{ weather.unit }}</h3>
			</span>
		</div>
		<div>
			<span>
				<h2>{{ weather.weather }}<br>{{ weather.description }}</h2>
			</span>
		</div>
	</div>
	<hr>
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
		<div class="icon">
			<span>{{ weather.icon  }}</span>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'CurrentWeather',
	props: {
		weather: Object
	},
	data() {
		return {
		}
	}
}
</script>

<style scoped>
.weather-container {
	width: 35%;
	margin: auto;
	text-align: center;
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
