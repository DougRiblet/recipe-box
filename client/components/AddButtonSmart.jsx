import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addRecipe } from '../actions/actions'
import AddButtonDumb from './AddButtonDumb'

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addRecipe }, dispatch)
}

const AddButtonSmart = connect(
  null,
  mapDispatchToProps
)(AddButtonDumb)

export default AddButtonSmart
