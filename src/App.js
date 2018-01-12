import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import App from './App.js';
import './index.css';
import WagonContainer from './containers/wagonWheelContainer'

export default () => (
  <Switch>
    <Route path='/' component={WagonContainer} />
  </Switch>
)