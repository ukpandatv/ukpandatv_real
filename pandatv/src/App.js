import React, { Component } from "react";
import Home from "./Components/Home/";
import Footer from "./Components/Home/Footer.js";
import Contact from "./Components/Contact/Contact.js";
import { BrowserRouter as  Router, Route, Switch, Link,} from "react-router-dom";
import Navigation from './Components/Navbar.js';
import Videos from './Components/Videos/Videos.js';

import './App.css';



export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      "videos": [],
      "isLoading": true,
      "error": ''
    }
  }

  render(){

  return (
    <div className="App">
      <Router >
        <div>
        <Navigation></Navigation>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Videos' component={Videos} />
        </Switch>
        <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}
}
