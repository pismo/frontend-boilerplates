import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loader from '../commons/Loader'

import './ModalWait.scss'

export default class ModalWait extends Component {
  render() {
    return (
      <div className="ModalWait">
        <div className="ModalWait__Wrapper">
          <div className="ModalWait__Content">
            <Loader color="white" />
          </div>
        </div>
      </div>
    )
  }
}
