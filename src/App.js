import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import App from './App.js';
import './index.css';
import './styles/common/common.css';
import wagonContainer from './containers/wagonWheelContainer'
import createMatchContainer from './containers/createMatchContainer'

export default () => (
  <Switch>
    <Route exact path='/' component={wagonContainer} />
    <Route exact path='/creatematch' component={createMatchContainer} />
  </Switch>
)