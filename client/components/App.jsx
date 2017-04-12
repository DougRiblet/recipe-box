import React from 'react'
import Header from './Header'
import RecipeList from './RecipeList'
import AddRecipeForm from './AddRecipeForm'
import MainPane from './MainPane'

export default class App extends React.Component {
  render () {
    return (
      <div id='insideApp'>
        <header>
          <div id='pageHeader'>
            <Header />
          </div>
        </header>
        <main>
          <div id='pageSidebar'>
            <RecipeList />
            <AddRecipeForm />
          </div>
          <div id='pageContent'>
            <MainPane />
          </div>
        </main>
      </div>
    )
  }
}
