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
        borderRadius:'10px',
        boxShadow : '1px 2px 10px rgba(0, 0, 0, .2)',
        width:'200px',
        margin:'20px'
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
        return(
         <>
        <Typography sx={{ maxWidth: 100 }} align = "left" variant="h3" color="text.secondary" gutterBottom>
            {Math.trunc(JSON.stringify(weatherData.main['temp']))} 
        </Typography>
        <Typography sx={{ maxWidth: 200 }} align = "left" variant="h6" color="text.secondary" gutterBottom>
            {JSON.stringify(weatherData.weather[0].main).replace(/['"]+/g, '')} 
        </Typography>
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