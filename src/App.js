import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <img src={logo} className="logo" alt="Logo Image" />
        <div className="navigation-sub">
          <li href="" className="item">Projects</li>
          <li href="" className="item">About</li>
        </div>
      </div>
    </div>
  );
}

export default App;
