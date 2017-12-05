import PropTypes from 'prop-types'

export default PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.node,
  PropTypes.element,
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.arrayOf(PropTypes.element),
])
