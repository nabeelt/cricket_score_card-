import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Crick live</h1>
        </header>
        <main-container />
        <footer className="App-footer">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Crick live</h1>
          <div className="bottom-sec">
          &copy; 2018 Cricklive. All rights reserved.
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
