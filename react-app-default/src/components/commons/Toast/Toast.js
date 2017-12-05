import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import MdCheckCircle from 'react-icons/lib/md/check-circle'
import MdError from 'react-icons/lib/md/error'
import MdWarning from 'react-icons/lib/md/warning'

import './Toast.scss'

const TOAST_DURATION = 5000

class Toast extends Component {
  static propTypes = {
    message: PropTypes.string,
    style: PropTypes.string,
    isVisible: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    isVisible: false,
    style: 'success',
  }

  constructor(props) {
    super(props)
    this._timeout = null
  }

  dismissToast = () => {
    const { message, isVisible, dispatch } = this.props

    if (!isVisible || (!message || !message.length)) {
      return false
    }

    this.clearTimeout()
    // return dispatch(dismissToast())
  }

  clearTimeout() {
    window.clearTimeout(this._timeout)
    this._timeout = null
  }

  handleClick = () => {
    return this.dismissToast()
  }

  componentDidUpdate(prevProps) {
    const { isVisible: wasVisible, message: previousMessage } = prevProps
    const { isVisible, message } = this.props

    if (
      (!wasVisible && isVisible) ||
      (wasVisible && isVisible && previousMessage !== message)
    ) {
      this._timeout = window.setTimeout(this.dismissToast, TOAST_DURATION)
    }
  }

  render() {
    const { isVisible, message, style } = this.props

    const defaultBubbleClasses = `
      absolute
      br-pill
      shadow-pismo-1
      pointer
      animate-all
      Toast
    `

    const bubbleClasses = classnames(defaultBubbleClasses, {
      'bottom-1 o-100': isVisible,
      'bottom--6 o-30': !isVisible,
      'bg-pismo-dark-blue': !style || !style.length || style === 'success',
      'bg-pismo-orange': style === 'warning',
      'bg-pismo-pink': style === 'error',
    })

    const iconClasses = 'f3 f2-ns white Icon'
    const messageClasses = 'f7 f6-ns white fw1 Message'

    let icon

    switch (style) {
      case 'error':
        icon = <MdError />
        break
      case 'warning':
        icon = <MdWarning />
        break
      case 'success':
      default:
        icon = <MdCheckCircle />
    }

    return (
      <div className={bubbleClasses} onClick={this.handleClick}>
        <div className={iconClasses}>{icon}</div>
        <div className={messageClasses}>{message}</div>
      </div>
    )
  }
}

export default Toast
