//import { render } from 'react-dom';
//import Button from '../components/Button';
import React, { Component } from "react";
import { render } from "react-dom";

import ReactDropzone from "react-dropzone";
import request from "superagent";


//import ReactDropzone from 'react-dropzone';
import './DottedBox.css';

class DropZ extends Component {
onDrop = (files) => {
    const req = request.post('https://httpbin.org/post');
    files.forEach(file => {
      req.attach(file.name, file);
    });

    req.end();
  }

  render() {
    return (
      <div className="app">
        <ReactDropzone
          onDrop={this.onDrop}
        >
          Drop your image here!!
        </ReactDropzone>
      </div>
    );
  }
}
export default DropZ;
