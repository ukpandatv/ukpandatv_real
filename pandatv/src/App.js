import React, { Component } from 'react';

import Home from './Components/Home/';

import styled from 'styled-components';
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
    </div>
  );
}
}
