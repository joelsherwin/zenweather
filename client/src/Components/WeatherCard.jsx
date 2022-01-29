import React from "react";
import Weather from "../Scripts/Weather"
import { makeStyles } from "@mui/styles";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LocationEntry from "./LocationEntry";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from '@mui/material/CardMedia';
import { borderRadius } from "@mui/system";
require('dotenv').config({path: "./../../../.env"});


const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: 'white',
        borderRadius:'30px',
        boxShadow : '-6px -6px 20px rgba(255,255,255,1), 6px 6px 20px rgba(0,0,0,0.1)',
        width:'250px',
        margin:'20px',
        padding:'10px'
    },
    content: { flex: 1 },
}));

function CityDisplay(props){
    return(
    <Typography align = "left" variant="h6" color="text.secondary">
        {props.location}
    </Typography>
    );    
}



function WeatherDisplay({weatherData}){

    if(weatherData.main !== undefined){
        var iconURL = "https://openweathermap.org/img/wn/" + JSON.stringify(weatherData.weather[0].icon).replace(/['"]+/g, '') + "@2x.png";
        return(
         <>
         <div style={{display:"flex"}}>
            <div style={{width:"80%"}}>
                <Typography sx={{ maxWidth: 200 }} align = "left" variant="h3" color="text.secondary">
                    {Math.trunc(JSON.stringify(weatherData.main['temp']))}°C
                </Typography>
                <Typography sx={{ maxWidth: 200 }} align = "left" variant="h5" color="text.secondary" gutterBottom>
                    {JSON.stringify(weatherData.weather[0].main).replace(/['"]+/g, '')} 
                </Typography>
                <Typography sx={{ maxWidth: 200 }} align = "left" variant="body2" color="text.secondary">
                    Humidity {Math.trunc(JSON.stringify(weatherData.main['humidity']))} %
                </Typography>
            </div> 
            <div style={{float:"right", marginTop:"-15px"}}>
                <img src={iconURL}></img>
            </div>
        </div>
        </>  
        );  
    }
    else{
        return(
        <Typography sx={{ maxWidth: 100 }} align = "left" variant="h3" color="text.secondary" gutterBottom>
            29F
        </Typography>
        );      
    }
     
}



function WeatherCard({ location, canDelete, onDelete, onUpdate }){
    const classes = useStyles();
    const [weatherData, setWeatherData] = React.useState({});
    React.useEffect(() => {
        const weatherObj = new Weather();
        const weatherPromise = weatherObj.getWeatherData(location); 
        weatherPromise.then(response=>{
            return response;
        }).then(data=>setWeatherData(data))
    }, [location]);
    
    return(
        <>
            <Card className={classes.root} >
            <CardContent className={classes.content} >
                {!location && <LocationEntry onUpdate={onUpdate} />}
                <CityDisplay location = {location}/> 
                {location && <WeatherDisplay weatherData = {weatherData}/>}    
                

            </CardContent> 
            <CardActions>
                <Button disabled={!canDelete} onClick={onDelete} size="small" color="primary">
                    Remove
                </Button>
            </CardActions>
         </Card>  
        </>
    );

}

export default WeatherCard;