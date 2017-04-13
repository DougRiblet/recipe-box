import { connect } from 'react-redux'
import MainPaneDumb from './MainPaneDumb'

const getActiveRecipe = (arrOfObj, activeId) => {
  return arrOfObj.find(obj => obj.id === activeId)
}

const mapStateToProps = (state) => ({
  active: state.active,
  mode: state.mode,
  recipe: getActiveRecipe(state.recipes, state.active)
})

const MainPaneSmart = connect(
  mapStateToProps
)(MainPaneDumb)

export default MainPaneSmart
