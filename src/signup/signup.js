import React, { Component } from 'react';
import '../login/login.css';
import logo from '../logo.svg';



class signup extends Component {
    constructor() {
        super();
        this.state = {
            username:"",
            password:""
        }
        this.doSignup = this.doSignup.bind(this);
    }

    doSignup() {}
    render(){
        return (
            <div className="login">  
                <div className="login-wrapper">
                    <img src={logo} className="App-logo" height="100px" alt="logo" onClick={()=>this.props.history.push("")}/>
                    <h1 className="App-title">SIGN UP</h1>
                    <form className="login-form" name="loginForm">
                        <div className="input-group">
                            <input type="text" className="login-input" name="username" placeholder="Create Username"/>
                        </div>
                        <div className="input-group">
                            <input type="text" className="login-input" name="name" placeholder="Enter Full Name"/>
                        </div>
                        <div className="input-group">
                            <input type="email" className="login-input" name="email" placeholder="Enter Email"/>
                        </div>
                        <div className="input-group">
                            <input type="password" className="login-input" name="password" placeholder="Create Password"/>
                        </div>
                        <div className="input-group">
                            <input type="password" className="login-input" name="password" placeholder="Confirm Password"/>
                        </div>
                        <div className="input-group">
                            <button type="submit" className="btn-submit button" name="submit">
                                <span>Sign Up</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    
}

export default signup;