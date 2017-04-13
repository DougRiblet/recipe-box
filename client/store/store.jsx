
import { createStore } from 'redux'
import reducer from '../reducers/reducer'

const initialState = {
  header: {
    title: 'RECIPE BOX!!!',
    tagline: 'A phenomenal React/Redux app'
  },
  active: '101010',
  mode: 'display',
  recipes: [
    {
      id: '101010',
      title: 'Grilled Cheese Sandwich',
      ingredients: '2 slices bread\n\n1 slice cheese\n\n2 dollops butter',
      directions: 'Spread butter on bread\n\nPlace cheese between bread slices\n\nGrill in pan until bread is lightly browned on both sides',
      notes: 'Yum yum!'
    }
  ]
}

const store = createStore(reducer, initialState)

export default store
