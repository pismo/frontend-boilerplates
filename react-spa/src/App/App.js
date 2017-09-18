import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import {
  HomePage,
} from '../pages'

import 'normalize.css'
import './App.scss'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </Router>
)

export default App
