import React from 'react'
import { childrenPropType } from '../../constants'

const PageWrapper = ({ children }) => (
  <div>{children}</div>
)

PageWrapper.propTypes = {
  children: childrenPropType,
}

export default PageWrapper
