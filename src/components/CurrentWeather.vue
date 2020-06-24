<template>
<div class="weather-container">
	<div class="weather top">
		<div class="info-city">
			<span>
				{{ weather.city }},{{ country }}
			</span>
			<span>
				{{ temp }},{{ feels }}
			</span>
		</div>
		<div>
			<span>{{ weather }},{{ description }}</span>
		</div>
	</div>
	<hr>
	<div class="weather bottom">
		<div class="extra-info">
			<span>{{ tempMax }},{{ tempMin }}</span>
		</div>
		<div class="icon">
			<span>{{ icon  }}</span>
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
