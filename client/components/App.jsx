import React from 'react'
import Header from './Header'
import RecipeList from './RecipeList'
import MainPane from './MainPane'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      header: {title: 'Recipe Box', tagline: 'An awesome React app'}
    }
  }

  render () {
    return (
      <div id='insideApp'>
        <Header header={this.state.header} />
        <RecipeList />
        <MainPane />
      </div>
    )
  }

}
