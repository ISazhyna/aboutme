import React, { Component } from 'react';
import ComponentAlphabet from './ComponentAlphabet';

const ContainerAlphabet = ( props) => {
  return (
    <div className="App">
      <ComponentAlphabet options={props.options}/>
    </div>
  );
};
export default ContainerAlphabet;