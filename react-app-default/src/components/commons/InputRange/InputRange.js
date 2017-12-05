import React, { Component } from 'react'
import './InputRange.scss'

export default class  extends Component {
  render() {
    return (
      <div className="InputRange">
        <input type="range" {...this.props} />
      </div>
    )
  }
}
