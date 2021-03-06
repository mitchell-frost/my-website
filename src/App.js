import React, { Component } from 'react';
import About from './about';
import Projects from './projects';
import Contact from  './contact';
import Navbar from './navbar';
import Exp from  './experience';
import Blog from './blog';
import './loader';
//import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={About}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/exp" component={Exp}/>
          <Route path="/blog" component={Blog}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
