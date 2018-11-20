import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Button from '../components/Button';

import ReactDropzone from 'react-dropzone';
import './DottedBox.css';

class DropZ extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  onDrop = (files) => {
    this.setState({
      files: this.state.files,
     });
  }


  handleFormSubmit(e) {
    e.preventDefault();
    let ImgData = this.state;

  }


  render(){  return (
      <div className="DottedBox">
        <ReactDropzone
          accept="image*"
          onDrop={this.onDrop}
        >
          Drop an image!
        </ReactDropzone>

        {this.state.files.length > 0 ? <div>
    <h2>Uploading {this.state.files.length} files...</h2>
    <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
    </div> : null}

         <Button
              action = {this.handleDropSubmit}
              type = {'primary'}
              title = {'Submit'}
              style={buttonStyle}
          /> { /*Submit */ }

      </div>
    );
    }


}
const previewStyle = {
      display: 'inline',
      width: 100,
      height: 100,
    };
const buttonStyle = {
  margin : '10px 10px 10px 10px',
  border: '5px dotted pink',
  position: 'relative'
}
export default DropZ;