import React, { Component } from "react";
import Home from "./Components/Home/";

import Contact from "./Components/Contact/Contact.js";
import { BrowserRouter as  Router, Route, Switch, Link,} from "react-router-dom";
import Navigation from './Components/Navbar.js';
import Videos from './Components/Videos/Videos.js';
import Radio from './Components/Radio/Radio.js';
import News from './Components/News/News.js';
import './App.css';
import ReactPageScroller from 'react-page-scroller';

// Multi language solution. Chinese translation required.
// https://medium.com/@jishnu61/6-easy-steps-to-localize-your-react-application-internationalization-with-i18next-8de9cc3a66a1

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
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
            <Route path='/News' component={News} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
}
