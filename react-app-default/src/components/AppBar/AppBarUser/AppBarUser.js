import React, { Component } from 'react'
import { injectIntl } from 'react-intl'

import { logError } from '../../../utils'
import { Checkbox } from '../../commons'
import FaGlobe from 'react-icons/lib/fa/globe'
import MdPerson from 'react-icons/lib/md/person'
// import MdNotificationsNone from 'react-icons/lib/md/notifications-none'
import MdHelpOutline from 'react-icons/lib/md/help-outline'
import MdKeyboardReturn from 'react-icons/lib/md/keyboard-return'
import './AppBarUser.scss'

const isDescendant = (parent, child) => {
  let node = child.parentNode

  while (node !== null) {
    if (node === parent) {
      return true
    }

    node = node.parentNode
  }

  return false
}

class AppBarUser extends Component {
  state = {
    isSubMenuOpen: false,
  }

  translate = id => {
    return this.props.intl.formatMessage({ id })
  }

  handleChangeLanguage = event => {
    const { uiStore } = this.props
    const language = 'pt'
    uiStore.setLanguage(language)
  }

  handleAppBarUserBlur = event => {
    const parent = document.getElementsByClassName('appbar-user')[0]
    const isChild = isDescendant(parent, event.target)

    if (this.state.isSubMenuOpen && !isChild) {
      this.setState({
        isSubMenuOpen: false,
      })
    }
  }

  componentDidMount() {
    window.addEventListener('click', this.handleAppBarUserBlur)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleAppBarUserBlur)
  }

  toggleSubMenu = () => {
    this.setState({
      isSubMenuOpen: !this.state.isSubMenuOpen,
    })
  }

  handleHelpLinkClick = () => {
    this.toggleSubMenu()
    this.props.history.push('/help')
  }

  render() {
    const { isSubMenuOpen } = this.state
    const { uiStore } = this.props
    const userEmail = 'user.email'
    const userFakeName = 'userFakeName'
    const isEnglish = false

    const commentBubbleClasses =
      'z-999 w-80 absolute top-1 right-1 lh-copy mb3 pismo-dark-blue'

    const bubbleHead = {
      width: '1em',
      height: '1em',
      background: '#eceef2',
      boxShadow: '-1px -1px 2px rgba(0, 0, 0, .2)',
      top: '0.3em',
      right: '0',
      transform: 'rotate(45deg)',
      transformOrigin: 'top right',
      position: 'absolute',
    }

    const bubbleBody = {
      top: '-1.0em',
      position: 'relative',
      background: '#eceef2',
      margin: '0',
      boxShadow: '0px 5px 8px rgba(0, 0, 0, .3)',
      borderRadius: '0.125em',
    }

    return (
      <div className="appbar-user relative">
        <MdPerson onClick={this.toggleSubMenu} className="user-btn" />
        <div
          className={`${commentBubbleClasses}
            ${isSubMenuOpen ? 'db' : 'dn'}`}
          style={{ top: '2em', right: '0em', width: '16em' }}
        >
          <div style={bubbleHead} />
          <div style={bubbleBody}>
            <div>
              <ul className="list pl0">
                <li className="bb b--white">
                  <div className="w-100 ph2 ph3-ns pv2 pv3-ns">
                    <FaGlobe className="pr2 pr3-ns" />
                    {this.translate('userMenu.english')}
                    <div className="fr">
                      <Checkbox
                        checked={isEnglish}
                        onChange={this.handleChangeLanguage}
                      >
                        {' '}
                      </Checkbox>
                    </div>
                  </div>
                </li>
                <li
                  className="hover-pismo-lighter-gray hover-bg-pismo-dark-grayish-blue bb b--white"
                  onClick={this.handleHelpLinkClick}
                >
                  <div className="w-100 ph2 ph3-ns pv2 pv3-ns pointer">
                    <MdHelpOutline className="pr2 pr3-ns" />
                    {this.translate('userMenu.help')}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AppBarUser
