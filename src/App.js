import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Base from './Base'


import React, { Component } from 'react'

export default class App extends Component {

  constructor(){ 
 super();
  this.game = {
    user: null,
    chickens:{
      1: 'betsy',
      2: 'Germy'
    },
    name: 'Kamaree',
  }
  }

  render() {




    return (
      <div>
        <Nav></Nav>
        <h1>First Reaction to React!</h1>
        <h2>Let's try using a different function and calling it!</h2>
        <Base></Base>
      </div>
      

    )
  }
}
