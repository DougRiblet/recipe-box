
export const addRecipe = () => {
  return {
    type: 'ADD_RECIPE'
  }
}

export const changeActiveRecipe = (id) => {
  console.log('######action: ', id)
  return {
    type: 'CHANGE_ACTIVE_RECIPE',
    id: id
  }
}

