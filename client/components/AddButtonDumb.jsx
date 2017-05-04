import React from 'react'

const AddButtonDumb = ({ addRecipe }) => (
  <div id='add-recipe-div'>
    <button
      id='addRecipeButton'
      onClick={() => addRecipe()}
    >Add New Recipe</button>
  </div>
)

AddButtonDumb.propTypes = {
  addRecipe: React.PropTypes.func.isRequired
}

export default AddButtonDumb
