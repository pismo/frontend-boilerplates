import React from 'react'
import './InputFeedback.scss'

export default ({ error }) => {
  return error ? <div className="input-feedback">{error}</div> : null
}
