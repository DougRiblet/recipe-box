import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setMode, updateRecipe } from '../actions/actions'
import MainPaneDumb from './MainPaneDumb'

const getActiveRecipe = (arrOfObj, activeId) => {
  return arrOfObj.find(obj => obj.id === activeId)
}

const mapStateToProps = (state) => ({
  mode: state.mode,
  recipe: getActiveRecipe(state.recipes, state.active)
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setMode, updateRecipe }, dispatch)
}

const MainPaneSmart = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPaneDumb)

export default MainPaneSmart
