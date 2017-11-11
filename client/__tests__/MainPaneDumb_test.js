import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import MainPaneDumb from '../components/MainPaneDumb'
import initialState from '../initialState/initialState'

describe('MainPaneDumb', () => {
  test('Snapshot', () => {
    const MainPaneDumb_tree = renderer.create(
      <MainPaneDumb
        mode={initialState.mode}
        recipe={initialState.recipes[0]}
        deleteAllowed={true}
        updateRecipe={() => updateRecipe()}
        setMode={() => setMode()}
        deleteRecipe={() => deleteRecipe()}
      />
    ).toJSON()
    expect(MainPaneDumb_tree).toMatchSnapshot()
  })

  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MainPaneDumb
      mode={initialState.mode}
      recipe={initialState.recipes[0]}
      deleteAllowed={true}
      updateRecipe={() => updateRecipe()}
      setMode={() => setMode()}
      deleteRecipe={() => deleteRecipe()}
    />, div)
  })

  test('should display proper headings', () => {
    const sampleComponent = shallow(<MainPaneDumb
      mode={initialState.mode}
      recipe={initialState.recipes[0]}
      deleteAllowed={true}
      updateRecipe={() => updateRecipe()}
      setMode={() => setMode()}
      deleteRecipe={() => deleteRecipe()}
    />).html()
    const recipeHeadIng = '<h4>Ingredients</h4>'
    const recipeHeadDir = '<h4>Directions</h4>'
    const recipeHeadNot = '<h4>Notes</h4>'
    expect(sampleComponent).toContain(recipeHeadIng)
    expect(sampleComponent).toContain(recipeHeadDir)
    expect(sampleComponent).toContain(recipeHeadNot)
  })

  test('should display text of passed recipe', () => {
    const sampleComponent = shallow(<MainPaneDumb
      mode={initialState.mode}
      recipe={initialState.recipes[0]}
      deleteAllowed={true}
      updateRecipe={() => updateRecipe()}
      setMode={() => setMode()}
      deleteRecipe={() => deleteRecipe()}
    />).html()
    const recipeTtl = '<h1>Grilled Cheese Sandwich</h1>'
    const recipeIng = '<p>2 slices bread</p>'
    const recipeDir = '<p>Grill in pan until bread is lightly browned on both sides</p>'
    const recipeNot = '<p>Yum yum!</p>'
    expect(sampleComponent).toContain(recipeTtl)
    expect(sampleComponent).toContain(recipeIng)
    expect(sampleComponent).toContain(recipeDir)
    expect(sampleComponent).toContain(recipeNot)
  })

  test('should display edit button', () => {
    const sampleComponent = shallow(<MainPaneDumb
      mode={initialState.mode}
      recipe={initialState.recipes[0]}
      deleteAllowed={true}
      updateRecipe={() => updateRecipe()}
      setMode={() => setMode()}
      deleteRecipe={() => deleteRecipe()}
    />).html()
    const editButton = '<button class="setModeButton">Edit Recipe</button>'
    expect(sampleComponent).toContain(editButton)
  })
})
