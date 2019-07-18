import React, { Component } from "react";
import Home from "./Components/Home/";
import Footer from "./Components/Home/Footer.js";
import Contact from "./Components/Contact/Contact.js";
import { BrowserRouter as  Router, Route, Switch, Link,} from "react-router-dom";
import Navigation from './Components/Navbar.js';
import Videos from './Components/Videos/Videos.js';
import Radio from './Components/Radio/Radio.js';
import './App.css';



export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      "videos": [],
      "isLoading": true,
      "error": '',
      "categories": ["food","travel","living","europe","london","china"]
    }
  }

  render(){

  return (
    <div className="App">
      <Router>
        <div>
          <Navigation></Navigation>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Contact' component={Contact} />
            <Route path='/Videos' component={Videos} />
            <Route path='/Radio' component={Radio} />
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}
}
