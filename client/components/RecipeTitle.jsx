import React from 'react'

const RecipeTitle = ({ changeActiveRecipe, title }) => (
  <li onClick={changeActiveRecipe}>{title}</li>
)

RecipeTitle.propTypes = {
  changeActiveRecipe: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired
}

export default RecipeTitle
