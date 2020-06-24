<template>
	<div id="app">
		<WeatherCom msg="This is the weather"/>
	</div>
</template>

<script>
import WeatherCom from './components/Weather.vue';
import { Weather } from './Weather.js';

let weather = new Weather();
weather.fetchApi("Ontario");

export default {
	name: 'App',
	components: {
		WeatherCom
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
