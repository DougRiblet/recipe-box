import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import RecipeListDumb from '../components/RecipeListDumb'

describe('RecipeListDumb', () => {
  test('Snapshot', () => {
    let dummyRecipeTitles = [{id: '101010', title: 'Grilled Cheese Sandwich'}]
    const RecipeListDumb_tree = renderer.create(
      <RecipeListDumb
        recipeTitles={dummyRecipeTitles}
        changeActiveRecipe={() => changeActiveRecipe('010101')}
      />
    ).toJSON()
    expect(RecipeListDumb_tree).toMatchSnapshot()
  })

  test('renders without crashing', () => {
    const div = document.createElement('div')
    let dummyRecipeTitles = [{id: '101010', title: 'Grilled Cheese Sandwich'}]
    ReactDOM.render(<RecipeListDumb
      recipeTitles={dummyRecipeTitles}
      changeActiveRecipe={() => changeActiveRecipe('010101')}
    />, div)
  })

  test('renders component', () => {
    let dummyRecipeTitles = [{id: '101010', title: 'Grilled Cheese Sandwich'}]
    let wrapper = shallow(<RecipeListDumb
      recipeTitles={dummyRecipeTitles}
      changeActiveRecipe={() => changeActiveRecipe('010101')}
    />)
    expect(wrapper.length).toEqual(1)
  })
})
