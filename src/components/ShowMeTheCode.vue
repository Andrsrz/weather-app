<template>
	<footer>
		<button type="button" title="Show me the code" @click="goToCode">Code</button>
	</footer>
</template>

<script>
export default {
	name: 'ShowMeTheCode',
	methods: {
		goToCode(){
			window.open("https://github.com/Andrsrz/weather-app", "_blank");
		}
	}
}
</script>

<style scoped>
button {
	margin: 30px;
}
</style>
