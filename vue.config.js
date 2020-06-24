module.exports = {
	publicPath: '/weather-app/',
	chainWebpack: config => {
		config
		.plugin('html')
		.tap(args => {
			args[0].title = 'Weather Forecast'
			return args
		})
	}
}
