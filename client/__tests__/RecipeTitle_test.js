import React from 'react'
import renderer from 'react-test-renderer'
import RecipeTitle from '../components/RecipeTitle'
import ReactDOM from 'react-dom'

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
})
