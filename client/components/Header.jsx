import React from 'react'

const Header = ({header}) => {
  return (
    <div id='pageHeader'>
      <h1>{header.title} <small>{header.tagline}</small></h1>
    </div>
  )
}

export default Header
