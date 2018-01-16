import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Template extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={()=>this.props.history.push("")}/>
          <h1 className="App-title">Crick live</h1>
        </header>
         <div className="content">{this.props.children?this.props.children:<h1>NO Layout specified</h1>}</div>
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

export default Template;
