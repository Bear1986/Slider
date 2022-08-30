import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// I included an alternative slider here and left the other one in the src folder marked as App.js
import Alternative from './alt-slider';

ReactDOM.render(
  <React.StrictMode>
    <Alternative />
  </React.StrictMode>,
  document.getElementById('root')
);
