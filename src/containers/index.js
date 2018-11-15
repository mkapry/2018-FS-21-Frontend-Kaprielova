import React, {Component} from 'react';

/* Import Components */
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button'
import './DottedBox.css';

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        about: ''
      },

    }
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName(e) {
   let value = e.target.value;
   this.setState( prevState => ({ newUser :
        {...prevState.newUser, name: value
        }
      }), () => console.log(this.state.newUser))
  }

  handleInput(e) {
       let value = e.target.value;
       let name = e.target.name;
   this.setState( prevState => ({ newUser :
        {...prevState.newUser, [name]: value
        }
      }), () => console.log(this.state.newUser))
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser, about: value
      }
      }), ()=>console.log(this.state.newUser))
  }


  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

  }

  handleClearForm(e) {

      e.preventDefault();
      this.setState({
        newUser: {
          name: '',
          about: ''
        },
      })
  }

  render() {
    return (

        <form className="DottedBox"onSubmit={this.handleFormSubmit}>

            <Input inputType={'text'}
                   title= {'Username'}
                   name= {'name'}
                   value={this.state.newUser.name}
                   placeholder = {'Enter your name'}
                   handleChange = {this.handleInput}
                  style={textStyle}


                   /> {/* Name of the user */}
          <TextArea
            title={'Blog'}
            value={this.state.newUser.about}
            name={'Info'}
            handleChange={this.handleTextArea}
            placeholder={'Describe the main idea'}



            />{/* Theme */}


          <Button
              action = {this.handleFormSubmit}
              type = {'primary'}
              title = {'Submit'}
            style={buttonStyle}
          /> { /*Submit */ }

          <Button
            action = {this.handleClearForm}
            type = {'secondary'}
            title = {'Clear'}
            style={buttonStyle}
          /> {/* Clear the form */}

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
export default FormContainer;