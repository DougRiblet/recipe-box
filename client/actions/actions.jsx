
const generateRandom = () => String(Math.floor(Math.random() * 1000000))

export const addRecipe = () => {
  return {
    type: 'ADD_RECIPE',
    id: generateRandom()
  }
}

export const changeActiveRecipe = (id) => {
  return {
    type: 'CHANGE_ACTIVE_RECIPE',
    id: id
  }
}

