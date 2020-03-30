import React, { Component } from 'react';
import Converter from "./component/Сonverter";
import Weather from "./weather/Weather";
import ComponentAlphabet from "./spelling/ComponentAlphabet"

class Useful extends Component {
    render() { 
        return (
        <div>
        <Converter/>
        <Weather />
        <ComponentAlphabet />
      </div>
      );
    }
}
 
export default Useful;