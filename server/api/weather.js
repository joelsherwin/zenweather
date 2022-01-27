const axios = require("axios");
const WEATHER = require("../models/Weather");

require('dotenv').config({path: "./../../../.env"});

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
        let url = `${baseUrl}?q=${city}&units=metric&appid=${process.env.WEATHERKEY}`
       
        
        return (await axios(url)).data;
    }


    //SAVE AND RETRIEVE FROM MONGO

    saveWeatherDataToMongo = async(city, data) =>{
        const filter = {
            city : city    
        }

        const replace = {
            ...filter,
            ...data,
            data : Date.now()
        }

        await this.findOneReplace(filter,replace);
    }

    getWeatherDataFromMondo = async(city)=>{
        return WEATHER.findOne({cityName : city});
    }

    async findOneReplace(filter, replace) {
        await WEATHER.findOneAndReplace(filter, replace, {new: true, upsert: true});
    }

}

module.exports = Weather;