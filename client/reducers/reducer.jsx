
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
    default:
      return state
  }
}

export default reducer
