<template>
<div class="weather-container">
	<div class="weather top">
		<div class="info-city">
			<span>
				{{ weather.city }},{{ weather.country }}
			</span>
			<span>
				{{ weather.temp }},{{ weather.feels }}
			</span>
		</div>
		<div>
			<span>{{ weather.weather }},{{ weather.description }}</span>
		</div>
	</div>
	<hr>
	<div class="weather bottom">
		<div class="extra-info">
			<span>{{ weather.tempMax }},{{ weather.tempMin }}</span>
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
</style>
