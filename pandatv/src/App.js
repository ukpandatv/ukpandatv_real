import React, { Component } from "react";
import Home from "./Components/Home/";
import Footer from "./Components/Home/Footer.js";
import Contact from "./Components/Home/Contact.js";
import { Router, Route, Switch } from "react-router";

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
      <Home></Home>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
}
