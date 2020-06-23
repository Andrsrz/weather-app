const WeatherApi = () => {
	const URL = "https://api.openweathermap.org/data/2.5/weather?q=";
	const KEY = "&appid=0e1e0551035f76330f3f9be79744f681";
	const UNITS = "&units=metric";

	const fetchApi = async (userLocation) => {
		try{
			let actualUrl = URL + userLocation + UNITS + KEY;
			const response = await fetch(actualUrl, { mode: 'cors' });
			const data = await response.json();
			console.log(data);
			console.log(data.name);
			console.log(data.sys.country);
			console.log(data.weather[0].main);
			console.log(data.weather[0].description);
			console.log(data.weather[0].icon);
			console.log(data.main.temp);
			console.log(data.main.feels_like);
			console.log(data.main.humidity);
			console.log(data.main.temp_max);
			console.log(data.main.temp_min);
		}catch(err){
			console.log("API ERROR : " + err);
		}
	};

	return { fetchApi };
}

export { WeatherApi };
