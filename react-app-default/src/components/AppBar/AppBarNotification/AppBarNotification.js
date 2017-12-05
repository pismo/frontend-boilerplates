import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MdNotifications from 'react-icons/lib/md/notifications'
import './AppBarNotification.scss'

class AppBarNotification extends Component {
  render() {
    const { hasNotifications } = this.props

    if (hasNotifications) {
      return (
        <div className="notifications-bubble">
          <MdNotifications
            className="notifications-btn"
            alt="You have unread notifications"
          />
        </div>
      )
    } else {
      return (
        <MdNotifications
          className="notifications-btn"
          alt="You don't have new notifications"
        />
      )
    }
  }
}

AppBarNotification.proptypes = {
  hasNotifications: PropTypes.bool,
}

AppBarNotification.defaultProps = {
  hasNotifications: false,
}

export default AppBarNotification
