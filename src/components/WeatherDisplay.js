import React from 'react';
import ImageCard from './ImageCard';
import './WeatherDisplay.css'
import WeatherDetails from './WeatherDetails'; 

const renderDetails = (weather, weatherConfig) => {
    if (weather !== null) {
        return <WeatherDetails weatherConfig = {weatherConfig} />
    }
}

const WeatherDisplay = ({weather}) =>  {   

    //configure data
    const weatherConfig = {};
    if (weather == null) {
        weatherConfig.icon = "unknown.png";
    } else {
        weatherConfig.icon = weather.weather[0].icon + '.png';
        weatherConfig.name = weather.name;
        weatherConfig.temp = weather.main.temp - 273.15;
    }
    //TO DO: Enter in the rest of weather information including city, temperature, etc
        return (
            <div className = "ui segment center">
                <ImageCard weatherConfig = {weatherConfig}/> 
                {renderDetails(weather, weatherConfig)}
            </div>
        );
     
};

export default WeatherDisplay;