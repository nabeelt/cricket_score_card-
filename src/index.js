import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router-dom';
import Main from './appRouter.js'

ReactDOM.render((
  <BrowserRouter>
    <Main />
  </BrowserRouter>
), document.getElementById('root'))
