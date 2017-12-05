import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { getBaseAPIURL } from '../utils'
import i18n from '../i18n'
import { AppBar } from '../components'
import { connect } from 'react-redux'
import PismoID, { withPismoAuth } from 'pismo-id'
import {
  Home,
} from './../pages'

import {
  updateUser,
} from './../redux-ducks/user/user'

import 'normalize.css'
import 'tachyons'
import './App.scss'


class App extends Component {

  handleUserChanged = user => {
    this.props.dispatch(updateUser(user))
  }

  render() {
    const baseAPIURL = getBaseAPIURL()
    const lang = 'pt'

    return (
      <IntlProvider locale="pt" messages={i18n[lang]}>
        <PismoID onUpdate={this.handleUserChanged} baseURL={baseAPIURL} keepAlive>
          <div className="App__Inner">
            <Router>
              <div>
                <AppBar />
                <Switch>
                  <Route exact path="/" component={Home} />
                </Switch>
              </div>
            </Router>
          </div>
        </PismoID>
      </IntlProvider>
    )
  }
}

const mapStateToProps = (props) => ({
  props,
})

export default connect()(App)
