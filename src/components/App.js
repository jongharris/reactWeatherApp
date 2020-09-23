import React from 'react';
import axios from 'axios';
import SearchWeather from './SearchWeather'
import WeatherDisplay from './WeatherDisplay'

class App extends React.Component {
    
    state = {weather: null};
    //to get the value from SearchWeather, pass a callback as a prop
    onSearchSubmit = async (term) => {
        //make an async call to the weather api using axios
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather',{
            params: {q: term,
            appId:'9e052bf2df21eb996bbdaab83c94e716'}
        });

        //response contains weather data
        this.setState({weather: response.data});
    }

    render() {
        return (
            <div className = "ui container">
                <SearchWeather
                    onSubmit = {this.onSearchSubmit}
                />

                <WeatherDisplay weather = {this.state.weather}/>
            </div>
        );
    }
};

export default App;