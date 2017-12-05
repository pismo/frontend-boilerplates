import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AppBarLogo extends Component {
  render() {
    const { src, title, alt } = this.props

    return (
      <div
        className="dib bg-pismo-near-black tc v-mid fr"
        style={{ height: '48px', width: '48px', lineHeight: '65px' }}
      >
        <img src={src} alt={alt} title={title} />
      </div>
    )
  }
}

AppBarLogo.proptypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
}

AppBarLogo.defaultProps = {
  src: '',
  title: '',
  alt: '',
}

export default AppBarLogo
