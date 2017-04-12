import React from 'react'
import Header from './Header'
import RecipeList from './RecipeList'
import MainPane from './MainPane'

export default class App extends React.Component {
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
