import React from 'react';
import ImageCard from './ImageCard';
import './WeatherDisplay.css'


const WeatherDisplay = ({weather}) =>  {   
    const checkIcon = () => {
        if (weather == null) {
            return 'unknown.png'
        } else {
            return weather.weather[0].icon + '.png';
        }
    }
        return (
            <div className = "ui segment center">
                <ImageCard icon = {checkIcon()}/> 

            
            </div>
        );
     
};

export default WeatherDisplay;