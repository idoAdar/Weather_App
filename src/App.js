import React, { Component } from 'react';
import './App.css';
import Title from './Components/TitleComponent/TitleComponent';
import Form from './Components/FormComponent/FormComponent';
import Weather from './Components/WeatherComponent/WeatherComponent';

class App extends Component {
  state = {
    temperature: undefined,
    country: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    status: false,
  }
  API_Key = '4f8037d3cfd003f74032799667afb5ca'; // from api.openweathermap.com

  getRequest = (e) => {
    e.preventDefault();
    const cityInput = e.target.elements.city.value;
    const countryInput = e.target.elements.country.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput},${countryInput}&appid=${this.API_Key}`)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      try {
        console.log(data);
        this.setState({
          temperature: data.main.temp,
          country: data.sys.country,
          city: data.name,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          status: true
        });
        console.log(this.state);
      } catch(e) {
          console.log(e);
      }
    })

    // Async / Await method:
    // const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput},${countryInput}&appid=${this.API_Key}`);
    // console.log(apiCall);
    // const dataRecived = await apiCall.json();
    // console.log(dataRecived);
  };

  clearFunc = (e) => {
    e.preventDefault();
    this.setState({
      status: false
    })
  }

  render() {
    return (
      <div className="container">
        <div>
        <Title />
        </div>
        <div>
        <Form 
          getRequestFunc={this.getRequest}
          clear={this.clearFunc}
          status={this.state.status}/>
        <Weather 
          temperature={this.state.temperature} 
          country={this.state.country} 
          city={this.state.city} 
          humidity={this.state.humidity} 
          description={this.state.description} 
          status={this.state.status}/>
        </div>
      </div>
    );
  }
}

export default App;