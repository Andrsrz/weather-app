<template>
	<footer class="site-footer">
		<div class="icon-container" @click="goToCode">
			<span class="fas fa-code icon-child" title="Show me the code"></span>
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
.icon-container {
	display: table;
	margin: auto;
}

.icon-child {
	display: table-row;
	font-size: 25px;
	cursor: pointer;
}
</style>
