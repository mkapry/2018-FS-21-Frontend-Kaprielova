import React, { Component } from 'react';
//import logo from './logo.svg';
import './containers/DottedBox.css';
import FormContainer from './containers/index.js';
//import Geo from './containers/geo.js';
//import Welcome from './containers/Welcome/Welcome.js';
import DropZ from './containers/drag_and_drop.js';

class App extends Component {
  render() {
    return (
      <div className="DottedBox">
      <p className="DottedBox_content">Blog form</p>
        <FormContainer />
        <DropZ/>
      </div>
    );
  }
}

export default App;


