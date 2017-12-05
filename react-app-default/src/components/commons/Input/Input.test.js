import React from 'react'
import Input from './Input'
import { shallow } from 'enzyme'

describe('Render Input', () => {
  it('should render without crashing', () => {
    shallow(<Input />)
  })
})
