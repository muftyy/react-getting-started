import React, { Component } from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';

class App extends Component{

  render(){
    return(
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    )
  }
}

export default App;
