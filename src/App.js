import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={()=>this.props.history.push("")}/>
          <h1 className="App-title">Crick live</h1>
          <button type="button" className="btn-login button" name="login" onClick={()=>this.props.history.push('/login')}>
              <span>LOGIN</span>
          </button>
          <button type="button" className="btn-login button" name="signup" onClick={()=>this.props.history.push('/signup')}>
              <span>SIGN UP</span>
          </button>
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
