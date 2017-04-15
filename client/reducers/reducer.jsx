
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
    case 'UPDATE_RECIPE':
      let newObj = state.recipes.map(function (rec) {
        if (rec.id === action.recipe.id) {
          rec.title = action.recipe.title
          rec.ingredients = action.recipe.ingredients
          rec.directions = action.recipe.directions
          rec.note = action.recipe.notes
        }
        return rec
      })
      return Object.assign({}, state, {
        recipes: newObj,
        mode: action.mode,
        active: action.active
      })
    default:
      return state
  }
}

export default reducer
