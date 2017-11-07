import React from 'react'
import renderer from 'react-test-renderer'
import HeaderBox from '../components/HeaderBox'
import ReactDOM from 'react-dom';

describe('HeaderBox', () => {
  test('renders correctly', () => {
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



