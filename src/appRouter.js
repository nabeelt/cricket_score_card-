import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App.js'
import './index.css'
import login from './login/login.js'
import signup from './signup/signup.js'

export default () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/login' component={login}/>
      <Route path='/signup' component={signup}/>
    </Switch>
  </main>
)