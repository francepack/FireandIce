import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardArea from '../CardArea/CardArea'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          <CardArea />
        </div>
      </div>
    )
  }
}

export default App;
