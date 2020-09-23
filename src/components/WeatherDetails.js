import React from 'react';

const WeatherDetails = ({weatherConfig}) => {

    return (
        <div className = "ui" style = {{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1> {weatherConfig.name}</h1>
            <h2> {Math.floor(weatherConfig.temp)}</h2>
           
        </div>
    )
}

export default WeatherDetails;