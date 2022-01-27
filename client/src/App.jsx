
import React, {Component} from 'react';
import './Stylesheets/App.css';
import Weather from "./Scripts/Weather.js"
import WeatherCard from "./Components/WeatherCard.jsx"
import Header from "./Components/Header.jsx"
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';

const LOCAL_STORAGE_KEY = 'cityLocations';

function saveToLocalStorage(locations){
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(locations));
}

function readFromLocal(locations){
  const storedLocations = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedLocations ? JSON.parse(storedLocations) : [];
}
function App () { 
  
  const [weatherLocations, setWeatherLocations] = React.useState(readFromLocal());

  const handleAddClick = ()=>{
    setWeatherLocations([...weatherLocations, ""]);  
  }

  
  const updateLocations = locations => {
    setWeatherLocations(locations);
    saveToLocalStorage(locations);
};

const removeAtIndex = index => () =>
    updateLocations(weatherLocations.filter((_, locationIndex) => locationIndex !== index));

const updateAtIndex = index => updatedLocation =>
    updateLocations(
        weatherLocations.map((location, locationIndex) => (locationIndex === index ? updatedLocation : location)),
    );

const canAddOrRemove = React.useMemo(() => weatherLocations.every(location => location !== ""), [weatherLocations]);
    return (
        <div className="App">
          <Header></Header>
          <span></span>
          <div id="container" style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
          {weatherLocations.map((location, index) => (
                    <div key={location} item>
                        <WeatherCard
                            location={location}
                            canDelete={!location || canAddOrRemove}
                            onDelete={removeAtIndex(index)}
                            onUpdate={updateAtIndex(index)}
                        />
                    </div>
                ))}
        </div>
          <Fab
                onClick={handleAddClick}
                aria-label="add weather location"

                color="secondary"
            ></Fab>
        </div>
    );
  
}

export default App;