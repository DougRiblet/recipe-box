
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return Object.assign({}, state, {
        recipes: state.recipes.concat({ name: action.name })
      })
    case 'CHANGE_ACTIVE_RECIPE':
      return Object.assign({}, state, {
        active: action.id
      })
  }
  return state
}

export default reducer
