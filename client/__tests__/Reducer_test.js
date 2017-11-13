import * as types from '../actions/actionTypes'
import * as actions from '../actions/actions'
import reducer from '../reducers/reducer'
import initialState from '../initialState/initialState'

describe('Action Creators', () => {
  test('return state unchanged if no action', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  })

  test('process setMode action correctly', () => {
    let actionSetModeToEdit = actions.setMode('edit')
    expect(reducer(initialState, actionSetModeToEdit)).toEqual({
      active: '101010',
      mode: 'edit',
      recipes: [
        {
          id: '101010',
          title: 'Grilled Cheese Sandwich',
          ingredients: '2 slices bread\n\n1 slice cheese\n\n2 dollops butter',
          directions: 'Spread butter on bread\n\nPlace cheese between bread slices\n\nGrill in pan until bread is lightly browned on both sides',
          notes: 'Yum yum!'
        }
      ]
    })
  })

  test('process changeActiveRecipe action correctly', () => {
    let actionchangeActiveRecipe = actions.changeActiveRecipe('975386')
    let { active } = reducer(initialState, actionchangeActiveRecipe)
    expect(active).toEqual('975386')
  })

})
