import React from 'react'
import marked from 'marked'

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

function generateRecipeEdit (recipe, setMode) {
  return (
    <div id='contentEdit'>
      <h2>edit mode</h2>
      <h4>Recipe Title (required)</h4>
      <textarea name='rTitle' id='rTitle'>{recipe.title}</textarea>
      <h4>Ingredients (required)</h4>
      <textarea name='rIngredients' id='rIngredients'>{recipe.ingredients}</textarea>
      <h4>Directions (required)</h4>
      <textarea name='rDirections' id='rDirections'>{recipe.directions}</textarea>
      <h4>Notes (optional)</h4>
      <textarea name='rNotes' id='rNotes'>{recipe.notes}</textarea>
      <div className='mainPaneButtons'>
        <button
          className='setModeButton'
          onClick={() => setMode('display')}
        >Display Recipe</button>
      </div>
    </div>
  )
}

const MainPaneDumb = ({ mode, recipe, setMode }) => (
  mode === 'edit'
  ? generateRecipeEdit(recipe, setMode)
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
  setMode: React.PropTypes.func.isRequired
}

export default MainPaneDumb
