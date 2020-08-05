import React, { Component } from 'react';
import Ninjas from './Ninjas';

class AddNinja extends Component{
  state = {
      name: null,
      age: null,
      belt: null

  }

  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
  }

  handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
  }

  render(){
    return(
      <>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name"></label>
            <input type="text" id="name" onChange={this.handleChange} placeholder="name"></input>

            <label htmlFor="age" ></label>
            <input type="text" id="age" onChange={this.handleChange} placeholder="age"></input>

            <label htmlFor="belt" placeholder="name"></label>
            <input type="text" id="belt" onChange={this.handleChange} placeholder="belt"></input>

            <button>add ninja</button>
        </form>
      </>
    )
  }
}

export default AddNinja;
