import React, {Component} from 'react';

/* Import Components */
//import Input from '../components/Input';
//import TextArea from '../components/TextArea';
import Button from '../components/Button/Button';
import './DottedBox.css';

class FormContainer extends Component {
  constructor(props) {
    //const BlogId = props.id;
    super(props);
    this.state = {
    newBlog:{
        name: window.localStorage.getItem('name'),
        about: ''
        },
     }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAboutChange = this.handleAboutChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    }

   handleNameChange(e) {
   let value = e.target.value;
   this.setState( prevState => ({ newBlog :
        {...prevState.newBlog, name: value
        }
      }), () => console.log(this.state.newBlog))
  }


    handleAboutChange(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newBlog: {
        ...prevState.newUser, about: value
      }
      }), ()=>console.log(this.state.newBlog))
  }


   handleFormSubmit(e) {
    e.preventDefault();
    //let BlogData = this.state.newBlog;
    //window.localStorage.setItem(this.props.id, JSON.stringify(BlogData));
    let BlogData = new FormData();
		BlogData.append('name', this.state.name);
		BlogData.append('about', this.state.about);
		fetch('http://localhost:8000/create', {
		  method: 'POST',
		  body: BlogData
		}).then(response => response.json())
		.then(response => console.log('Success:', JSON.stringify(response)))
		.catch(error => console.error('Error:', error));
  }

  render() {
    return (

        <form className="DottedBox"onSubmit={this.handleSubmit}>
                <div>New Blog</div>
            <input  className="form-control"
                   title= {'Username'}
                   name= {'name'}
                   value={this.state.name}
                   placeholder = {'Enter your name'}
                   onChange = {this.handleNameChange}
                   style={textStyle}


                   /> {/* Name of the user */}
          <input className="form-control"
            title={'Blog'}
            value={this.state.about}
            name={'Info'}
            onChange={this.handleAboutChange}
            placeholder={'Describe the main idea'}



            />{/* Theme */}


          <Button
              action = {this.handleFormSubmit}
              type = {'primary'}
              title = {'Submit'}
            style={buttonStyle}
          /> { /*Submit */ }

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