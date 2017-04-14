
const generateRandom = () => String(Math.floor(Math.random() * 1000000))

export const addRecipe = () => {
  console.log('###### action reached')
  return {
    type: 'ADD_RECIPE',
    id: generateRandom()
  }
}

export const changeActiveRecipe = (id) => {
  console.log('######action: ', id)
  return {
    type: 'CHANGE_ACTIVE_RECIPE',
    id: id
  }
}

