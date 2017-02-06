import React from 'react'
import Header from './Header'
import RecipeList from './RecipeList'
import MainPane from './MainPane'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div id='insideApp'>
        <Header />
        <RecipeList />
        <MainPane />
      </div>
    )
  }

}
