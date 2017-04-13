import { connect } from 'react-redux'
import { addRecipe } from '../actions/actions'
import AddButtonDumb from './AddButtonDumb'

const mapDispatchToProps = (dispatch) => ({
  onAddButtonClick: addRecipe
})

const AddButtonSmart = connect(
  mapDispatchToProps
)(AddButtonDumb)

export default AddButtonSmart
