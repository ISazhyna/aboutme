import React, { Component } from 'react';
import Autocomplete from './Autocomplete';

const AutoComplete = ( props) => {
  return (
    <div className="App">
      <Autocomplete options={props.options}/>
    </div>
  );
};
export default AutoComplete;