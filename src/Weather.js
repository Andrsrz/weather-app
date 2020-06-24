class Weather{
	constructor(city, country, weather, description, icon, temp, feels, tempMax, tempMin){
		this.city = city ? city : '',
		this.country = country ? country : '',
		this.weather = weather ? weather : '',
		this.description = description ? description : '',
		this.icon = icon ? icon : '',
		this.temp = temp ? temp : '',
		this.feels = feels ? feels : '',
		this.tempMax = tempMax ? tempMax : '',
		this.tempMin = tempMin ? tempMin : ''
	}

	async fetchApi(userLocation){
		const URL = "https://api.openweathermap.org/data/2.5/weather?q=";
		const KEY = "&appid=0e1e0551035f76330f3f9be79744f681";
		const UNITS = "&units=metric";

		try{
			let actualUrl = URL + userLocation + UNITS + KEY;
			const response = await fetch(actualUrl, { mode: 'cors' });
			const data = await response.json();
			console.log(data);
			this.city = data.name;
			console.log(this.city);
			this.country = data.sys.country;
			console.log(this.country);
			this.weather = data.weather[0].main;
			console.log(this.weather);
			this.description = data.weather[0].description;
			console.log(this.description);
			this.icon = data.weather[0].icon;
			console.log(this.icon);
			this.temp = data.main.temp;
			console.log(this.temp);
			this.feels = data.main.feels_like
			console.log(this.feels);
			this.tempMax = data.main.temp_max;
			console.log(this.tempMax);
			this.tempMin = data.main.temp_min;
			console.log(this.tempMin);
		}catch(err){
			console.log("API ERROR : " + err);
		}
	}
}

export { Weather };
