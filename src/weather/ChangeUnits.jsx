import React from 'react';

const ChangeUnits= function ChangeUnits(props){
    return <form>
     <input
              type="radio"
              value="imperial"
              checked={props.units === "imperial"}  //control whether or not a radio button is selected
              onChange={props.onChange}
            /> 
    Fahrenheit
    <input
              type="radio"
              value="metric"
              checked={props.units === "metric"}
              onChange={props.onChange}
            />
    Celcius        
    <input
              type="radio"
              value=""
              checked={props.units === ""}
              onChange={props.onChange}
            />
     Kelvin
</form>
}
export default ChangeUnits;