import React, { Component } from 'react';
import './WeatherComponent.css';

class Weather extends Component {
    render() {
        let showWeather = null;
        if (this.props.status) {
            showWeather = 
            <div className="results">
                <p>Location: {this.props.city}, {this.props.country}</p>
                <p>Temperature: {this.props.temperature}</p>
                <p>Humidity: {this.props.humidity}</p>
                <p>Conditions: {this.props.description}</p>
            </div>
        } else {
            showWeather = null;
        }

        return (
            <React.Fragment>
            {showWeather}
            </React.Fragment>
        )
    }
}

export default Weather;