import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import RecipeTitle from '../components/RecipeTitle'

describe('RecipeTitle', () => {
  test('renders correctly', () => {
    const RecipeTitle_tree = renderer.create(
      <RecipeTitle
        key={'0123456'}
        title={'string'}
        changeActiveRecipe={() => changeActiveRecipe('0123456')}
      />
    ).toJSON()
    expect(RecipeTitle_tree).toMatchSnapshot()
  })

  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<RecipeTitle
      key={'0123456'}
      title={'string'}
      changeActiveRecipe={() => changeActiveRecipe('0123456')}
    />, div)
  })

  test('should display the passed title', () => {
    const sampleComponent = shallow(<RecipeTitle
      key={'0123456'}
      title={'Kind Veggie Burrito'}
      changeActiveRecipe={() => changeActiveRecipe('0123456')}
    />)
    const displayedLI = <li onClick={changeActiveRecipe}>Kind Veggie Burrito</li>
    expect(sampleComponent.contains(displayedLI)).toEqual(true)
  })
})
