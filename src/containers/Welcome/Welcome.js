import React from 'react';
import './Welcome.css';
import Button from './Button';

class Welcome extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newUser:{
            name: window.localStorage.getItem('name')
            },

        }
    this.handleClick=this.handleClick.bind(this);
    this.handleInput=this.handleInput.bind(this);
    }


    handleInput(e) {
       let value = e.target.value;
    this.setState( prevState => ({ newUser :
        { name: value
        }

      }), () => console.log(this.state.newUser))
    }

    handleClick(e) {
    const name = this.state.newUser.name;
    let formData = new FormData();
    formData.append('name', name);
    e.preventDefault();

    }


render() {
    const username = this.state.name;
    return (
        <form className="Welcome"onSubmit={this.handleClick}>
            <div>Welcome</div>

            <input className="Welcome"
                   title= {'Username'}
                   //value={this.state.newUser.name}
                   placeholder = {'Enter your name'}
                   handleChange = {this.handleInput}
                   style={textStyle}
            />{/* Username */}

            <Button
              action = {this.handleClick}
              type = {'primary'}
              title = {'Submit'}
              style={buttonStyle}
            /> {/* login button */}

        </form>
         );

}
}

const buttonStyle = {
  margin : '10px 10px 10px 10px',
  border: '5px dotted pink',
  position: 'relative'
}

const textStyle = {
  margin : '30px 10px 30px 10px',
  border: '5px dotted pink',
  position: 'center'
}
export default Welcome;