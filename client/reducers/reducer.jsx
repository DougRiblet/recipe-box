
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return Object.assign({}, state, {
        recipes: state.recipes.concat({
          id: action.id,
          title: 'New Recipe',
          ingredients: 'add ingredients',
          directions: 'provide directions',
          notes: 'optional notes'
        })
      })
    case 'CHANGE_ACTIVE_RECIPE':
      return Object.assign({}, state, {
        active: action.id
      })
    case 'SET_MODE':
      return Object.assign({}, state, {
        mode: action.mode
      })
    default:
      return state
  }
}

export default reducer
