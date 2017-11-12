
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
})
