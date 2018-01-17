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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={()=>this.props.history.push("")}/>
          <h1 className="App-title">Crick live</h1>

    { (this.props.headerData && this.props.headerData.title)?
    <div className="match-details"> 
      <h2 className="App-title">{this.props.headerData.title}</h2>
      <h3 className="App-title">{this.props.headerData.stadium}</h3>
      <h4 className="App-title">{this.props.headerData.date}</h4></div>: null}
          {/* <h2 className="App-title">{this.props.data.match_name}</h2>
          <h3 className="App-title">{this.props.data.stadium}</h3>
          <h4 className="App-title">{this.props.data.date}</h4> */}

          {/* <button type="button" className="btn-login button" name="login" onClick={()=>this.props.history.push('/login')}>
              <span>LOGIN</span>
          </button>
          <button type="button" className="btn-login button" name="signup" onClick={()=>this.props.history.push('/signup')}>
              <span>SIGN UP</span>
          </button> */}
        </header>
         <div>{this.props.children?this.props.children:<h1>NO Layout specified</h1>}</div>
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
