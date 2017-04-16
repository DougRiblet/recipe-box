import ReactDOM from 'react-dom'
import React from 'react'
import App from './components/App'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import reducer from './reducers/reducer'
import { persistStore, autoRehydrate } from 'redux-persist'
import logger from 'redux-logger'

const store = compose(autoRehydrate(), applyMiddleware(logger))(createStore)(reducer)

class AppShell extends React.Component {
  constructor () {
    super()
    this.state = { rehydrated: false }
  }

  componentWillMount () {
    persistStore(store, {}, () => {
      this.setState({ rehydrated: true })
    })
  }

  render () {
    if (!this.state.rehydrated) {
      return <div>Loading...</div>
    }
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <AppShell />
  </Provider>,
  document.getElementById('app')
)
