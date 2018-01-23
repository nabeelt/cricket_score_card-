import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.css';
import WagonContainer from './containers/wagonWheelContainer'
import CreateMatchContainer from './containers/createMatchContainer'
import CreateWagonContainer from './containers/createWagonContainer'

export default () => (
  <Switch>
    <Route exact path='/' component={WagonContainer} />
    <Route exact path='/creatematch' component={CreateMatchContainer} />
    <Route exact path='/createwagon/:id' component={CreateWagonContainer} />
  </Switch>
)