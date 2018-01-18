import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Template extends Component {
  constructor (props){
    super(props);
    this.state = {
      data:{}
    }
  }


  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" onClick={()=>this.props.history.push("")}/>
          <h1 className="app-title">Crick live</h1>

    { (this.props.headerData && this.props.headerData.title)?
    <div className="match-details"> 
      <h2 className="app-title">{this.props.headerData.title}</h2>
      <h3 className="app-title">{this.props.headerData.stadium}</h3>
      <h4 className="app-title">{this.props.headerData.date}</h4></div>: null}
        </header>
         <div>{this.props.children?this.props.children:<h1>NO Layout specified</h1>}</div>
        <footer className="app-footer">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Crick live</h1>
          <div className="bottom-sec">
          &copy; 2018 Cricklive. All rights reserved.
          </div>
        </footer>
      </div>
    );
  }
}

export default Template;
