const express = require('express');
const router = express.Router();
const Weather = require("./weather");

router.get("/weather", async(req,res)=>{
    let weather = new Weather();

    let weatherData = await weather.getWeatherData("chennai");

    res.header("Content-type",'application/json');
    res.send(JSON.stringify(weatherData,null,4));  
});

router.post("/weather", async(req,res)=>{
    let weather = new Weather();
    const city = req.body;
    let weatherData = await weather.getWeatherData(city);

    res.header("Content-type",'application/json');
    res.send(JSON.stringify(weatherData,null,4));  
});


module.exports = router;
