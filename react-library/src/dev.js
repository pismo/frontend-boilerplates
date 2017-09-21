/* dev only file */
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import OnDOMReady from 'domready'
import App from './App'

let container

const renderApp = (container = container) =>
  render(
    <AppContainer>
      <App>
        <h1>page content :)</h1>
      </App>
    </AppContainer>,
    container
  )

OnDOMReady(() => {
  container = document.getElementById('root')
  renderApp(container)
})

/* HMR API */
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default

    ReactDOM.render(
      <AppContainer>
        <NextApp>
          <h1>page content hot reloaded :)</h1>
        </NextApp>
      </AppContainer>,
      container
    )
  })
}

export { renderApp }
export default App
