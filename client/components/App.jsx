import React from 'react'
import Header from './Header'
import RecipeListSmart from './RecipeListSmart'
import AddButtonSmart from './AddButtonSmart'
import MainPane from './MainPane'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <header>
          <div id='pageHeader'>
            <Header />
          </div>
        </header>
        <main>
          <div id='pageSidebar'>
            <RecipeListSmart />
            <AddButtonSmart />
          </div>
          <div id='pageContent'>
            <MainPane />
          </div>
        </main>
      </div>
    )
  }
}
