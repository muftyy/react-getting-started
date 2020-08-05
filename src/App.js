import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component{
  state = {
    ninjas : [
      {name: 'Ryu', age: 30, belt: 'pink', id: 1},
      {name: 'Mario', age: 66, belt: 'red', id: 2},
      {name: 'Luigi', age: 34, belt: 'blue', id: 3}
    ]
  }

  addNinja = (newNinja) => {
    newNinja.id = Math.random();
    let ninjas = [...this.state.ninjas, newNinja];
    this.setState({
      ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninjas => ninjas.id !== id);
    this.setState({
      ninjas
    })
  }

  render(){
    return(
      <div>
        <AddNinja addNinja={this.addNinja}/>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
      </div>
    )
  }
}

export default App;
