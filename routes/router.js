var express = require("express");
var weatherRequest = require("../controllers/weather-request.js");
var iconMapping = require("../controllers/weather-mapping.js");
var router = express.Router();
var queryPathPrefix = "/data/2.5";

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var hours, minutes;

router.get("/weather", function (req, res, next) {
	if (!req.query.city)
		return next(new Error("Improper query"));
	var queryPath = queryPathPrefix + "/weather" + "?q=" + encodeURIComponent(req.query.city);
	//console.log(queryPath);
	weatherRequest(queryPath, function (data, err) {
		if (err)
			return next(new Error(err));
		else if (!data.weather || !data.name)
			res.send(data.message || "City not found");
		else {
			var time = new Date(data.dt*1000);
			hours = time.getHours();
			minutes = "0" + time.getMinutes();
			amPm = (Math.floor(hours / 12) == 0) ? " AM" : " PM";
			hours = (hours == 0) ? "012" : "0" + String(hours % 12);
			time = days[time.getDay()] + " " + hours.substr(-2) + ":" + minutes.substr(-2) + amPm;
			res.render("weather", {
				"iconName": iconMapping[data.weather[0].icon],
				"city": data.name,
				"time": time,
				"weatherDescription": data.weather[0].description,
				"temperature": data.main.temp,
				"maxTemperature": data.main.temp_max,
				"minTemperature": data.main.temp_min,
				"humidity": data.main.humidity,
				"rain": (data.rain) ? data.rain["3h"] : 0,
				"snow": (data.snow) ? data.snow["3h"] : 0,
				"windSpeed": data.wind.speed,
				"gustSpeed": data.wind.gust,
				"windDirection": data.wind.deg,
				"pressure": data.main.pressure
			});
		}
	});

});

module.exports = router;