import React from 'react'

const AddButtonDumb = ({ addRecipe }) => (
  <button
    id='addRecipeButton'
    onClick={() => addRecipe()}
  >Add New Recipe</button>
)

AddButtonDumb.propTypes = {
  addRecipe: React.PropTypes.func.isRequired
}

export default AddButtonDumb
