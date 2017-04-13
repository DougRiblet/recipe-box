import React from 'react'

const AddButtonDumb = ({ onAddButtonClick }) => (
  <button
    id='addRecipeButton'
    onClick={() => onAddButtonClick()}
  >Add New Recipe</button>
)

AddButtonDumb.propTypes = {
  onAddButtonClick: React.PropTypes.func.isRequired
}

export default AddButtonDumb
