import React from 'react'
import './Button.scss'

const button = ({ text, type, icon, className, disabled, onClick }) => {
  return (
    <button
      className={`btn
        ${className || 'btn-theme'}
        ${icon && !text ? 'btn-icon' : ''}
        ${disabled ? 'btn-disabled' : ''}`}
      type={type || 'button'}
      disabled={disabled}
      onClick={onClick}
    >
      {text && <span>{text}</span>}
      {icon}
    </button>
  )
}

export default button
