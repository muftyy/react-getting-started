import React, { Component } from 'react';

class AddNinja extends Component{
  state = {
      name: '',
      age: '',
      belt: ''

  }

  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
  }

  handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNinja(this.state);
        this.setState({
          name: '',
          age: '',
          belt: ''
        })
  }

  render(){
    return(
      <>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name"></label>
            <input type="text" id="name" onChange={this.handleChange} placeholder="name" value={this.state.name}></input>

            <label htmlFor="age" ></label>
            <input type="text" id="age" onChange={this.handleChange} placeholder="age" value={this.state.age}></input>

            <label htmlFor="belt" placeholder="name"></label>
            <input type="text" id="belt" onChange={this.handleChange} placeholder="belt" value={this.state.belt}></input>

            <button>add ninja</button>
        </form>
      </>
    )
  }
}

export default AddNinja;
