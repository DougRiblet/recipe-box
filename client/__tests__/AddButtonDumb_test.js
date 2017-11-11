import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
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

  test('should display add Recipe button', () => {
    const sampleComponent = shallow(<AddButtonDumb
      addRecipe={() => addRecipe()}
    />).html()
    const addRecipeButton = '<button id="addRecipeButton">Add New Recipe</button>'
    expect(sampleComponent).toContain(addRecipeButton)
  })
})
