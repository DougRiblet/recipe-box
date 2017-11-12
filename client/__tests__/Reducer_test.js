import * as types from '../actions/actionTypes'
import reducer from '../reducers/reducer'
import initialState from '../initialState/initialState'

describe('Action Creators', () => {
  test('return state unchanged if no action', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  })

})
