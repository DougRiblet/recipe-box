import React from 'react'

export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div id='pageHeader'>
        <h1>Recipe Box App</h1>
      </div>
    )
  }

}
