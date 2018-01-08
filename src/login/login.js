import React, { Component } from 'react';
import './login.css';
import logo from '../logo.svg';



class login extends Component {
    constructor() {
        super();
        this.state = {
            username:"",
            password:""
        }
        this.doLogin = this.doLogin.bind(this);
    }

    doLogin() {}
    render(){
        return (
            <div className="login">
                
                <div className="login-wrapper">
                    <img src={logo} className="App-logo" height="100px" alt="logo" onClick={()=>this.props.history.push("")}/>
                    <h1 className="App-title">LOGIN</h1>
                    <form className="login-form" name="loginForm">
                        <div className="input-group">
                            <input type="text" className="login-input" name="username" placeholder="Enter Username"/>
                        </div>
                        <div className="input-group">
                            <input type="text" className="login-input" name="password" placeholder="Enter Password"/>
                        </div>
                        <div className="input-group">
                            <button type="submit" className="btn-submit button" name="submit">
                                <span>Login</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    
}

export default login;