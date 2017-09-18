import React from 'react'
import { childrenPropType } from '../../../constants'

const Button = ({ children }) => (
  <button type="button">{children}</button>
)

Button.propTypes = {
  children: childrenPropType,
}

Button.defaultProps = {
  children: '',
}

export default Button
