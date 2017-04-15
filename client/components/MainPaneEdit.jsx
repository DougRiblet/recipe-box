import React from 'react'

export default class MainPaneEdit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      rTitle: this.props.recipe.title,
      rIngredients: this.props.recipe.ingredients,
      rDirections: this.props.recipe.directions,
      rNotes: this.props.recipe.notes
    }
  }

  render () {
    return (
      <div id='contentEdit'>
        <h2>edit mode</h2>
        <h4>Recipe Title (required)</h4>
        <textarea
          value={this.state.rTitle}
          id='rTitle'
        />
        <h4>Ingredients (required)</h4>
        <textarea
          value={this.state.rIngredients}
          id='rIngredients'
        />
        <h4>Directions (required)</h4>
        <textarea
          value={this.state.rDirections}
          id='rDirections'
        />
        <h4>Notes (optional)</h4>
        <textarea
          value={this.state.rNotes}
          id='rNotes'
        />
        <div className='mainPaneButtons'>
          <button
            className='saveChangesButton'
            onClick={() => this.props.updateRecipe({
              id: this.props.recipe.id,
              title: this.state.rTitle,
              ingredients: this.state.rIngredients,
              directions: this.state.rDirections,
              notes: this.state.rNotes
            })}
          >Save Changes</button>
        </div>
      </div>
    )
  }
}

MainPaneEdit.propTypes = {
  recipe: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string,
    ingredients: React.PropTypes.string,
    directions: React.PropTypes.string,
    notes: React.PropTypes.string
  }).isRequired,
  updateRecipe: React.PropTypes.func.isRequired
}
