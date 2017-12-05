import React, { Component } from 'react'
import AppBarUser from './AppBarUser'
import MdKeyboardArrowLeft from 'react-icons/lib/md/keyboard-arrow-left'

import './AppBar.scss'

class AppBar extends Component {
  render() {
    // const { uiStore } = this.props

    return (
      <div
        className="AppBar w-100 shadow-2 bg-pismo-darker-blue white"
        style={{
          height: '48px',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div className="app-menu-left">
        </div>
        <div className="app-menu-right">
          <nav className="fr">
            <div className="fr ph3">
              <AppBarUser />
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default AppBar
