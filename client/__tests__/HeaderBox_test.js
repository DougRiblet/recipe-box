import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import HeaderBox from '../components/HeaderBox'

describe('HeaderBox', () => {
  test('Snapshot', () => {
    const HeaderBox_tree = renderer.create(
      <HeaderBox />
    ).toJSON()
    expect(HeaderBox_tree).toMatchSnapshot()
  })

  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<HeaderBox />, div)
  })
})
