import React, { Component } from "react";
import Home from "./Components/Home/";
import Footer from "./Components/Home/Footer.js";
import Contact from "./Components/Home/Contact.js";
import {BrowserRouter as  Router, Route, Switch, Link,} from "react-router-dom";
// import Footer from './Components/Home/Footer.js';
// import Contact from './Components/contact.js';

import './App.css';



export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){

  return (
    <div className="App">
      <Router >
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/Contact'} className="nav-link">Contact</Link></li>

          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Contact' component={Contact} />
        </Switch>
        <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}
}
