import React from 'react'
import Checkbox from './Checkbox'
import { shallow } from 'enzyme'

describe('Render Checkbox', () => {
  it('should render without crashing', () => {
    shallow(<Checkbox />)
  })
})
