import React from 'react'
import { Label, InputFeedback, Input } from '../'
import './TextInput.scss'

export default ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  const classes = ['input-group', error ? 'error' : '', className].join(' ')

  value = value || ''

  return (
    <div className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <Input
        name={id}
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  )
}
