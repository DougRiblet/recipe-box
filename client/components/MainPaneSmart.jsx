import { connect } from 'react-redux'
import {  } from '../actions/actions'
import MainPaneDumb from './MainPaneDumb'

const mapStateToProps = (state) => ({

})

const MainPaneSmart = connect(
  mapStateToProps
)(MainPaneDumb)

export default MainPaneSmart
