
import { createStore } from 'redux'
import reducer from '../reducers/reducer'

const initialState = {
  header: {
    title: 'RECIPE BOX!!!',
    tagline: 'A phenomenal React/Redux app'
  },
  active: null,
  mode: 'display',
  recipes: []
}

const store = createStore(reducer, initialState)

export default store
