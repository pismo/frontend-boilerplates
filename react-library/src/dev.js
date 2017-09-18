/* dev only file */
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import OnDOMReady from 'domready'
import App from './App'

const container = document.createElement('div')
container.setAttribute('id', 'root')

const renderApp = (container = container) =>
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    container
  )

OnDOMReady(() => {
  renderApp(container)
  document.body.appendChild(container)
})

/* HMR API */
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}

export { renderApp }
export default App
