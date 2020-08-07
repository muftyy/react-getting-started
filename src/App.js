import React, { Component } from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Post from './Post';

class App extends Component{

  render(){
    return(
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/:post_id" component={Post}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
