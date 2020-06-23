import Vue from 'vue';
import App from './App.vue';
import { WeatherApi } from './weather-api.js';

let weather = WeatherApi();
weather.fetchApi("Toronto");

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
