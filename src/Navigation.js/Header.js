import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {

  const style = {
    padding: "5em"
  }

  return (
        <NavLink style={style} exact to="/">
            <h1>Maybelline Catalog Collection</h1>
        </NavLink>
  )
}

export default Header