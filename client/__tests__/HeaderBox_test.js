import React from 'react'
import renderer from 'react-test-renderer'
import HeaderBox from '../components/HeaderBox'

describe('HeaderBox', () => {
  test('renders correctly', () => {
    const HeaderBox_tree = renderer.create(
      <HeaderBox />
    ).toJSON()
    expect(HeaderBox_tree).toMatchSnapshot()
  })
})
