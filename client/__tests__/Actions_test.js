
import * as actions from '../actions/actions'
import * as types from '../actions/actionTypes'

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

})
