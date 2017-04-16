
import { compose, createStore } from 'redux'
import reducer from '../reducers/reducer'
import { persistStore, autoRehydrate } from 'redux-persist'
// import localforage from 'localforage'

const store = createStore(reducer, undefined, compose(autoRehydrate()))

persistStore(store)

export default store
