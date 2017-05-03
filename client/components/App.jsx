import React from 'react'
import HeaderBox from './HeaderBox'
import RecipeListSmart from './RecipeListSmart'
import AddButtonSmart from './AddButtonSmart'
import MainPaneSmart from './MainPaneSmart'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <div id='mainContainer'>
          <div id='pageSidebar'>
            <HeaderBox />
            <RecipeListSmart />
            <AddButtonSmart />
          </div>
          <div id='pageContent'>
            <MainPaneSmart />
          </div>
        </div>
      </div>
    )
  }
}
