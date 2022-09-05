import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {

  const style = {
    padding: "5em"
  }

  return (
    <h1>
        <NavLink exact to="/">
            Maybelline Catalog Collection
        </NavLink>
        </h1>
  )
}

export default Header