// import { observer, inject } from 'mobx-react'
import component from './AppBarUser'
import { injectIntl } from 'react-intl'
import { withRouter } from 'react-router-dom'

export default withRouter(
  injectIntl(
    component
  )
)
