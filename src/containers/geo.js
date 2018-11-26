import React, {Component} from 'react';
import Button from '../components/Button';
import './DottedBox.css';

class Geo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newGeo: {
        position: ''
      },

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        navigator.geolocation.getCurrentPosition(pos) => {
            let newGeo = this.state.newGeo;
        };
    }

    //let newGeo = this.state.newGeo;
    render(){
        return(
        <form className="DottedBox"onSubmit={this.handleSubmit}>
             <Button
              action = {this.handleFormSubmit}
              type = {'primary'}
              title = {'Submit'}
              style={buttonStyle}
          /> { /*Submit */ }
          <from/>
        );
    }

  }

  const buttonStyle = {
  margin : '10px 10px 10px 10px',
  border: '5px dotted pink',
  position: 'relative'
  }

export default Geo;