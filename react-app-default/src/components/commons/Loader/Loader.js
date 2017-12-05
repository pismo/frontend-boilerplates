import React from 'react'
import PropTypes from 'prop-types'

import './Loader.scss'

const Loader = ({ size, color }) => {
  let sizeAcronym

  switch (size) {
    case 'small':
      sizeAcronym = 'sm'
      break
    default:
      sizeAcronym = 'xl'
  }

  return (
    <div
      style={{ borderColor: `${color}` }}
      className={`
        CRMloading loading-lg
        loading-${sizeAcronym}
        b--${color}
      `}
    />
  )
}

Loader.defaultProps = {
  size: 'big',
  color: 'white',
}

Loader.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default Loader
