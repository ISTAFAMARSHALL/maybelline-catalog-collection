import React from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { StyleHTMLAttributes } from 'react'


function Header() {


  const history = useHistory()
  
  const style = {
    padding: "5em"
  }



  return (
        <h1 onClick={() => history.push("/")} >
        Maybelline Catalog Collection
        </h1>
  )
}

export default Header