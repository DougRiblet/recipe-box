import React from 'react'

const RecipeListDumb = ({ recipeTitles, onRecipeClick }) => (
  <ul>
    {recipeTitles.map(item =>
      <li onClick={() => onRecipeClick(item.id)}>{item.title}</li>
    )}
  </ul>
)

RecipeListDumb.propTypes = {
  recipeTitles: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      id: React.PropTypes.string.isRequired
    })
  ),
  onRecipeClick: React.PropTypes.func.isRequired
}

export default RecipeListDumb
