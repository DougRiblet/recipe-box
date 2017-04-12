
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return Object.assign({}, state, {
        recipes: state.recipes.concat({ name: action.name })
      })
  }
  return state
}

export default reducer
