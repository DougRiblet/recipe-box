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
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleChangeIngredients = this.handleChangeIngredients.bind(this)
    this.handleChangeDirections = this.handleChangeDirections.bind(this)
    this.handleChangeNotes = this.handleChangeNotes.bind(this)
  }

  handleChangeTitle (event) {
    this.setState({rTitle: event.target.value})
  }

  handleChangeIngredients (event) {
    this.setState({rIngredients: event.target.value})
  }

  handleChangeDirections (event) {
    this.setState({rDirections: event.target.value})
  }

  handleChangeNotes (event) {
    this.setState({rNotes: event.target.value})
  }

  render () {
    return (
      <div id='contentEdit'>
        <h2>edit mode</h2>
        <h4>Recipe Title (required)</h4>
        <textarea
          value={this.state.rTitle}
          id='rTitle'
          onChange={this.handleChangeTitle}
        />
        <h4>Ingredients (required)</h4>
        <textarea
          value={this.state.rIngredients}
          id='rIngredients'
          onChange={this.handleChangeIngredients}
        />
        <h4>Directions (required)</h4>
        <textarea
          value={this.state.rDirections}
          id='rDirections'
          onChange={this.handleChangeDirections}
        />
        <h4>Notes (optional)</h4>
        <textarea
          value={this.state.rNotes}
          id='rNotes'
          onChange={this.handleChangeNotes}
        />
        <div className='mainPaneButtons'>
          <button
            id='saveChangesButton'
            onClick={() => this.props.updateRecipe({
              id: this.props.recipe.id,
              title: this.state.rTitle,
              ingredients: this.state.rIngredients,
              directions: this.state.rDirections,
              notes: this.state.rNotes
            })}
          >Save Changes</button>

          <button
            id='discardChangesButton'
            onClick={() => this.props.setMode('display')}
          >Discard Changes</button>

          {this.props.deleteAllowed &&
            <button
              id='deleteRecipeButton'
              onClick={() => this.props.deleteRecipe(this.props.recipe.id)}
            >Delete Recipe</button>
          }
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
  updateRecipe: React.PropTypes.func.isRequired,
  deleteAllowed: React.PropTypes.bool.isRequired,
  deleteRecipe: React.PropTypes.func.isRequired,
  setMode: React.PropTypes.func.isRequired
}
