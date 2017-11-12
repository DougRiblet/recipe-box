import { ADD_RECIPE, CHANGE_ACTIVE_RECIPE, SET_MODE, UPDATE_RECIPE, DELETE_RECIPE } from './actionTypes'

const generateRandom = () => String(Math.floor(Math.random() * 1000000))

export const addRecipe = () => {
  let newId = generateRandom()
  return {
    type: ADD_RECIPE,
    id: newId,
    active: newId,
    mode: 'edit'
  }
}

export const changeActiveRecipe = (id) => {
  return {
    type: CHANGE_ACTIVE_RECIPE,
    id: id
  }
}

export const setMode = (mode) => {
  return {
    type: SET_MODE,
    mode: mode
  }
}

export const updateRecipe = (recipe) => {
  return {
    type: UPDATE_RECIPE,
    recipe: recipe,
    mode: 'display',
    active: recipe.id
  }
}

export const deleteRecipe = (id) => {
  return {
    type: DELETE_RECIPE,
    id: id
  }
}
