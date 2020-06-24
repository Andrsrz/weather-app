class Weather{
	constructor(city, country, weather, description, icon, temp, feels, tempMax, tempMin, unit){
		this.city = city ? city : '',
		this.country = country ? country : '',
		this.weather = weather ? weather : '',
		this.description = description ? description : '',
		this.icon = icon ? icon : '',
		this.temp = temp ? temp : '',
		this.feels = feels ? feels : '',
		this.tempMax = tempMax ? tempMax : '',
		this.tempMin = tempMin ? tempMin : '',
		this.unit = unit ? unit : ''
	}

	async fetchApi(userLocation, userUnits){
		const URL = "https://api.openweathermap.org/data/2.5/weather?q=";
		const KEY = "&appid=0e1e0551035f76330f3f9be79744f681";
		const UNITS = "&units=";

		try{
			let actualUrl = URL + userLocation + UNITS + userUnits + KEY;
			const response = await fetch(actualUrl, { mode: 'cors' });
			const data = await response.json();
			console.log(data);
			this.city = data.name;
			this.country = data.sys.country;
			this.weather = data.weather[0].main;
			this.description = data.weather[0].description;
			this.icon = data.weather[0].icon;
			this.temp = data.main.temp;
			this.feels = data.main.feels_like
			this.tempMax = data.main.temp_max;
			this.tempMin = data.main.temp_min;
			if(userUnits == 'metric'){
				this.unit = '°C';
			}else if(userUnits == 'imperial'){
				this.unit = '°F';
			}else{
				this.unit = '°K';
			}
		}catch(err){
			console.log("API ERROR : " + err);
		}
	}
}

export { Weather };
