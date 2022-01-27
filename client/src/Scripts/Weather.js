const axios = require("axios");

require('dotenv').config({path: ".env"});

const baseUrl = "http://api.openweathermap.org/data/2.5/weather";

class Weather{

      /**
     * Gets the weather data based on the zipcode and which temp system to converge to (imperial/metric system)
     *
     * 
     * @param {string} city This is either "imperial" (use Fahrenheit) or "metric" (use Celsius)
     * @return {JSON} The data response from the weather api call.
     */

    getWeatherData = async (city) => {
        let url = `${baseUrl}?q=${city}&units=metric&appid=aae34667ca1de378a4de3039b74d210f`
        return (await axios(url)).data;
    }


}

module.exports = Weather;