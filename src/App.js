import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Please enter your name',
            text: 'Please enter the text'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
    this.setState({value: event.target.value});
    }

    handleSubmit(event) {
    alert('A blog was created: ' + this.state.text);
    event.preventDefault();
    }

    render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
          <input type="text" value={this.state.text} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
    }
}

export default Blog;
