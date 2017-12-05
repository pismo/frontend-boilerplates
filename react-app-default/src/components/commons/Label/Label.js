import React from 'react'
import './Label.scss'

export default ({ error, className, children, ...props }) => {
  return (
    <label className="Label" {...props}>
      {children}
    </label>
  )
}
