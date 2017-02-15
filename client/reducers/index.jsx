import { combineReducers } from 'redux'

const initialState = {
  recipes: [
    {
      title: 'Kale Apple Smoothie',
      ingredients: 'Kale, Apple, Yogurt',
      directions: 'Mix it all together in a blender'
    }
  ]
}

const setRecipeApp = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }
  return state
}

const allRed = combineReducers({
  setRecipeApp
})

export default allRed
