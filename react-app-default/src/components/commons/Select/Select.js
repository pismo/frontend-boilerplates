import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Select.scss'

const classesNames = `
Select
input-reset
db w-100 center pa2dot5
bb bw1
pismo-near-black bg-pismo-light-gray b--pismo-gray
hover-bg-white hover-b--pismo-near-black
hover-shadow-pismo-1
animate-all
pointer
br0
`

export default class Select extends Component {
  render() {
    const props = this.props
    const { id, label, children } = props

    const classNames = [
      'Select',
      props.disabled ? 'Select--disabled' : '',
    ].join(' ')

    return (
      <div className={classNames}>
        {label && (
          <label htmlFor={id} className="Label">
            {label}
          </label>
        )}
        <div className="select-wrapper">
          <select name={id} className={classesNames} {...props}>
            {children}
          </select>
        </div>
      </div>
    )
  }
}

Select.protoType = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
}
