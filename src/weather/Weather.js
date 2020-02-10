import React, { Component } from "react";
import '../weather/weather.css';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromJson : [],
            city: 'Kiev',
            country: 'ua',
            temp: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
      }
    componentDidMount() {
    this.fetchCounties();
    //this.fetchDegrees();
    }

    fetchCounties = () => {
        fetch('./citylist.json', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }})
        .then(response => {
            return response.json()
        })
        .then(data => {
          // Work with JSON data here
          this.setState({ fromJson: data })
        })
        .catch((err) => console.log(err))
    }

    fetchDegrees = () => {
       // fetch('http://api.openweathermap.org/data/2.5/weather?q={this.state.city},{this.state.country}&APPID=3e89317c175cab4489fe0bd735290e43', {
        const proxyurl = 'https://cors-anywhere.herokuapp.com/';  //CORS problem
        let url = 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+'&APPID=3e89317c175cab4489fe0bd735290e43'; // site that doesn’t send Access-Control-*
        fetch(proxyurl + url)
        .then(response => {
            return response.json()
        })
        .then(data => {
        //work with json here
          console.log(data.main.temp)
          this.setState({ temp: data.main.temp })
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    
    handleChange(event) {
        this.setState({city: event.target.value});
    }
    
    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.city);
        this.fetchDegrees();
        event.preventDefault();
    }

    render() { 
       
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Choose your city:
                    {[ 'name'].map(key => (
                        <select key={key} city={this.state.city} onChange={this.handleChange}>
                        {this.state.fromJson.map(({ [key]: value }) => <option key={value}>{value}</option>)}
                        </select>
                    ))}
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div>{this.state.temp}</div>
            </div>
        );
    }
}
 
export default Weather;