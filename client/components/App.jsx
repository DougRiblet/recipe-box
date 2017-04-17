import React from 'react'
import Header from './Header'
import RecipeListSmart from './RecipeListSmart'
import AddButtonSmart from './AddButtonSmart'
import MainPaneSmart from './MainPaneSmart'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <header>
          <div id='headerContainer'>
            <div id='pageHeader'>
              <Header />
            </div>
          </div>
        </header>
        <main>
          <div id='mainContainer'>
            <div id='pageMain'>
              <div id='pageSidebar'>
                <RecipeListSmart />
                <AddButtonSmart />
              </div>
              <div id='pageContent'>
                <MainPaneSmart />
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
