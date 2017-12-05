import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AppBarButton extends Component {
  render() {
    const { className, onClick, title, children } = this.props

    return (
      <div
        className={'app-bar-button noselect pointer dib ' + className}
        onClick={onClick}
        title={title}
      >
        {children}
      </div>
    )
  }
}

AppBarButton.proptypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
}

AppBarButton.defaultProps = {
  title: '',
  onClick: () => {},
}
