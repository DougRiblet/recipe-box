import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
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
})
