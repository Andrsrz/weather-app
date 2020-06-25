class Weather{
	constructor(city, country, weather, description, icon, iconUrl, temp, feels, tempMax, tempMin, unit, lat, lon){
		this.city = city ? city : '',
		this.country = country ? country : '',
		this.weather = weather ? weather : '',
		this.description = description ? description : '',
		this.icon = icon ? icon : '',
		this.iconUrl = iconUrl ? iconUrl : '',
		this.temp = temp ? temp : '',
		this.feels = feels ? feels : '',
		this.tempMax = tempMax ? tempMax : '',
		this.tempMin = tempMin ? tempMin : '',
		this.unit = unit ? unit : '',
		this.lat = lat ? lat : '',
		this.lon = lon ? lon : ''
	}

	async fetchApi(userLocation, userUnits, geolocation){
		const URL = "https://api.openweathermap.org/data/2.5/weather?";
		const CITY = "q=";
		const LAT = "lat=";
		const LON = "&lon=";
		const KEY = "&appid=0e1e0551035f76330f3f9be79744f681";
		const UNITS = "&units=";
		const ICON_URL_LEFT = "https://openweathermap.org/img/wn/";
		const ICON_URL_RIGHT = "@4x.png";
		let actualUrl = "";

		if(geolocation.length == 0){
			actualUrl = URL + CITY + userLocation + UNITS + userUnits + KEY;
		}else{
			actualUrl = URL + LAT + geolocation[0] + LON + geolocation[1] + UNITS + userUnits + KEY;
		}

		try{
			const response = await fetch(actualUrl, { mode: 'cors' });
			const data = await response.jsion();
			this.lat = data.coord.lat;
			this.lon = data.coord.lon;
			this.city = data.name;
			this.country = data.sys.country;
			this.weather = data.weather[0].main;
			this.description = data.weather[0].description;
			this.icon = data.weather[0].icon;
			this.iconUrl = ICON_URL_LEFT + this.icon + ICON_URL_RIGHT;
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
