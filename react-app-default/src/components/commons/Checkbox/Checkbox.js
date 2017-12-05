import React from 'react'
import PropTypes from 'prop-types'
import { childrenPropType } from '../../../constants'

import './Checkbox.scss'

const Checkbox = props => {
  const labelChildren = props.children
  const checkboxProps = {
    ...props,
    children: null,
  }

  const id = `checkbox-toggle-${checkboxProps.id}`

  return (
    <div className="dib v-mid Checkbox">
      <input {...checkboxProps} id={id} className="toggle toggle-round" />
      <label htmlFor={id}>
        <span className="dib v-mid">{labelChildren}</span>
      </label>
    </div>
  )
}

Checkbox.defaultProps = {
  type: 'checkbox',
  checked: false,
}

Checkbox.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
  type: PropTypes.string,
  checked: PropTypes.bool,
  children: childrenPropType.isRequired,
  onChange: PropTypes.func,
}

export default Checkbox
