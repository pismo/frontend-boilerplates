import React from 'react'
import PropTypes from 'prop-types'

import './Input.scss'

const Input = props => {
  const inputClasses = `
    input-reset
    db w-100 pa2dot5
    bb bw1
    pismo-near-black bg-pismo-light-gray b--pismo-gray
    hover-bg-white hover-b--pismo-near-black
    hover-shadow-pismo-1
    animate-all
    Input
    ${props.className}
  `

  props = {
    ...props,
    className: inputClasses,
  }

  return <input {...props} />
}

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.any,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func,
  ref: PropTypes.func,
}

Input.defaultProps = {
  className: '',
  type: 'text',
  autoFocus: false,
}

export default Input
