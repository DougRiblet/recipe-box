import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeActiveRecipe } from '../actions/actions'
import RecipeListDumb from './RecipeListDumb'

const justTitlesIds = (arrOfObj) => {
  return arrOfObj.map(obj => (
    {'title': obj.title, 'id': obj.id}
  ))
}

const mapStateToProps = (state) => ({
  recipeTitles: justTitlesIds(state.recipes)
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeActiveRecipe }, dispatch)
}

const RecipeListSmart = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeListDumb)

export default RecipeListSmart
