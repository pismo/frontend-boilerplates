import React, { Component } from 'react'
import { isDevEnv } from '../../utils'

import './DataPrinter.scss'

class DataPrinter extends Component {
  render() {
    const { style, data } = this.props

    if (!isDevEnv()) return null

    return (
      <div className="DataPrinter" style={style}>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    )
  }
}
export default DataPrinter
