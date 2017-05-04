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
      <h1>{recipe.title}</h1>
      <div id='ing-column'>
        <h4>Ingredients</h4>
        {parseMarkupDangerously(recipe.ingredients)}
      </div>
      <div id='dir-column'>
        <h4>Directions</h4>
        {parseMarkupDangerously(recipe.directions)}
        <h4>Notes</h4>
        {parseMarkupDangerously(recipe.notes)}
      </div>
      <div className='mainPaneButtons'>
        <button
          className='setModeButton'
          onClick={() => setMode('edit')}
        >Edit Recipe</button>
      </div>
    </div>
  )
}

function generateRecipeEdit (recipe, updateRecipe, deleteRecipe, deleteAllowed, setMode) {
  return (
    <MainPaneEdit
      recipe={recipe}
      updateRecipe={updateRecipe}
      deleteAllowed={deleteAllowed}
      deleteRecipe={deleteRecipe}
      setMode={setMode}
    />
  )
}

const MainPaneDumb = ({ mode, recipe, setMode, updateRecipe, deleteRecipe, deleteAllowed }) => (
  mode === 'edit'
  ? generateRecipeEdit(recipe, updateRecipe, deleteRecipe, deleteAllowed, setMode)
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
  updateRecipe: React.PropTypes.func.isRequired,
  deleteRecipe: React.PropTypes.func.isRequired,
  deleteAllowed: React.PropTypes.bool.isRequired
}

export default MainPaneDumb
