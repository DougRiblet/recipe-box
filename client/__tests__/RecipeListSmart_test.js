import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import RecipeListSmart from '../components/RecipeListSmart'
import initialState from '../initialState/initialState'

describe('RecipeListSmart', () => {
  const mockStore = configureStore()
  let store, container

  beforeEach(()=>{
    store = mockStore(initialState)
    container = shallow(<RecipeListSmart store={store} />)
  })

  test('render the smart component', () => {
    expect(container.length).toEqual(1)
  })
})
