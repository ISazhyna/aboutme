import React, { Component } from 'react';
import Converter from "./component/Сonverter";
import Weather from "./weather/Weather";

class Useful extends Component {
    render() { 
        return (
        <div>
        <Converter/>
        <Weather />
      </div>
      );
    }
}
 
export default Useful;