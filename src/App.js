import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component{
  state = {
    ninjas : [
      {name: 'Ryu', age: 30, belt: 'pink', id: 1},
      {name: 'Mario', age: 66, belt: 'red', id: 2},
      {name: 'Luigi', age: 34, belt: 'blue', id: 3}
    ]
  }

  render(){
    return(
      <div>
        i am gonna print a component below
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    )
  }
}

export default App;
