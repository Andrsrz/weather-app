<template>
	<main id="app">
		<WeatherCom />
		<ShowMeTheCode />
	</main>
</template>

<script>
import WeatherCom from './components/Weather.vue';
import ShowMeTheCode from './components/ShowMeTheCode.vue';

export default {
	name: 'App',
	components: {
		WeatherCom,
		ShowMeTheCode
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
