
import * as actions from '../actions/actions'
import * as types from '../actions/actionTypes'
import initialState from '../initialState/initialState'

describe('Action Creators', () => {
  test('call action to change active recipe', () => {
    const idString = '345789'
    const expectedAction = {
      type: types.CHANGE_ACTIVE_RECIPE,
      id: idString
    }
    expect(actions.changeActiveRecipe(idString)).toEqual(expectedAction)
  })

  test('call action to set mode (display or edit)', () => {
    const newMode = 'edit'
    const expectedAction = {
      type: types.SET_MODE,
      mode: newMode
    }
    expect(actions.setMode(newMode)).toEqual(expectedAction)
  })

  test('call action to update recipe after editing', () => {
    const dummyRecipe = initialState.recipes[0]
    const expectedAction = {
      type: types.UPDATE_RECIPE,
      recipe: dummyRecipe,
      mode: 'display',
      active: dummyRecipe.id
    }
    expect(actions.updateRecipe(dummyRecipe)).toEqual(expectedAction)
  })

  test('call action to delete recipe', () => {
    const idString = '345789'
    const expectedAction = {
      type: types.DELETE_RECIPE,
      id: idString
    }
    expect(actions.deleteRecipe(idString)).toEqual(expectedAction)
  })
})
