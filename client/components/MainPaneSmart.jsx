import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setMode, updateRecipe, deleteRecipe } from '../actions/actions'
import MainPaneDumb from './MainPaneDumb'

const getActiveRecipe = (arrOfObj, activeId) => {
  return arrOfObj.find(obj => obj.id === activeId)
}

const determineDeleteAllowed = (recipes) => {
  return recipes.length > 1
}

const mapStateToProps = (state) => ({
  mode: state.mode,
  recipe: getActiveRecipe(state.recipes, state.active),
  deleteAllowed: determineDeleteAllowed(state.recipes)
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setMode, updateRecipe, deleteRecipe }, dispatch)
}

const MainPaneSmart = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPaneDumb)

export default MainPaneSmart
