import React from 'react'
import marked from 'marked'
import MainPaneEdit from './MainPaneEdit'

function createMarkup (input) {
  let parsedInput = marked(input, {sanitize: true})
  return {__html: parsedInput}
}

function parseMarkupDangerously (input) {
  return <div dangerouslySetInnerHTML={createMarkup(input)} />
}

function generateRecipeDisplay (recipe, setMode) {
  return (
    <div id='contentDisplay'>
      <h2>{recipe.title}</h2>
      <h4>Ingredients</h4>
      {parseMarkupDangerously(recipe.ingredients)}
      <h4>Directions</h4>
      {parseMarkupDangerously(recipe.directions)}
      <h4>Notes</h4>
      {parseMarkupDangerously(recipe.notes)}
      <div className='mainPaneButtons'>
        <button
          className='setModeButton'
          onClick={() => setMode('edit')}
        >Edit Recipe</button>
      </div>
    </div>
  )
}

function generateRecipeEdit (recipe, updateRecipe) {
  return (
    <MainPaneEdit
      recipe={recipe}
      updateRecipe={updateRecipe}
    />
  )
}

const MainPaneDumb = ({ mode, recipe, setMode, updateRecipe }) => (
  mode === 'edit'
  ? generateRecipeEdit(recipe, updateRecipe)
  : generateRecipeDisplay(recipe, setMode)
)

MainPaneDumb.propTypes = {
  mode: React.PropTypes.string.isRequired,
  recipe: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string,
    ingredients: React.PropTypes.string,
    directions: React.PropTypes.string,
    notes: React.PropTypes.string
  }).isRequired,
  setMode: React.PropTypes.func.isRequired,
  updateRecipe: React.PropTypes.func.isRequired
}

export default MainPaneDumb
