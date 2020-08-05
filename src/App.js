import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component{
  render(){
    return(
      <div>
        i am gonna print a component below
        <Ninjas name="Mufti" age="27" belt="violet"/>
      </div>
    )
  }
}

export default App;
