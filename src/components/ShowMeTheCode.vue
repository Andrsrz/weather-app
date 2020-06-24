<template>
	<footer>
		<div @click="goToCode">
			<span class="fas fa-code icon" title="Show me the code"></span>
		</div>
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
.icon {
	margin: 30px;
	font-size: 25px;
	cursor: pointer;
}
</style>
