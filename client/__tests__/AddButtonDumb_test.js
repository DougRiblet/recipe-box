import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import AddButtonDumb from '../components/AddButtonDumb'

describe('AddButtonDumb', () => {
  test('Snapshot', () => {
    const AddButtonDumb_tree = renderer.create(
      <AddButtonDumb
        addRecipe={() => addRecipe()}
      />
    ).toJSON()
    expect(AddButtonDumb_tree).toMatchSnapshot()
  })

  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AddButtonDumb
      addRecipe={() => addRecipe()}
    />, div)
  })
})
