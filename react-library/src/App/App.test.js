import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('Render App', () => {
  it('should render without crashing', () => {
    shallow(<App />)
  })
})
